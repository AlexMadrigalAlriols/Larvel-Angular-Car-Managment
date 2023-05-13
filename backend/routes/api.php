<?php

use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\CarController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\UserFavoriteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['prefix' => 'v1', 'as' => 'api.'], function() {
    Route::post('login', [UserController::class, 'login'])->name('user.login');

    Route::middleware('auth:sanctum')->group(function () {
        // User Logout
        Route::post('logout/{user}', [UserController::class, 'logout'])->name('user.logout');

        //Cars
        Route::post('cars/list', [CarController::class, 'index'])->name('cars.index');
        Route::apiResource('cars', CarController::class)->except('index');

        // Brands
        Route::post('brands/list', [BrandController::class, 'index'])->name('brands.index');
        Route::apiResource('brands', BrandController::class)->except('index');

        // Users
        Route::post('users/list', [UserController::class, 'index'])->name('users.index');
        Route::apiResource('users', UserController::class)->except('index');

        // Users Favorites
        Route::post('user_favorites/list', [UserFavoriteController::class, 'index'])->name('user_favorites.index');
        Route::apiResource('user_favorites', UserFavoriteController::class)->except(['index', 'update', 'show']);
    });
});


