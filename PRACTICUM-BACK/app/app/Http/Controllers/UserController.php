<?php

namespace App\Http\Controllers;

use App\Models\User;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    use ValidatesRequests;

    // Función para que devuelva todos los usuarios
    // https://api.mypracticum.es/api/users
    public function index()
    {
        $users = User::all();
        return ['users' => $users];
    }

    // Función para buscar ofertas de prácticas según los parámetros de búsqueda (filtrar ofertas de prácticas por sector)
    // https://api.mypracticum.es/api/users/search
    public function search(Request $request)
    {
        // Obtener los parámetros de búsqueda
        $sectors = $request->input('sector');

        // Consulta base de ofertas de prácticas
        $users = User::select();

        // Aplicar filtros según los parámetros de búsqueda
        if ($sectors) {
            $users->where('sector', $sectors);
        }

        // Obtener los resultados
        $results = $users->get();

        // Devolver vista con los resultados
        return ['results' => $results];
    }

    // Función para añadir una nueva oferta
    // https://api.mypracticum.es/api/users/add
    public function add(Request $request)
    {
        // Validar los datos del formulario de creación de ofertas
        $data = $request->validate([
            'name' => ['required', 'string'],
            'age' => ['required', 'numeric'],
            'course' => ['required', 'string'],
            'center' => ['required', 'string'],
            'description' => ['required', 'string'],
            'couse_id' => ['required', 'numeric'],
        ]);

        // Obtener el usuario autenticado
        var_dump(Auth::user());
        die();

        // Crear una nueva oferta de prácticas
        $users = User::create($data);

        // Devolver la oferta creada
        return ['users' => $users];
    }
}
