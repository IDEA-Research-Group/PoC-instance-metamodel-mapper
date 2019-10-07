<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('register', 'ApiV1\RegisterController@register');


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::apiResource('processEngines', 'ApiV1\processEngineController');
Route::apiResource('engines', 'ApiV1\ProcessEngineController');
Route::apiResource('processDefinitions', 'ApiV1\ProcessDefinitionController');
Route::get('process-definition/{definition}/statistics','ApiV1\ProcessDefinitionController@getActivityInstanceStatistics');
Route::get('process-definition/count','ApiV1\ProcessDefinitionController@getListCount');
Route::get('process-definition','ApiV1\ProcessDefinitionController@getList');
Route::get('process-definition/statistics','ApiV1\ProcessDefinitionController@getStatistics');
Route::get('process-definition/{definition}','ApiV1\ProcessDefinitionController@getOne');

Route::get('process-instance/count', 'ApiV1\ProcessInstanceController@getCount');
Route::get('process-instance', 'ApiV1\ProcessInstanceController@getList');
Route::get('process-instance/{id}', 'ApiV1\ProcessInstanceController@getOneById');
Route::get('process-instance/{id}/activity-instances', 'ApiV1\ProcessInstanceController@getActivityInstances');
Route::get('process-instance/{id}/statistics','ApiV1\ProcessInstanceController@getActivityInstanceStatistics');


Route::get('history/activity-instance', 'ApiV1\ActivityInstanceController@getList');
Route::get('history/activity-instance/count', 'ApiV1\ActivityInstanceController@getListCount');
Route::get('history/activity-instance/date', 'ApiV1\ActivityInstanceController@getListByDate');
Route::get('history/activity-instance/{id}', 'ApiV1\ActivityInstanceController@getOneById');




Route::get('engines/{engine}/processDefinitions', 'ApiV1\ProcessDefinitionController@getAllByEngine');
Route::apiResource('activities', 'ApiV1\ActivityController');
Route::get('processDefinition/{process}/activities', 'ApiV1\ActivityController@getAllByProcess');

Route::get('db/connections', 'ApiV1\DatabaseController@getConnectionsNames');
Route::get('db/all-tables-fields', 'ApiV1\DatabaseController@getAllTablesAndFields');
Route::get('db/tables', 'ApiV1\DatabaseController@getAllTables');
Route::get('db/oracle', 'ApiV1\DatabaseController@getOracle');
Route::get('db/oracle-tables', 'ApiV1\DatabaseController@getOracleTables');
Route::get('db/oracle-table-field', 'ApiV1\DatabaseController@getOracleTableField');
Route::get('db/oracle-tests', 'ApiV1\DatabaseController@getTest');

Route::fallback(function(){
    return response()->json(['message' => 'Not Found!'], 404);
})->name('fallback');