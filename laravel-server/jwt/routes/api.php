<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\TestController;

Route::group(['prefix' => 'v1'], function(){
    
    Route::group(['prefix' => 'admin'], function(){
        Route::group(['middleware' => 'role.admin'], function(){
            Route::get('/admin_test', [AdminController::class, 'adminTest']);
            Route::post('/add_survey', [AdminController::class, 'addSurvey']);
            Route::post('/add_question', [AdminController::class, 'addQuestion']);
            Route::post('/add_option', [AdminController::class, 'addOption']);
        });
    });

    Route::group(['prefix' => 'user'], function(){
        // Route::group(['middleware' => 'user.admin'], function(){
            //Route to get surveys with questions
            Route::get('/get_surveys_questions/{survey_id?}', [UserController::class, 'getSurveys']);
            //Route to get questions with options
            Route::get('/get_questions_options/{survey_id?}', [UserController::class, 'getQuestions']);
            Route::post('/asnwer_question', [UserController::class, 'answerQuestion']);
        // });
    });
    
    // Function called when not an "Unauthorized" user tried to reach a specific page
    Route::get('/not_found', [TestController::class, 'notFound'])->name("not-found");
});




/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'api'], function($router) {
    Route::post('/register', [JWTController::class, 'register']);
    Route::post('/login', [JWTController::class, 'login']);
    Route::post('/logout', [JWTController::class, 'logout']);
    Route::post('/refresh', [JWTController::class, 'refresh']);
    Route::post('/profile', [JWTController::class, 'profile']);
});
