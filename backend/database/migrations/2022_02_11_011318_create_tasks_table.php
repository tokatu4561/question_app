<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('task_themes', function (Blueprint $table) {
            $table->string('id', 40)->primary();
            $table->string('name');
            $table->foreignId('user_id')->constrained('users');

            $table->timestamps();
        });

        Schema::create('tasks', function (Blueprint $table) {
            $table->string('id', 40)->primary();
            $table->string('title');
            $table->foreignId('task_theme_id')->constrained('task_themes');

            $table->softDeletes();

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
        Schema::dropIfExists('task_themes');
        Schema::dropIfExists('tasks');
    }
}
