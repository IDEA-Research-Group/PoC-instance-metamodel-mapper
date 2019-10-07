<?php

namespace App\Presenters;

use App\ActivityInstance;


class ActivityInstancePresenter
{
    protected $instance;

    public function __construct(ActivityInstance $instance)
    {
        $this->instance = $instance;
//        protected $matching;
//        array $matching
//        $this->matching = $matching;
    }

    public function id(){
        return match_field($this->instance, 'id');
    }
    public function name(){
        return match_field($this->instance, 'name');
    }
    public function startTime(){
        return match_field($this->instance, 'startTime');
    }
    public function endTime(){
        return match_field($this->instance, 'endTime');
    }
    public function duration(){
        return match_field($this->instance, 'duration');
    }
    public function canceled(){
        return match_field($this->instance, 'canceled');
    }
    public function completedScope(){
        return match_field($this->instance, 'completedScope');
    }
    public function assignee(){
        return match_field($this->instance, 'assignee');
    }
    public function process_instance_id(){
        return match_field($this->instance, 'process_fk');
    }

}