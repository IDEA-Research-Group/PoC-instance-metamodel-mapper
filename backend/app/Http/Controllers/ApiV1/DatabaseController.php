<?php

namespace App\Http\Controllers\ApiV1;

use App\testOci;
use App\testOciRelated;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Config;

class DatabaseController extends BaseController
{
    public function getAllTables(){
        $tables = DB::select('SHOW TABLES');
        $tables = array_map('current',$tables);
        return $tables;
    }

    public function getOracle(){
        $data=  testOci::all();
        return $data;
    }

    public function getTest(){
        return array_keys(Config::get('database')['connections']);
        $data = testOci::where('ACCODE', '8264276042023')->first()->instances()->get();
        //$data = testOciRelated::where('ACCODE', '8264276042023')->count();

        return $data;

        $data =  new testOci();
        $data->setTable('EXC_INCIDENCES');
        $data->setPrimaryKey('incidencecode');
        return $data->where('incidencecode', "3721757915697")->get();

    }

    public function getConnectionsNames()
    {
        //return array_keys(Config::get('database')['connections']);
        $connections = Config::get('database')['connections'];
        $res = [];
        foreach($connections as $key=>$value) {
            $connection = [ 'connection'=>$key, 'driver'=>$value['driver'] ];
            array_push($res, $connection);
        };
        return $this->sendResponse(['connections' => $res], 'Connections retrieved successfully');
    }

    public function getOracleTables()
    {
        $tables = DB::connection('oracle')
            ->select('SELECT table_name FROM user_tables');
        $tables_mapped = array_map('current',$tables);
        return $tables_mapped;
    }

    public function getAllTablesAndFields(Request $request)
    {
        switch ($request->driver){
            case 'oracle':
                $res = $this->getOracleTablesAndFields($request->connection);
                break;
            case 'mysql':
                $res = $this->getMysqlTablesAndFields($request->connection);
                break;
            default:
                $res = $this->getOracleTablesAndFields($request->connection);
        }
        return $this->sendResponse(['tables'=>$res], 'Database Structure retrieved successfully');
    }

    private function getOracleTablesAndFields($connection)
    {
        $tables_fields = DB::connection($connection)
            ->select('SELECT utc.TABLE_NAME,
                               utc.COLUMN_NAME,
                               utc.DATA_TYPE
                               FROM  USER_TAB_COLUMNS utc');

        $tables = array_map('current', $tables_fields);
        return collect($tables_fields)->groupBy('table_name');
    }

    private function getMysqlTablesAndFields($connection)
    {
        $connections = Config::get('database')['connections'];
        $db = $connections[$connection]["database"];

        $tables_fields = DB::connection($connection)
            ->select("select table_name,
                            column_name,
                            data_type
                            from information_schema.columns
                            where table_schema = '$db'");
        return collect($tables_fields)->groupBy('table_name');
    }

    public function getOracleTableField(Request $request){
        $table = $request->table;
        $fields_q = "SELECT table_name, column_name, data_type, data_length
                        FROM USER_TAB_COLUMNS
                        WHERE table_name = '$table'";
        $data = DB::connection('oracle')
            ->select($fields_q);

        return $data;
    }
}
