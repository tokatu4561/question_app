<?php

namespace Database\Seeders;

use App\Models\Task;
use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Task::factory(20)->create();
        Task::factory()->create(['title' => "参考書を読む"]);
        Task::factory()->create(['title' => "マスクを買いに行く"]);
    }
}
