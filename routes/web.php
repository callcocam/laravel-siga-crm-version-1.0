<?php

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

Route::get('/welcome', function () {

    return view('welcome');
});
Route::get('/', function () {

    return view('welcome');
});
//Route::group(['prefix'=>'/'], function ($router){
//
//    //$router->group(['middleware' => 'auth'], function ($router) {
//
//    $router->get('/{vue_capture?}', 'PageController@index')
//        ->where('vue_capture', '[\/\w\.\,\-]*')
//        ->name('home-pages-index');
//
//    //});
//
//});
Auth::routes();

Route::group(['prefix'=>'/admin'], function ($router){

        $router->get('/{vue_capture?}', function (){
            return view('layouts.app');
        })
        ->where('vue_capture', '[\/\w\.\,\-]*')
        ->name('home-pages-admin');

    //});
//    \App\Suports\AutoRoute::resources("empresas","CompanyController","companies");
//    \App\Suports\AutoRoute::resources("usuarios","UserController","users");

});

Route::get('/home', 'HomeController@index')->name('home');


