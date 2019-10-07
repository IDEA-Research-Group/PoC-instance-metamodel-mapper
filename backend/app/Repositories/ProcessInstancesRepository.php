<?php

namespace App\Repositories;

use App\ProcessDefinition;
use App\ProcessInstance;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class ProcessInstancesRepository
{
    protected $pd_repository;

    public function __construct(ProcessDefinitionRepository $pd_repository)
    {
        $this->pd_repository = $pd_repository;
    }

    /**
     * Get One P. Definition by given id
     *
     * @param $id
     * @throws ModelNotFoundException $exception
     * @return ProcessInstance $p_instance
     */
    public function getOneById($id)
    {
        $c_key = 'process-instance'.$id;
        return Cache::tags(['process-instance'])->remember($c_key, 60, function() use ($id) {
            // Declaring vars we'll use later
            $p_instance = $p_definition = null;
            // Taking all definitions, but only with the minimum params
            $definitions = ProcessDefinition::all(['id', 'matching']);
            // Iterating over them to check if anyone has the requested instance
            $definitions->each( function($definition) use ($id, &$p_instance, &$p_definition){
                if($definition->instances()->id($id)->count() > 0){
                    $p_instance     = $definition->instances()->id($id)->first();
                    $p_definition   = $definition;
                    // If we find it, we stop iterating
                    return false;
                };
            });
            // Simulating fail of findOrFail()
            if(empty($p_instance)){
                throw new ModelNotFoundException();
            }
            return $p_instance;
        });
    }

    /**
     * Get a list of P.Instances filtered
     *
     * @param Request $request
     * @return mixed Collection of P. Instances
     */
    public function getListFiltered(Request $request){
        // Get definitions according to queryParams
        $c_key = generate_request_cache_key('list-filtered-');
        return Cache::tags(['process-instance'])->remember($c_key, 60, function() use ($request) {
            $definitions = $this->pd_repository->getFilteredByIdKey($request);
            // Creating a P. Instances collection with all definitions's instances filtered by queryParams
            $instances = $definitions->map( function($definition) use ($request){
                return $definition->instancesFiltered($request)->get();
            })->flatten();
            return $instances;
        });
    }

    /**
     * Get the quantity of P.Instances filtered
     *
     * @param Request $request
     * @return mixed number with the count of instances
     */
    public function getListCountFiltered(Request $request){
        $c_key = 'process-instance'.$request->getUri();
        return Cache::tags(['process-instance'])->remember($c_key, 60, function() use ($request) {
            // Get definitions according to queryParams
            $definitions = $this->pd_repository->getFilteredByIdKey($request);
            // Creating a collection with all counts of definitions's instances filtered by queryParams
            $counts = $definitions->map( function($item) use ($request){
                return $item->instancesFiltered($request)->count();
            });
            $total_count = $counts->sum();
            return $total_count;
        });
    }

    public function getActivityDefinitionsById($id){
        $c_key = 'process-instance-activity'.$id;
        return Cache::tags(['process-instance'])->remember($c_key, 60, function() use ($id) {

            $p_instance     = $this->getOneById($id);
    //        $p_definitions  = $p_instance->process;
            $activities  = $p_instance->activities()->get();
            return $activities;
        });

    }
}