<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('admin')->group(function () {
    // AdminLTE用ルーティング
});

Route::prefix('user')->group(function () {
    // SB Admin 2用ルーティング
});