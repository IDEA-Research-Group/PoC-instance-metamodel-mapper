<?php

namespace App\Presenters;

use App\ProcessInstance;

class ProcessInstancePresenter
{
    protected $instance;

    public function __construct(ProcessInstance $instance)
    {
        $this->instance = $instance;
//        protected $matching;
//        array $matching
//        $this->matching = $matching;
    }

    public function id(){
        return match_field($this->instance, 'id');
    }
    public function ended(){
        return match_field($this->instance, 'id');
    }
    public function suspended(){
        return match_field($this->instance, 'ended');
    }
    public function businessKey(){
        return match_field($this->instance, 'suspended');
    }
    public function startUserId(){
        return match_field($this->instance, 'businessKey');
    }
    public function durationInMillis(){
        return match_field($this->instance, 'startUserId');
    }
    public function startTime(){
        return match_field($this->instance, 'durationInMillis');
    }
    public function endTime(){
        return match_field($this->instance, 'startTime');
    }
}