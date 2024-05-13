<?php

namespace App\Http\Controllers;
use App\Models\Level;
use Illuminate\Http\Request;

class LevelController extends Controller
{
    // Función para que devuelva todos los niveles
    // https://api.mypracticum.es/api/levels
    public function index()
    {
        $levels = Level::all();
        return ['levels' => $levels];
    }
}
