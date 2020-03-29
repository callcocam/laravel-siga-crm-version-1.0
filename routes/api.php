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

Route::group(['namespace' => 'API\\Auth','prefix' => 'v1/admin'], function ($router) {

    $router->post('login', 'LoginController@login')->name('api.admin.login');
    $router->post('register', 'RegisterController@register')->name('api.admin.register');
    $router->post('refresh', 'RefreshController@refresh')->name('api.admin.refresh');
    $router->post('logout', 'LogoutController@logout')->name('api.admin.logout');
    $router->get('me', 'MeController@me')->name('api.admin.me');
    $router->post('profile', 'ProfileController@save')->name('api.admin.profile');

    $router->post('reset-password', 'ResetLinkController@resetPassword')->name('api.admin.reset.password.email');
    $router->post('reset/password', 'ResetPasswordController@resetPassword')->name('api.admin.reset.password');

    \App\Suports\AutoRoute::resources("users","UserController","users");
});

Route::group(['namespace' => 'API','prefix' => 'v1/admin','middleware' => 'auth:api'], function ($router) {

    \App\Suports\AutoRoute::resources("users","UserController","users");

    \App\Suports\AutoRoute::get("profile","UserController","profile","admin.profile.index");
    \App\Suports\AutoRoute::post("social-link","UserController","socialLink","admin.social-link.store");
    \App\Suports\AutoRoute::resources("companies","CompanyController","companies");
    \App\Suports\AutoRoute::resources("users","UserController","users");
    \App\Suports\AutoRoute::resources("roles","RoleController","roles");
    \App\Suports\AutoRoute::resources("permissions","PermissionController","permissions");
    \App\Suports\AutoRoute::resources("posts","PostController","posts");
    \App\Suports\AutoRoute::resources("categories","CategoryController","categories");

});
