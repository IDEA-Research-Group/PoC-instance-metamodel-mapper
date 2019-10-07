<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Yajra\Oci8\Eloquent\OracleEloquent as Eloquent;

class testOci extends Eloquent
{
    protected $connection= 'oracle';

    protected $table = 'AC_COLLECTION';
}
