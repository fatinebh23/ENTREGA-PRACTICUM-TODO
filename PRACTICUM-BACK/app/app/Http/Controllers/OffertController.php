<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Offert;
use App\Models\Sector;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use function App\Helpers\AuthCheckWithRoles;
class OffertController extends Controller
{
    // Función para que devuelva todas las ofertas
    // https://api.mypracticum.es/api/offerts
    public function index()
    {
        $offerts = Offert::all();
        return ['offerts' => $offerts];
    }

    // Función para buscar ofertas según los parámetros de búsqueda (filtrae por localización y sector)
    // https://api.mypracticum.es/api/offerts/search
    public function search(Request $request)
    {
        // Obtener los parámetros de búsqueda
        $location = $request->input('location');
        $sector = $request->input('sector');

        // Consulta base de ofertas de prácticas
        $offerts = Offert::select();

        // Aplicar filtros según los parámetros de búsqueda
        if ($location) {
            $offerts->where('location', $location);
        }

        if ($sector) {
            $offerts->where('sector', $sector);
        }

        // Obtener los resultados
        $results = $offerts->get();

        // Devolver vista con los resultados
        return ['results' => $results];
    }

    // Función para añadir una nueva oferta
    // https://api.mypracticum.es/api/offerts/add
    public function add(Request $request)
    {
       /* if(!AuthCheckWithRoles('company')){
            abort(401);
        } */

        $validator = Validator::make($request->all(), [
            "title" => 'required',
            "sector_id" => 'required',
            "description" => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages(), 400);
        }

        $sector = Sector::findOrFail($request->sector_id);

        $offert = new Offert();

        $offert->title = $request->title;
        $offert->sector()->associate($sector);
        $offert->company()->associate(Auth::user()->company);
        $offert->description = $request->description;

        $offert->save();


        // Devolver la oferta creada
        return ['offert' => $offert];
        // return response()->json(['offert' => $offert], 201);
    }
}
