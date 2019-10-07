<?php

namespace App;

use App\Traits\HasDynamicRelation;
use Illuminate\Database\Eloquent\Model;
use Uuid;
class Activity extends Model
{

    use HasDynamicRelation;
    protected $connection = 'mysql';
    protected $fillable = ['uuid', 'name', 'description', 'matching', 'process_definition_id'];
    protected $appends = [];
    protected $casts = [
        'matching' => 'array'
    ];

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
     * Get the Process Definition that owns the Activity.
     */
    public function process()
    {
        return $this->belongsTo('App\ProcessDefinition', 'process_definition_id', 'id');
    }
    public function processInstances()
    {
        return $this->process->instances();
    }

    public function iinstances(){
        return  $this->hasManyDynamic('App\ProcessInstance', $this->matching);
    }

    /**
     * Get the Activities Instances for the Activity with the matching specified
     */
    public function instances()
    {
        $instances = new ActivityInstance();
        $instances->setConnection($this->matching['connection']['connection']);
        $instances->setTable($this->matching['principal_table']);
        //$inst->setKeyName($this->matching['principal_table']);
        $instances->setMatching($this->matching);
        $instances->setInstanciator($this);
        //return $inst->where('id', '63082032')->get();
        //return ActivityInstance::all(['*'],'oracle','ac_collection');
        return $instances;
    }

//    public function getProcessAttribute(){
//        return $this->process()->get();
//    }

    public function getInstancesAttribute()
    {
        return $this->instances()->get();
    }


    public function getCountInstancesAttribute()
    {
        return $this->instances()->count();
    }

    public function scopeId($query, $value){
        if(!empty($value)){
            $query->where('id', $value);
        }
        return $query;
    }
    public function scopeName($query, $value){
        if(!empty($value)) {
            $query->where('name', $value);
        }
        return $query;
    }
}
