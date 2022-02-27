<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskThemeRequest;
use App\Http\Requests\UpdateTaskThemeRequest;
use App\Models\TaskTheme;
use Illuminate\Support\Facades\Auth;

class TaskThemeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $tasks = TaskTheme::where('user_id', Auth::id())->orderByDesc('id')->get();

        return response()->json($tasks, 200);
    }

    /**
     *　タスクリストの新規追加
     *
     * @param  \App\Http\Requests\StoreTaskThemeRequest  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreTaskThemeRequest $request)
    {
        $task = new TaskTheme();

        $task->id       = $request->id;
        $task->name     = $request->name;
        $task->user_id  = Auth::id();

        $task->save();

        return $task ? response()->json($task, 201) : response()->json([], 500);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTaskThemeRequest  $request
     * @param  \App\Models\TaskTheme  $taskTheme
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTaskThemeRequest $request, TaskTheme $taskTheme)
    {
        //
    }

    /**
     * タスクリストの削除
     *
     * @param  string $taskThemeId
     * @return \Illuminate\Http\Response
     */
    public function destroy(string $taskThemeId)
    {
        $isSuccess = TaskTheme::find($taskThemeId)->delete();

        return $isSuccess ? response()->json([], 200) : response()->json([], 500);
    }
}
