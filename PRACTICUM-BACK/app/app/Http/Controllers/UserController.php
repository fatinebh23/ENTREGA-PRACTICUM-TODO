<?php

namespace App\Http\Controllers;

use App\Models\User;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
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
        $search = $request->input('search');
        $sectors = $request->input('sector');

        // Consulta base de ofertas de prácticas
        $users = User::select();

        if($search){
            $users->where('name', 'like', "%{$search}%");
        }

        // Aplicar filtros según los parámetros de búsqueda
        if ($sectors) {
            $users->where('sector_id', $sectors);
        }

        // Obtener los resultados
        $results = $users->get();

        // Devolver vista con los resultados
        return ['results' => $results];
    }

    // Función para añadir una nueva oferta
    // https://api.mypracticum.es/api/users/update
    public function update(Request $request, $id)
    {
        // Validar los datos del formulario de creación de usuarios
    $validator = Validator::make($request->all(), [
        'name' => 'required|string|min:3|max:20',
        'email' => 'required|email',
        'age' => 'required|numeric|min:1|max:150',
        //'center_id' => 'required|string',
        //'sector_id' => 'required|string',
        //'course_id' => 'required|string', 
        'description' => 'required|string'
    ]);

    // Si la validación falla, devolver los mensajes de error
    if ($validator->fails()) {
        return response()->json($validator->messages(), 400);
    }

    // Actualizar un usuario
    $user = User::find($id);
    $user->name = $request->name;
    $user->email = $request->email;
    $user->age = $request->age;
    //$user->center_id = $request->center_id;
    //$user->sector_id = $request->sector_id;
    //$user->course_id = $request->course_id;
    $user->description = $request->description;

    // Guardar el nuevo usuario en la base de datos
    $user->save();

    // Devolver el usuario creado
    return response()->json(['message' => 'Perfil actualizado correctamente'], 200);

    }
}
