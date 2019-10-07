<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateActivitiesInstancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activities_instances', function (Blueprint $table) {
            $table->increments('id');

            $table->uuid('uuid');
            $table->unique('uuid');


            $table->json('name')->nullable();
            $table->json('start_time')->nullable();
            $table->json('end_time')->nullable();
            $table->json('duration_in_millis')->nullable();
            $table->json('canceled')->nullable();
            $table->json('completed_scope')->nullable();
            $table->json('asignee')->nullable();

            $table->integer('activity_id')->unsigned();
            $table->foreign('activity_id')
                ->references('id')->on('activities')
                ->onUpdate('cascade')
                ->onDelete('cascade');

            $table->integer('activity_instance_id')->unsigned()->nullable();
            $table->foreign('activity_instance_id')
                ->references('id')->on('activities_instances')
                ->onUpdate('cascade')
                ->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('activities_instances');
    }
}
