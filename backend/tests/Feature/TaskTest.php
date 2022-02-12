<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Task;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TaskTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $user = User::factory()->create();
        $this->actingAs($user);
    }
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

    /**
     *@test
     */
    public function １件登録する()
    {
        $data = [
            'title' => 'テスト',
        ];

        $response = $this->postJson('api/tasks', $data)
            ->assertStatus(201);

        $this->assertDatabaseHas('tasks', $data);
    }

    /**
     *@test
     */
    public function タイトルがからであれば登録不可()
    {
        $data = [
            'title' => '',
        ];

        $response = $this->postJson('api/tasks', $data)
            ->assertStatus(422)
            ->assertJsonValidationErrors(['title' => 'タイトルは、必ず指定してください。']);
    }

    /**
     *@test
     */
    public function １件更新する()
    {
        $task = Task::factory()->create();

        $title = 'タスクテスト';

        $response = $this->patchJson("api/tasks/{$task->id}", ['title' => $title])
            ->assertStatus(200);

        $this->assertDatabaseHas('tasks', ['title' => $title]);
    }

    /**
     *@test
     */
    public function 削除する()
    {
        $task = Task::factory()->create();

        $response = $this->deleteJson("api/tasks/{$task->id}")
            ->assertStatus(200);

        // $this->assertDatabaseHas('tasks', ['title' => $title]);
    }
}
