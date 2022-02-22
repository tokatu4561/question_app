<?php

namespace Database\Factories;

use App\Models\TaskTheme;
use Illuminate\Database\Eloquent\Factories\Factory;

class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $taskThemeId = TaskTheme::inRandomOrder()->first()->id;
        return [
            'id'   => $this->faker->text(30),
            'title' => $this->faker->realText(rand(15, 20)),
            'task_theme_id' => $taskThemeId,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
