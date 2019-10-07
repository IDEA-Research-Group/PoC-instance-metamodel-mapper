<?php

namespace App\Http\Controllers\ApiV1;

use App\Http\Requests\CreateProcessDefinitionRequest;
use App\ProcessDefinition;
use App\ProcessEngine;
use App\Repositories\ProcessDefinitionRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

class ProcessDefinitionController extends BaseController
{

    protected $pd_repository;

    public function __construct(ProcessDefinitionRepository $pd_repository)
    {
        $this->pd_repository = $pd_repository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $processes =  $this->pd_repository->getAll();
        return $this->sendResponse(['processes' => $processes], 'Process Definitions retrieved successfully.');

    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateProcessDefinitionRequest $request)
    {
        return ProcessDefinition::create(Input::all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\processDefinition  $processDefinition
     * @return \Illuminate\Http\Response
     */
    public function show(ProcessDefinition $processDefinition)
    {
        return $processDefinition;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\processDefinition  $processDefinition
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ProcessDefinition $processDefinition)
    {
        $processDefinition->update(Input::all());
        return $processDefinition;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\processDefinition  $processDefinition
     * @throws
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProcessDefinition $processDefinition)
    {
        $processDefinition->delete();
        return response()->json($processDefinition, 204);
    }

    /*
     * Each one of the next methods corresponds to one Camunda Api Rest method
     */


    public function getAllByEngine(ProcessEngine $engine) {
        return $this->sendResponse(['processes' => $engine->processes, 'engine' => $engine], 'Process Definitions retrieved successfully.');
    }

    public function getActivityInstanceStatistics(ProcessDefinition $definition){
        $activities = $definition->activities()->get(['id','name','matching']);

        $statistics = $activities->transform(function ($item, $key) {
            return [
                'id' => $item->id,
                'name' => $item->name,
                'instances' => $item->count_instances
            ];
        });
        return $statistics;
    }

    public function getListCount(Request $request){
        $definitions = ProcessDefinition::id($request->processDefinitionId)
            ->idIn($request->processDefinitionIdIn)
            ->uuid($request->uuid)
            ->uuidIn($request->uuidIn)
            ->name($request->name)
            ->nameLike($request->nameLike)
            ->key($request->key)
            ->keyLike($request->keyLike)
            ->category($request->category)
            ->categoryLike($request->categoryLike)
            ->version($request->version)
            ->active((bool) $request->active)
            ->suspended((bool) $request->suspended)
            ->count();
        //return $request->processDefinitionIdIn;
        //return explode(',', $request->processDefinitionIdIn);
        return ['count' => $definitions];
    }

    public function getList(Request $request){
        $definitions = ProcessDefinition::id($request->processDefinitionId)
            ->idIn($request->processDefinitionIdIn)
            ->uuid($request->uuid)
            ->uuidIn($request->uuidIn)
            ->name($request->name)
            ->nameLike($request->nameLike)
            ->key($request->key)
            ->keyLike($request->keyLike)
            ->category($request->category)
            ->categoryLike($request->categoryLike)
            ->version($request->version)
            ->active((bool) $request->active)
            ->suspended((bool) $request->suspended)
            ->ordered( $request->sortBy, $request->sortOrder)
            ->firstResult($request->firstResult)
            ->maxResults($request->maxResults)
            ->get()->makeHidden(['matching','instances','process_engine_id']);
        //return $request->processDefinitionIdIn;
        //return explode(',', $request->processDefinitionIdIn);
        return $definitions;
    }

    public function getStatistics(){
        $definitions = ProcessDefinition::all()->makeHidden(['matching', 'process_engine_id', 'instances']);
        $definitions->transform(function ($item){
           return [
               'id' => $item->id,
               'instances' => $item->count_instances,
               'definition' => $item,
               'incidents' => [],
           ];
        });
        return $definitions;
    }

    public function getOne(ProcessDefinition $definition){
        return $definition->setAppends([]);
    }

    /**
     * Retrieves a report about a process definition and finished process instances relevant to history cleanup
     * so that you can tune the history time to live. These reports include the count of the finished historic process
     * instances, cleanable process instances and basic process definition data - id, key,  name and version.
     * The size of the result set can be retrieved by using the Get Cleanable Process Instance Report Count method.
     * https://docs.camunda.org/manual/7.8/reference/rest/history/process-definition/get-cleanable-process-instance-report/
     * @param ProcessDefinition $definition
     * @param Request $request
     */
    public function getCleanableProcessInstance(ProcessDefinition $definition, Request $request){
        // TODO
    }

    /**
     * Queries for the number of report results about a process definition and finished process instances relevant
     * to history cleanup. Takes the same parameters as the Get Cleanable Process Instance Report method.
     * https://docs.camunda.org/manual/7.8/reference/rest/history/process-definition/get-cleanable-process-instance-report-count/
     * @param ProcessDefinition $definition
     * @param Request $request
     */
    public function getCleanableProcessInstanceCount(ProcessDefinition $definition, Request $request){
        // TODO
    }
}
