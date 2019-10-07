<?php

namespace App\Http\Controllers\ApiV1;

use App\ProcessEngine;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;

class ProcessEngineController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $processes_engines = ProcessEngine::all();
        return $this->sendResponse(['engines'=>$processes_engines], 'Processes Engines retrieved successfully.');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        return ProcessEngine::create(Input::all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ProcessEngine  $engine
     * @return \Illuminate\Http\Response
     */
    public function show(ProcessEngine $engine)
    {
        return $this->sendResponse(['engine'=>$engine], 'Process Engine retrieved successfully.');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ProcessEngine  $engine
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ProcessEngine $engine)
    {
        $engine->update(Input::all());
        return $engine;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ProcessEngine  $engine
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProcessEngine $engine)
    {
        $engine->delete();
        return response()->json($engine, 204);
    }
}
