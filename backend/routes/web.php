<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('login', 'LoginController@login');
Route::post('logout', 'LoginController@logout');

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/api/user', function () {
        return Auth::user();
    });

    Route::apiResource('/api/tasks', 'TaskController');
    Route::post('/api/tasks-restore/{task}', 'TaskController@restore');

    Route::apiResource('/api/themes', 'TaskThemeController');

    Route::get('/api/trash', 'TaskController@showDeletedTask');
    Route::delete('/api/trash', 'TaskController@deleteTasks');
});

Route::get('/{any?}', function () {
    return view('welcome');
})->where('any', '.*');
