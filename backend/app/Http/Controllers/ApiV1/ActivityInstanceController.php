<?php

namespace App\Http\Controllers\ApiV1;

use App\Activity;
use App\ActivityInstance;
use App\ProcessDefinition;
use App\Repositories\ActivityInstancesRepository;
use App\Repositories\ProcessInstancesRepository;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class ActivityInstanceController extends BaseController
{
    protected $ai_repository;
    protected $pi_repository;

    public function __construct(ActivityInstancesRepository $ai_repository, ProcessInstancesRepository $pi_repository){
        $this->ai_repository = $ai_repository;
        $this->pi_repository = $pi_repository;
    }
   public function getOneById($id){
       $instance = $this->ai_repository->getOneById($id);
       return $instance;
    }

    public function getListCount(Request $request){
        return $this->ai_repository->getListCount($request);

    }

    public function getList(Request $request){
        return $this->ai_repository->getList($request);
    }

    public function getListByDate(Request $request){
        return $this->ai_repository->getListByDate($request);
    }
}
