<?php
/**
 * Created by PhpStorm.
 * User: alejandro
 * Date: 19/8/18
 * Time: 13:09
 */

namespace App\Repositories;


use App\Activity;

class ActivitiesRepository
{

    public function getAll(){
        return Activity::all();
    }

}