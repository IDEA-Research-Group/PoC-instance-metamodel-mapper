<?php
/**
 * Created by PhpStorm.
 * User: alejandro
 * Date: 19/8/18
 * Time: 13:07
 */

namespace App\Repositories;


use App\Activity;
use App\ProcessDefinition;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Carbon\Carbon;

class ActivityInstancesRepository
{
    protected $a_repository;
    protected $pd_repository;
    protected $pi_repository;

    public function __construct(ActivitiesRepository $a_repository,
                                ProcessDefinitionRepository $pd_repository,
                                ProcessInstancesRepository $pi_repository )
    {
        $this->a_repository     = $a_repository;
        $this->pd_repository    = $pd_repository;
        $this->pi_repository    = $pi_repository;
    }



    public function getOneById($id)
    {
//        $c_key = 'activity-instance'.$id;
//        return Cache::tags(['activity-instance'])->remember($c_key, 60, function() use ($id) {
            // Declaring vars we'll use later
            $a_instance = $a_definition = null;
            // Taking all definitions, but only with the minimum params
            $definitions = Activity::all(['id', 'matching']);
            // Iterating over them to check if anyone has the requested instance
            $definitions->each( function($definition) use ($id, &$a_instance, &$a_definition){
                if($definition->instances()->id($id)->count() > 0){
                    $a_instance     = $definition->instances()->id($id)->first();
                    $a_definition   = $definition;
                    // If we find it, we stop iterating
                    return false;
                };
            });
            // Simulating fail of findOrFail()
            if(empty($a_instance)){
                throw new ModelNotFoundException();
            }
            return $a_instance;
//        });
    }

    public function getList(Request $request){
//        TODO Se ha desactivado la cache por fallo con redis por tema de limites de memoria en el entorno
//        $c_key = generate_request_cache_key('activity-instance-list-');

//        return Cache::tags(['activity-instance'])->remember($c_key, 60, function() use ($request) {
            if (!empty($request->processDefinitionId)){
                $activities = ProcessDefinition::findOrFail($request->processDefinitionId)
                    ->activities()
                    ->id($request->activityId)
                    ->name($request->activityName)->get();
            } elseif (!empty($request->activityId)){
                $activities = Activity::findOrFail($request->activityId)
                    ->name($request->activityName)->get();
            } elseif (!empty($request->activityName)){
                $activities = Activity::name($request->activityName);
            }else{
                $activities = Activity::all();
            }

            $instances  = $activities->map(function($item) use($request){
                return $this->getInstancesFromActivity($item, $request);
            })->flatten();
            return $instances;
//        });
    }

    public function getListByDate(Request $request){
        $instances = $this->getList($request);
        $res = $instances->sortBy('startTime')->groupBy(function($date) {
                return Carbon::parse($date->startTime)->format('d-m-Y'); // grouping by years
                //return Carbon::parse($date->created_at)->format('m'); // grouping by months
            });
        $date_counted = $res->mapWithKeys(function($group, $key){
            //return $group->key;
            return [$key => $group->count()];
        });
        return $date_counted;
    }


    public function getListCount(Request $request){

        $c_key = generate_request_cache_key('activity-instance-count-');

        return Cache::tags(['activity-instance'])->remember($c_key, 60, function() use ($request) {
            if (!empty($request->processDefinitionId)){
                $activities = ProcessDefinition::findOrFail($request->processDefinitionId)
                    ->activities()
                    ->id($request->activityId)
                    ->name($request->activityName)->get();
            } elseif (!empty($request->activityId)){
                $activities = Activity::findOrFail($request->activityId)
                    ->name($request->activityName)->get();
            } elseif (!empty($request->activityName)){
                $activities = Activity::name($request->activityName);
            }else{
                $activities = Activity::all();
            }

            $instances  = $activities->map(function($item) use($request){
                return $item->instances()
                    ->id($request->activityInstanceId)
                    ->process($request->processInstanceId)
                    ->finished($request->finished)
                    ->unfinished($request->unfinished)
                    ->canceled($request->canceled)
                    ->completedScope($request->completeScope)
                    ->count();
            })->flatten();
            $count = $instances->sum();

            return ['count'=>$count];
        });
    }

    private function getInstancesFromActivity($activity, $request){
        $c_key = generate_request_cache_key("activity-instances-of-activity-$activity->id-");
//        return Cache::tags(['activity-instance'])->remember($c_key, 60, function() use ($activity, $request) {
            return $activity->instances()
                ->id($request->activityInstanceId)
                ->process($request->processInstanceId)
                ->finished($request->finished)
                ->unfinished($request->unfinished)
                ->canceled($request->canceled)
                ->completedScope($request->completeScope)
//                ->paginate(50);
                ->get();
//        });
    }


}