<?php

namespace App;

use App\Presenters\ProcessInstancePresenter;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use App\Traits\BindsDynamicallyTrait;
use App\Traits\DynamicModelTrait;
use Illuminate\Database\Query\Builder;

class ProcessInstance extends Model
{

    use BindsDynamicallyTrait;
    use DynamicModelTrait;

    protected $matching;

    protected $appends = ['id', 'ended', 'suspended', 'businessKey',
        'startUserId', 'durationInMillis', 'startTime', 'endTime', 'matching'];

    protected $visible = ['id', 'ended', 'suspended', 'businessKey',
        'startUserId', 'durationInMillis', 'startTime', 'endTime', 'matching'];

    protected $casts = [
        'matching' => 'array'
    ];



    /**
     * Get the Process Definition that owns the Process Instance.
     */
    public function process()
    {
        return $this->belongsTo('App\ProcessDefinition', 'instanciator_id');
    }
    public function activities()
    {
        return $this->process->activities();
    }

    /**
     * @return Collection of Builder
     */
    public function activityInstances()
    {
        $activities = $this->activities;
        $instancesQB = $activities->map(function ($activity){
            return $activity->instances()->process($this->id) ;
        });
        return $instancesQB;
    }

    /**
     * @return Collection of ActivityInstances
     */
    public function getAllActivityInstancesAttribute(){
        $instancesQB = $this->activityInstances();
        $instances = $instancesQB->map(function ($builder){
            return $builder->get();
        })->flatten();
        return $instances;
    }

//    /**
//     * Get the variables for the Process Definition.
//     */
//    public function variables()
//    {
//        return $this->hasMany('App\Variable');
//    }


    public function getActivitiesAttribute(){
        return $this->activities()->get();
    }
    public function getMatchingAttribute()
    {
        return $this->matching;
    }
    public function getInstanciatorAttribute()
    {
        return $this->instanciator;
    }
    public function getInstanciatorIdAttribute()
    {
        return $this->instanciator->id;
    }
    public function setMatching($matching){
        $this->matching = $matching;
    }

    public function present()
    {
        return new ProcessInstancePresenter($this);
    }

    /**
     * Attributes
     */
    public function getIdAttribute(){
        return $this->present()->id();
    }
    public function getEndedAttribute(){
        return $this->present()->ended();
    }
    public function getSuspendedAttribute(){
        return $this->present()->suspended();
    }
    public function getBusinessKeyAttribute(){
        return $this->present()->businessKey();
    }
    public function getStartUserIdAttribute(){
        return $this->present()->startUserId();
    }
    public function getDurationInMillisAttribute(){
        return $this->present()->durationInMillis();
    }
    public function getStartTimeAttribute(){
        return $this->present()->startTime();
    }
    public function getEndTimeAttribute(){
        return $this->present()->endTime();
    }

    /*Scopes*/
    public function scopeId($query, $value) {
        $matched_field_name = matched_field_name($this, 'id');
        if(!empty($value)
            && !empty($matched_field_name)){
            return $query->where($matched_field_name, $value);
        }
        return $query;
    }
    public function scopeIdIn($query, $ids) {
      $matched_field_name = matched_field_name($this, 'id');
        if(!empty($ids)
            && !empty($matched_field_name)){
            $arr = explode(',', $ids);
            return $query->whereIn($matched_field_name, $arr);
        }
        return $query;
    }
    public function scopeBusinessKey($query, $value) {
        $matched_field_name = matched_field_name($this, 'businessKey');
        if(!empty($value)
            && !empty($matched_field_name)){
            return $query->where($matched_field_name, $value);
        }
        return $query;
    }
    public function scopeBusinessKeyLike($query, $param) {
        $matched_field_name = matched_field_name($this, 'businessKey');
        if(!empty($param)
            && !empty($matched_field_name)){
            return $query->where($matched_field_name,'LIKE',"%{$param}%");
        }
        return $query;
    }

    /**
     * TODO Check
     * Se presupone que activo es que no está suspendido y que no está acabadp
     * Only include active process definitions. Value may only be true, as false is the default behavior.
     * @param $query
     * @param bool $param
     * @return mixed
     */
    public function scopeActive($query, $param = false) {
        $matched_field_suspended = matched_field_name($this, 'suspended');
        $matched_field_ended = matched_field_name($this, 'ended');
        if(!empty($param)
            && (bool) $param
            && !empty($matched_field_suspended)
            && !empty($matched_field_ended) ){
            return $query->where($matched_field_suspended, false)
                ->where($matched_field_ended, false);
        }
        return $query;
    }
    public function scopeSuspended($query,  $param = false) {
        $matched_field_name = matched_field_name($this, 'suspended');
        if(!empty($param)
            && (bool) $param
            && !empty($matched_field_name)){
            return $query->where($matched_field_name, false);
        }
        return $query;
    }
    public function scopeEnded($query, $value) {
        $matched_field_name = matched_field_name($this, 'ended');
        if(!empty($value)
            && !empty($matched_field_name)){
            return $query->where($matched_field_name, $value);
        }
        return $query;
    }

    public function scopeStartUserId($query, $value) {
        $matched_field_name = matched_field_name($this, 'startUserId');
        if(!empty($value)
            && !empty($matched_field_name)){
            return $query->where($matched_field_name, $value);
        }
        return $query;
    }
    public function scopeDurationInMillis($query, $value) {
        $matched_field_name = matched_field_name($this, 'durationInMillis');
        if(!empty($value)
            && !empty($matched_field_name)){
            return $query->where($matched_field_name, $value);
        }
        return $query;
    }
    public function scopeStartTime($query, $value) {
        $matched_field_name = matched_field_name($this, 'startTime');
        if(!empty($value)
            && !empty($matched_field_name)){
            return $query->where($matched_field_name, $value);
        }
        return $query;
    }
    public function scopeEndTime($query, $value) {
        $matched_field_name = matched_field_name($this, 'endTime');
        if(!empty($value)
            && !empty($matched_field_name)){
            return $query->where($matched_field_name, $value);
        }
        return $query;
    }

    /**
     * TODO
     *  Only include process instances that have variables with certain values.
     * Variable filtering expressions are comma-separated and are structured as follows:
     * A valid parameter value has the form key_operator_value. key is the variable name,
     * operator is the comparison operator to be used and value the variable value.
     * Note: Values are always treated as String objects on server side.

     *  Valid operator values are:
     * eq - equal to;
     * neq - not equal to;
     * gt - greater than;
     * gteq - greater than or equal to;
     * lt - lower than;
     * lteq - lower than or equal to; like.
     *  key and value may not contain underscore or comma characters.
     */
    public function scopeVariables($query, $value){
        return $query;
    }

    public function scopeOrdered($query,  $sort_by, $sort_order) {
        $possible_orders = ['asc','desc'];
        $possible_by = ['category', 'key', 'id', 'name', 'version'];
        if( !empty($sort_by)
            && !empty($sort_order)
            && in_array($sort_by, $possible_by)
            && in_array($sort_order, $possible_orders) )
        {
            return $query->orderBy($sort_by, $sort_order);
        }
        return $query;
    }

    public function scopeFirstResult($query, $param) {
        if(!empty($param)){
            return $query->skip((integer) $param);
        }
        return $query;
    }
    public function scopeMaxResults($query, $param) {
        if(!empty($param)){
            return $query->take($param);
        }
        return $query;
    }
}
