<?php

namespace Database\Factories;

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
        return [
            'title' => $this->faker->realText(rand(15, 20)),
            'is_done' => $this->faker->boolean(10),
            'task_theme_id' => rand(1, 3),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
