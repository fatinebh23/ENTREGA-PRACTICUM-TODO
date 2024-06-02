<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Province;

class ProvinceController extends Controller
{
    // Función para que devuelva todas las provincias
    // https://api.mypracticum.es/api/provinces
    public function index()
    {
        $provinces = Province::all();
        return ['provinces' => $provinces];
    }
}
