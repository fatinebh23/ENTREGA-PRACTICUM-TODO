<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sector;

class SectorController extends Controller
{
    // Función para que devuelva todos los sectores
    // https://api.mypracticum.es/api/sectors
    public function index()
    {
        $sectors = Sector::all();
        return ['sectors' => $sectors];
    }
}
