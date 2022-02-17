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
            'id'   => $this->faker->text(30),
            'title' => $this->faker->realText(rand(15, 20)),
            'task_theme_id' => rand(1, 3),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
