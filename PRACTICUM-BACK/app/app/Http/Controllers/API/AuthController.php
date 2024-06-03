<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use App\Models\Role;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Mail\WelcomeEmail;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $credentials = $request->only('email', 'password');
        $token = Auth::attempt($credentials);
        
        if (!$token) {
            return response()->json([
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::user();
        return response()->json([
            'user' => $user,
            'authorization' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
            'type' => 'required|string|in:company,student',
            'nameCompany' => $request->type === 'company' ? 'required|string|max:255' : '',
            'dir' => $request->type === 'company' ? 'required|string|max:255' : '',
            'prov' => 'required|string|max:255',
            'center' => $request->type === 'student' ? 'required|string|max:255' : '',
            'fecha' => $request->type === 'student' ? 'required|date' : '',
        ]);
        
        // Determinar el role_id basado en el campo de selección
        if ($request->type === 'company') {
            $role = Role::where(['slug' => 'company'])->first();
        } elseif ($request->type === 'student'){
            $role = Role::where(['slug' => 'student'])->first();
        };

        // Verificar si se encontró un rol
        if (!$role) {
            // Manejar el caso en que no se encontró un rol válido
            return response()->json(['error' => 'No se encontró ningún rol válido'], 500);
        }


        // Crear el usuario con el role_id correspondiente
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->role_id = $role->id;

        // Guarda el usuario en la base de datos
        //$user->save();
        /* $user = User::create([
            'name' => ,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role_id' => $role->id,
        ]); */

        // Guardar información adicional si es una empresa
        if ($request->type === 'company') {
            $user->nameCompany = $request->nameCompany;
            $user->dir = $request->dir;
            $user->prov = $request->prov;
        } elseif ($request->type === 'student') {
            $user->center = $request->center;
            $user->fecha = $request->fecha;
        }

        Mail::to($request->email)->send(new WelcomeEmail($request));

        return response()->json([
            'message' => 'Mensaje enviado correctamente',
            'user' => $user
        ]);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }
}