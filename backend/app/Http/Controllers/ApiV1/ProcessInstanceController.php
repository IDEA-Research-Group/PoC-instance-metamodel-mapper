<?php

namespace App\Http\Controllers\ApiV1;

use App\ProcessDefinition;
use App\processInstance;
use App\Repositories\ProcessInstancesRepository;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class processInstanceController extends BaseController
{
    protected $pi_repository;

    public function __construct(ProcessInstancesRepository $pi_repository){
        $this->pi_repository = $pi_repository;
    }

    /**
     * Camunda Process Instance Get List Count
     * Return the count of instances filtered by parameters and definitions ids
     * @param Request $request
     * @return array
     */
    public function getCount(Request $request){
        $count = $this->pi_repository->getListCountFiltered($request);
        return ['count'=>$count];
    }

    /**
     * Camunda Process Instance Get List
     * Return a list filtered, by instance parameters and definitions ids
     * @param Request $request
     * @return mixed
     */
    public function getList(Request $request){
        $instances =  $this->pi_repository->getListFiltered($request);
        $instances->transform( function($instance){
            $instance->definitionId = $instance->instanciator->id;
            $instance->makeVisible('definitionId');
            $instance->makeHidden(['matching']);
            return $instance;
        });
        return $instances;
    }

    /**
     * Camunda Process Instace Get
     * Get One P. Definition by given id formatting response according to Camunda
     * @param $id
     * @throws ModelNotFoundException
     * @return ProcessInstance
     */
    public function getOneById($id){
        $instance = $this->pi_repository->getOneById($id);
        $instance->makeHidden(['matching']);
        $instance->makeVisible(['definitionId']);
        $instance->definitionId = $instance->instanciator->id;
        return $instance;
    }

    public function getActivityInstances($id){
//        $definitions = getActivityDefinitionsById()
        $c_key = 'process-instance-activity-'.$id;
//        return Cache::tags(['process-instance'])->remember($c_key, 60, function() use ($id) {
            $instance = $this->pi_repository->getOneById($id);
            return $instance->allActivityInstances;

//        });



    }

    /**
     * Similar to processDefinitionStatistics but for PI
    */
    public function getActivityInstanceStatistics($id){
//        $activities = $definition->activities()->get(['id','name','matching']);
        $instance       = $this->pi_repository->getOneById($id);
//        dd($instance);
        $instances_qb   = $instance->activityInstances();

        $statistics = $instances_qb->transform(function ($item, $key) {
            $first = $item->first();
            if(empty($first)){
                return [
                    'id' => '-',
                    'name' => '-',
                    'instances' => 0,
                ];
            }
            $act = $first->activity;
            $count = $item->count();
            return [
                'id' => $act->id,
                'name' => $act->name,
                'instances' => $count,
            ];
        });
        return $statistics;
    }

    /**
     * Retrieves a report about the duration of completed process instances, grouped by a period. These reports include
     * the maximum, minimum and average duration of all completed process instances which were started in a given period.
     * https://docs.camunda.org/manual/7.8/reference/rest/history/process-instance/get-duration-report/
     * @param Request $request
     */
    public function getDurationReport(Request $request){
        // TODO
    }


}
