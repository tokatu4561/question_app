<?php

namespace Database\Seeders;

use App\Models\TaskTheme;
use Illuminate\Database\Seeder;

class TaskThemeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TaskTheme::factory(3)->create();
    }
}
