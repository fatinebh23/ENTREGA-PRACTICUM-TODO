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
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProvinceController;


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
    // Ruta para obtener un mensaje de contacto
    Route::post('contact', [ContactController::class, 'index']);
});
Route::group([
    //'middleware' => config('app.middleware_auth'),
    'prefix' => 'offerts',
], function () {
     // Ruta para obtener todas las ofertas
    // https://api.mypracticum.es/api/offerts
    Route::get('', [OffertController::class, 'index']);
    // Ruta para buscar ofertas por filtros
    // https://api.mypracticum.es/api/offerts/search
    Route::post('search', [OffertController::class, 'search']);
    // Ruta para agregar una nueva oferta
    // https://api.mypracticum.es/api/offerts/add
    Route::post('add', [OffertController::class, 'add']);
});
Route::group([
    'prefix' => 'users',
], function () {
     // Ruta para obtener todos los perfiles
    // https://api.mypracticum.es/api/users
    Route::get('', [UserController::class, 'index']);
    // Ruta para buscar perfiles por filtros
    // https://api.mypracticum.es/api/users/search
    Route::post('search', [UserController::class, 'search']);
    // Ruta para agregar un nuevo perfil
    // https://api.mypracticum.es/api/users/update
    Route::post('update/{id}', [UserController::class, 'update']);
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
Route::controller(ProvinceController::class)->group(function () {
    // Ruta para obtener todas las provincias
    // https://api.mypracticum.es/api/provinces
    Route::get('provinces', 'index');
});