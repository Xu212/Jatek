<?php

use App\Http\Controllers\Game;
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

Route::get('/', function () {
    return view('index');
});
Route::get('/games',[Game::class,'index']);
Route::get('/games/{id}',[Game::class,'show']);
Route::post('/games',[Game::class,'store']);
Route::put('/games/{id}',[Game::class,'update']);
Route::delete('/games/{id}',[Game::class,'destroy']);

