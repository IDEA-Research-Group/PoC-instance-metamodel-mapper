<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Uuid;
class ProcessEngine extends Model
{
    protected $fillable = ['uuid', 'name', 'description'];



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
     * Get the Processes Definitions for the Process Engine.
     */
    public function processes()
    {
        return $this->hasMany('App\ProcessDefinition');
    }

    public function getProcessesAttribute(){
        return $this->processes()->get();
    }


}
