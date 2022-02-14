<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskThemeRequest;
use App\Http\Requests\UpdateTaskThemeRequest;
use App\Models\TaskTheme;

class TaskThemeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreTaskThemeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTaskThemeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TaskTheme  $taskTheme
     * @return \Illuminate\Http\Response
     */
    public function show(TaskTheme $taskTheme)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TaskTheme  $taskTheme
     * @return \Illuminate\Http\Response
     */
    public function edit(TaskTheme $taskTheme)
    {
        //
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
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TaskTheme  $taskTheme
     * @return \Illuminate\Http\Response
     */
    public function destroy(TaskTheme $taskTheme)
    {
        //
    }
}
