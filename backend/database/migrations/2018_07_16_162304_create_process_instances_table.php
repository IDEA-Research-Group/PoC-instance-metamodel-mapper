<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateprocessInstancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('process_instances', function (Blueprint $table) {
            $table->increments('id');

            $table->uuid('uuid');
            $table->unique('uuid');


            $table->json('ended')->nullable();
            $table->json('suspended')->nullable();
            $table->json('business_key')->nullable();
            $table->json('start_user_id')->nullable();
            $table->json('duration_in_millis')->nullable();
            $table->json('start_time')->nullable();
            $table->json('end_time')->nullable();

            $table->integer('process_definition_id')->unsigned();
            $table->foreign('process_definition_id')
                ->references('id')->on('process_definitions')
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
        Schema::dropIfExists('process_instances');
    }
}
