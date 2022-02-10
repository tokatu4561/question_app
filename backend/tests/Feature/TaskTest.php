<?php

namespace Tests\Feature;

use App\Models\Task;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TaskTest extends TestCase
{
    use RefreshDatabase;
    /**
     *@test
     */
    public function 一覧を取得する()
    {
        $tasks = Task::factory(10)->create();
        $response = $this->getJson('api/tasks');

        $response->assertStatus(200)
            ->assertJsonCount($tasks->count());
    }
}
