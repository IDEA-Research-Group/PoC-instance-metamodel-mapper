<?php

namespace App;

use App\Presenters\ActivityInstancePresenter;
use App\Presenters\ProcessInstancePresenter;
use App\Traits\BindsDynamicallyTrait;
use App\Traits\DynamicModelTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Query\Builder;

class ActivityInstance extends Model
{
    use BindsDynamicallyTrait;
    use DynamicModelTrait;

    protected $matching;

    protected $appends = [
        'id',
        'name',
        'activityId',
        'activityName',
        'assignee',
        'canceled',
        'completedScope',
        'duration',
        'startTime',
        'endTime',
        'processDefinitionId',
        'processInstanceId'
    ];

    protected $casts = [
        'matching' => 'array'
    ];

    protected $visible =[
        'id',
        'name',
        'activityId',
        'activityName',
        'assignee',
        'canceled',
        'completedScope',
        'duration',
        'startTime',
        'endTime',
        'processDefinitionId',
        'processInstanceId',
        'matching',
    ];

    /**
     * Get the Activity that owns the Instance.
     */
    public function activity()
    {
        return $this->belongsTo('App\Activity', 'instanciator_id');
    }

    public function processDefinition(){
        return $this->activity->process;
    }
    public function processInstances(){
        return $this->activity->process->definitions();
    }

    public function getProcessInstanceIdAttribute(){
        return $this->present()->process_instance_id();
    }

    public function getInstanciatorAttribute()
    {
        return $this->instanciator;
    }
    public function getInstanciatorIdAttribute()
    {
        return $this->instanciator->id;
    }
    public function getMatchingAttribute()
    {
        return $this->matching ;
    }
    public function getActivityIdAttribute()
    {
        return $this->instanciator_id;
    }
    public function setMatching($matching){
        $this->matching = $matching;
    }

    public function present()
    {
        return new ActivityInstancePresenter($this);
    }


    /**
     * Attributes
     */
    public function getIdAttribute(){
        return $this->present()->id();
    }
    public function getNameAttribute(){
        return $this->present()->name();
    }
    public function getStartTimeAttribute(){
        return $this->present()->startTime();
    }
    public function getEndTimeAttribute(){
        return $this->present()->endTime();
    }
    public function getDurationAttribute(){
        return $this->present()->duration();
    }
    public function getCanceledAttribute(){
        return $this->present()->canceled();
    }
    public function getCompletedScopeAttribute(){
        return $this->present()->completedScope();
    }
    public function getAssigneeAttribute(){
        return $this->present()->assignee();
    }
    public function getActivityNameAttribute(){
        return $this->activity->name;
    }
    //
    public function getProcessDefinitionIdAttribute(){
        return $this->activity->process->id;
    }
    public function getProcessDefinitionAttribute(){
        return $this->instanciator->process->instances->id($this->fk_process);
    }


    /* Scopes */
    // Scope for processInstance
    public function scopeProcess($query, $value) {
        $matched_field_name = matched_field_name($this, 'process_fk');
        if(!empty($value)
            && !empty($matched_field_name)){
            return $query->where($matched_field_name, $value);
        }
        return $query;
    }
    public function scopeId($query, $value) {
        $matched_field_name = matched_field_name($this, 'id');
        if(!empty($value)
            && !empty($matched_field_name)){
            return $query->where($matched_field_name, $value);
        }
        return $query;
    }
    //ProcessDefinitionId
    public function scope($query, $value) {
        $matched_field_name = matched_field_name($this, 'id');
        if(!empty($value)
            && !empty($matched_field_name)){
            return $query->where($matched_field_name, $value);
        }
        return $query;
    }
    // finished
    public function scopeFinished($query,  $param = false) {
        $matched_field_end = matched_field_name($this, 'endtime');
        $matched_field_can = matched_field_name($this, 'canceled');
        if(!empty($param)
            && (bool) $param
            && !empty($matched_field_end)
            && !empty($matched_field_can) ){
            return $query->whereNotNull($matched_field_end)
                ->orWhere($matched_field_can, true);
        }
        return $query;
    }
    // unfinished
    public function scopeUnfinished($query,  $param = false) {
        $matched_field_end = matched_field_name($this, 'endtime');
        $matched_field_can = matched_field_name($this, 'canceled');
        if(!empty($param)
            && (bool) $param
            && !empty($matched_field_end)
            && !empty($matched_field_can) ){
            return $query->whereNull($matched_field_end)
                ->where($matched_field_can, false);
        }
        return $query;
    }
    // canceled
    public function scopeCanceled($query,  $param = false) {
        $matched_field_can = matched_field_name($this, 'canceled');
        if(!empty($param)
            && (bool) $param
            && !empty($matched_field_can) ){
            return $query->where($matched_field_can, true);
        }
        return $query;
    }
    // completeScope
    public function scopeCompletedScope($query,  $param = false) {
        $matched_field = matched_field_name($this, 'completedScope');
        if(!empty($param)
            && (bool) $param
            && !empty($matched_field) ){
            return $query->where($matched_field, true);
        }
        return $query;
    }

    /* startedBefore
        public function scope($query, $value) {
        $matched_field_name = matched_field_name($this, 'id');
        if(!empty($value)
            && !empty($matched_field_name)){
            return $query->where($matched_field_name, $value);
        }
        return $query;
    }

    // startedAfter
        public function scope($query, $value) {
        $matched_field_name = matched_field_name($this, 'id');
        if(!empty($value)
            && !empty($matched_field_name)){
            return $query->where($matched_field_name, $value);
        }
        return $query;
    }

    // finishedBefore
        public function scope($query, $value) {
        $matched_field_name = matched_field_name($this, 'id');
        if(!empty($value)
            && !empty($matched_field_name)){
            return $query->where($matched_field_name, $value);
        }
        return $query;
    }

    // finishedAfter
        public function scope($query, $value) {
        $matched_field_name = matched_field_name($this, 'id');
        if(!empty($value)
            && !empty($matched_field_name)){
            return $query->where($matched_field_name, $value);
        }
        return $query;
    }
    */
}
