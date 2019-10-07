<?php

namespace App\Repositories;


use App\ProcessDefinition;
use Illuminate\Http\Request;

class ProcessDefinitionRepository
{
    /**
     * @return ProcessDefinition[]|\Illuminate\Database\Eloquent\Collection
     */
    public function getAll(){
        return ProcessDefinition::all();
    }



    /**
     * Aux Method for filter required inside P.Instances repository due to some Camunda Endpoints
     * @param Request $request
     * @return mixed
     */
    public function getFilteredByIdKey(Request $request)
    {
        return ProcessDefinition::id($request->processDefinitionId)
            ->key($request->processDefinitionKey)
            ->get(['id','matching']);
    }

}