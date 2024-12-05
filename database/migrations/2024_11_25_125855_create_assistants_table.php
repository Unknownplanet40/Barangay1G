<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAssistantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('assistants', function (Blueprint $table) {
            $table->id();

            $table->bigInteger('resident_id')->unsigned();
            $table->foreign('resident_id')->references('id')->on('residents');

            $table->string('title')->nullable();
            $table->string('assistant_type')->nullable();
            $table->text('description')->nullable();
            $table->date('date_request')->nullable();
            $table->string('lat')->nullable();
            $table->string('lng')->nullable();

            $table->string('file_type')->nullable();
            $table->string('file_path')->nullable(); 
            $table->string('status')->nullable();	


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
        Schema::dropIfExists('assistants');
    }
}
