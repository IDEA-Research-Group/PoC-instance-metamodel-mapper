<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateprocessDefinitionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('process_definitions', function (Blueprint $table) {
            $table->increments('id');

            $table->uuid('uuid');
            $table->unique('uuid');

            $table->string('key')->unique();
            $table->string('category')->nullable();
            $table->string('description')->nullable();
            $table->string('name')->nullable();
            //Int
            $table->integer('version')->nullable();
            //boolean
            $table->boolean('suspended')->nullable();

            $table->integer('process_engine_id')->unsigned();
            $table->foreign('process_engine_id')
                ->references('id')->on('process_engines')
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
        Schema::dropIfExists('process_definitions');
    }
}
