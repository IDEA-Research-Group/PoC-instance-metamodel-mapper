<?php

namespace App;

use App\Traits\HasDynamicRelation;
use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;

class ProcessDefinition extends Model
{
    use HasDynamicRelation;

    protected $connection = 'mysql';
    protected $fillable = ['uuid', 'name', 'description', 'key', 'matching','process_engine_id'];
    protected $casts = [
        'id' => 'int',
        'matching' => 'array'
    ];
    protected $appends = [];


    /**
     *  Setup model event hooks
     */
    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->uuid = (string) Uuid::generate(4);
        });
    }
    /**
     * Get the Process Engine that owns the Process Definition.
     */
    public function engine()
    {
        return $this->belongsTo('App\ProcessEngine', 'process_engine_id', 'id');
    }

    public function iinstances(){
        return  $this->hasManyDynamic('App\ProcessInstance');
    }

    /**
     * Get the Processes Instances for the Process Definition.
     */
    public function instances()
    {
        //return $this->hasMany(ProcessInstance::on($this->instance_connection, $this->instance_table, $this->matching));
        $instances = new ProcessInstance();
        $instances->setConnection($this->matching['connection']['connection']);
        $instances->setTable($this->matching['principal_table']);
        //$inst->setKeyName($this->matching['principal_table']);
        $instances->setMatching($this->matching);
        $instances->setInstanciator($this);
        //return $inst->where('id', '63082032')->get();
        // TODO cambiar a este modo, optimizando las consultas pasando sólo los campos que se necesitan
        //return ProcessInstance::all(['*'],'oracle','ac_collection');
        return $instances;
    }

    /**
     * Get the Activities for the Process Definition.
     */
    public function activities()
    {
        return $this->hasMany('App\Activity');
    }

    /**
     * Get all of the Activities Instances for the Process Definition.
     */
    public function activityInstances()
    {
        return $this->hasManyDynamicThrough('App\ActivityInstance', 'App\Activity');
    }



    public function instancesFiltered($filters = []){
        return $this->instances()
            ->id($filters->processInstanceId)
            ->idIn($filters->processInstanceIds)
            ->businessKey($filters->businessKey)
            ->businessKeyLike($filters->businessKeyLike)
            ->businessKeyLike($filters->businessKeyLike)
            ->active($filters->active)
            ->suspended($filters->suspended)
            ->startUserId($filters->startUserId)
            ->durationInMillis($filters->durationInMillis)
            ->startTime($filters->startTime)
            ->endTime($filters->endTime)
            ->variables($filters->variables);
    }



    public function getEngineAttribute(){
        return $this->engine()->get();
    }

    public function getActivitiesAttribute(){
        return $this->activities()->get();
    }
    public function getInstancesAttribute()
    {
        return $this->instances()->get();
    }
    public function getCountInstancesAttribute()
    {
        return $this->instances()->count();
    }
    public function getInstanceConnectionAttribute()
    {
        return $this->matching['connection']['connection'];
    }
    public function getInstanceTableAttribute()
    {
        return $this->matching['connection']['connection'];
    }

    /* QUERYSCOPES */
    public function scopeId($query, $id) {
        //if(isset($id) && !is_null($id) && !blank($id) ){
        if(!empty($id)){
            return $query->where('id', $id);
        }
        return $query;
    }
    public function scopeIdIn($query, $ids) {
        if(!empty($ids)){
            $arr = explode(',', $ids);
            return $query->whereIn('id', $arr);
        }
        return $query;
    }

    public function scopeUuid($query, $uuid) {
        if(!empty($uuid)){
                return $query->where('uuid', $uuid);
        }
        return $query;
    }
    public function scopeUuidIn($query, $uuids) {
        if(!empty($uuids)){
            $arr = explode(',', $uuids);
            return $query->whereIn('id', $arr);
        }
        return $query;
    }
    public function scopeName($query, $name) {
        if(!empty($name)){
            return $query->where('name', $name);
        }
        return $query;
    }
    public function scopeNameLike($query, $name) {
        if(!empty($name)){
            return $query->where('name','LIKE',"%{$name}%");
        }
        return $query;
    }
    public function scopekey($query, $param) {
        if(!empty($param)){
            return $query->where('key', $param);
        }
        return $query;
    }
    public function scopeKeyLike($query, $param) {
        if(!empty($param)){
            return $query->where('key','LIKE',"%{$param}%");
        }
        return $query;
    }

    public function scopeCategory($query, $param) {
        if(!empty($param)){
            return $query->where('category', $param);
        }
        return $query;
    }
    public function scopeCategoryLike($query, $param) {
        if(!empty($param)){
            return $query->where('category','LIKE',"%{$param}%");
        }
        return $query;
    }

    public function scopeVersion($query, $param) {
        if(!empty($param)){
            return $query->where('version', $param);
        }
        return $query;
    }

    //TODO simplificar estos dos scopes reutilizando uno solo
    /**
     * Only include active process definitions. Value may only be true, as false is the default behavior.
     * @param $query
     * @param bool $param
     * @return mixed
     */
    public function scopeActive($query, $param = false) {
        if(!empty($param) && (bool) $param){
            return $query->where('suspended', (bool) !$param);
        }
        return $query;
    }
    public function scopeSuspended($query,  $param = false) {
        if(!empty($param) && (bool) $param){
            return $query->where('suspended', (bool) $param);
        }
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
