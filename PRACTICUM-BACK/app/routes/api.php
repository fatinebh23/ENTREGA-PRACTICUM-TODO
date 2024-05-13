<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\OffertController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CenterController;
use App\Http\Controllers\SectorController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\LevelController;
use App\Http\Controllers\CourseController;


Route::controller(AuthController::class)->group(function () {
    // Ruta para iniciar sesión
    // https://api.mypracticum.es/api/login
    Route::post('login', 'login');
    // Ruta para registrar un nuevo usuario
    // https://api.mypracticum.es/api/register
    Route::post('register', 'register');
    // Ruta para cerrar sesión
    // https://api.mypracticum.es/api/logout
    Route::post('logout', 'logout');
    // Ruta para refrescar el token
    // https://api.mypracticum.es/api/refresh
    Route::post('refresh', 'refresh');
});
Route::group([
    'middleware' => config('app.middleware_auth'),
    'prefix' => 'offerts',
], function () {
    Route::get('', [OffertController::class, 'index']);
    Route::get('search', [OffertController::class, 'search']);
    Route::post('add', [OffertController::class, 'add']);
});
Route::controller(UserController::class)->group(function () {
    // Ruta para obtener todas los perfiles
    // https://api.mypracticum.es/api/users
    Route::get('users', 'index');
    // Ruta para buscar perfiles por filtros
    // https://api.mypracticum.es/api/users/search
    Route::get('users/search', 'search');
    // Ruta para agregar un nuevo perfil
    // https://api.mypracticum.es/api/users/add
    Route::post('users/add', 'add');
});
Route::controller(CenterController::class)->group(function () {
    // Ruta para obtener todos los centros
    // https://api.mypracticum.es/api/centers
    Route::get('centers', 'index');
});
Route::controller(SectorController::class)->group(function () {
    // Ruta para obtener todos los sectores
    // https://api.mypracticum.es/api/sectors
    Route::get('sectors', 'index');
});
Route::controller(CompanyController::class)->group(function () {
    // Ruta para obtener todas las empresas
    // https://api.mypracticum.es/api/companies
    Route::get('companies', 'index');
});
Route::controller(CourseController::class)->group(function () {
    // Ruta para obtener todos los cursos
    // https://api.mypracticum.es/api/courses
    Route::get('courses', 'index');
});
Route::controller(LevelController::class)->group(function () {
    // Ruta para obtener todos los niveles
    // https://api.mypracticum.es/api/levels
    Route::get('levels', 'index');
});