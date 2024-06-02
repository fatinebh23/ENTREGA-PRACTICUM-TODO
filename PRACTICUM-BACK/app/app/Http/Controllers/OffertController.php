<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Offert;
use App\Models\Sector;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

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
        $search = $request->input('search');
        $location = $request->input('location');
        $sector = $request->input('sector');

        // Consulta base de ofertas de prácticas
        $offerts = Offert::select();

        if($search){
            $offerts->where('title', 'like', "%{$search}%");
        }

        // Aplicar filtros según los parámetros de búsqueda
        if ($location) {
            $offerts->where('location_id', $location);
        }

        if ($sector) {
            $offerts->where('sector_id', $sector);
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
            "title" => 'required|string|max:255',
            "name" => 'required|string|max:255',
            //"sector_id" => 'required|numeric', // Asumiendo que sector_id es un número
            "description" => 'required|string',
            //"prov" => 'required|string|max:255',
            "dates" => 'required|date',
            "schedule" => 'required|string|max:255',
            "vacancies" => 'required|integer|min:1', // Asegura que el número de vacantes sea al menos 1
            "remun" => 'required|in:si,no', // Asegura que remun solo pueda ser 'si' o 'no'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages(), 400);
        }

        //$sector = Sector::findOrFail($request->sector_id);

        $offert = new Offert();
        $offert->title = $request->title;
        //$offert->sector_id()->associate($sector_id);
        //$offert->company()->associate(Auth::user()->company);
        $offert->name = $request->name;
        $offert->description = $request->description;
        //$offert->prov = $request->prov;
        $offert->dates = $request->dates;
        $offert->schedule = $request->schedule;
        $offert->vacancies = $request->vacancies;
        $offert->remun = $request->remun;

        $offert->save();

        // Devolver la oferta creada
        return response()->json(['message' => 'Oferta creada correctamente'], 200);
    }
}
