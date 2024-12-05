<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::group(['prefix' => 'auth'], function () {
    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('logout', 'AuthController@logout');
        Route::get('user_profile', 'AuthController@userProfile');
    });
});


Route::resource('categories', 'CategoryController');
Route::get('assistance-data', 'AssistantController@getAssistanceData');
Route::group(['middleware' => 'auth:api'], function () {
    Route::group(['middleware' => 'scope:admin,official'], function () {
        Route::get('users', 'AuthController@users');
        Route::resource('officials', 'OfficialController');
        Route::resource('residents', 'ResidentController');
        Route::resource('disasters', 'DisasterController');
        Route::resource('services', 'ServiceController');
        Route::resource('resources', 'ResourceController');
        Route::resource('alerts', 'AlertController');
        Route::put('respond-action/{assistant}', 'AssistantController@respondAction');
        Route::post('send-alerts', 'AlertController@sendAlerts');
    });

    Route::group(['middleware' => 'scope:admin,official,resident'], function () {
        Route::resource('assistants', 'AssistantController');
        Route::get('resident-disasters', 'DisasterController@residentDisasters');
        Route::get('resident-resources', 'ResidentApi@residentResources');
        Route::get('resident-services', 'ResidentApi@residentServices');
        Route::get('resident-assistance', 'ResidentApi@residentAssistance');
    });
});




Route::post('send-message', 'MessageController@sendMessage');
Route::get('conversations', 'MessageController@conversations');
Route::get('conversation/{id}', 'MessageController@conversation');
Route::post('reply-message/{id}', 'MessageController@replyMessage');
Route::delete('conversation/{id}', 'MessageController@deleteConversation');