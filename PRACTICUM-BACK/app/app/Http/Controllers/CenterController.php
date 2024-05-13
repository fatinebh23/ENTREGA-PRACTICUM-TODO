<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Center;

class CenterController extends Controller
{
    // Función para que devuelva todos los centros
    // https://api.mypracticum.es/api/centers
    public function index()
    {
        $centers = Center::all();
        return ['centers' => $centers];
    }
}
