<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\FormController;
use App\Http\Controllers\Api\FormSubmissionController;

Route::get('/forms', [FormController::class, 'index']);
Route::get('forms/{slug}', [FormController::class, 'show']);
Route::post('forms/{slug}/submit', [FormSubmissionController::class, 'store']);