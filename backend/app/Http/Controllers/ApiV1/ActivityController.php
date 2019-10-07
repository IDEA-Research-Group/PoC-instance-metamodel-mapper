<?php

namespace App\Http\Controllers\ApiV1;

use App\Activity;
use App\Http\Requests\CreateActivityRequest;
use App\Http\Requests\EditActivityRequest;
use App\ProcessDefinition;
use Illuminate\Support\Facades\Input;

class ActivityController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $activities = Activity::all();
        return $this->sendResponse(['activities'=>$activities], 'Activities fetched');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\CreateActivityRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateActivityRequest $request)
    {
        $activity = Activity::create(Input::all());

        return $this->sendResponse(['activity'=>$activity], 'Activity created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function show(Activity $activity)
    {
        return $this->sendResponse(['activity'=>$activity], 'Activity retrieved successfully');
    }


    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\EditActivityRequest  $request
     * @param  \App\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function update(EditActivityRequest $request, Activity $activity)
    {
        $activity->update(Input::all());

        return $this->sendResponse(['activity'=>$activity], 'Activity updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Activity $activity
     * @return \Illuminate\Http\Response
     *
     * @throws \Exception
     * of type:
     * Illuminate\Database\Eloquent\ModelNotFoundException;
     * or
     * Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
     */
    public function destroy(Activity $activity)
    {
        $activity->delete();
        return response()->json($activity, 204);
    }

    public function getAllByProcess(ProcessDefinition $process) {
        return $this->sendResponse(['activities' => $process->activities, 'process' => $process], 'Process Definitions retrieved successfully.');
    }

}
