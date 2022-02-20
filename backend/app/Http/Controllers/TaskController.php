<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    /**
     * Task一覧を取得
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function index(Request $request)
    {
        $taskQuery = Task::query();

        if ($request->filled('theme')) {
            $taskQuery->where('task_theme_id', $request->theme);
        }

        $tasks = $taskQuery->orderByDesc('id')->get();

        return $tasks;
    }

    /**
     * タスクの新規追加
     *
     * @param  \App\Http\Requests\StoreTaskRequest  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreTaskRequest $request)
    {
        $task = new Task();

        $task->id            = $request->id;
        $task->title         = $request->title;
        $task->task_theme_id = $request->themeId;

        $task->save();

        return $task ? response()->json($task, 201) : response()->json([], 500);
    }

    /**
     * タスクのタイトルを変更
     *
     * @param  \App\Http\Requests\UpdateTaskRequest  $request
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateTaskRequest $request, Task $task)
    {
        $task->title = $request->title;

        $task->save();

        return $task ? response()->json($task, 200) : response()->json([], 500);
    }

    /**
     * タスクを削除する(ソフトデリート)
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Task $task)
    {
        $isSuccess = $task->delete();

        return $isSuccess ? response()->json([], 200) : response()->json([], 500);
    }

    /**
     * タスクを復元する
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\JsonResponse
     */
    public function restore(Task $task)
    {
        $isSuccess = $task->restore();

        return $isSuccess ? response()->json([], 201) : response()->json([], 500);
    }

    /**
     *　削除済みの(ソフトデリートされた)タスクを表示する
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function showDeletedTask()
    {
        $deletedTasks = Task::onlyTrashed()->get();

        return $deletedTasks;
    }

    /**
     * タスクを削除する(ソフトデリート)
     * @return \Illuminate\Http\JsonResponse
     */
    public function deleteTasks()
    {
        $isSuccess = Task::onlyTrashed()->forceDelete();

        return $isSuccess ? response()->json([], 200) : response()->json([], 500);
    }
}
