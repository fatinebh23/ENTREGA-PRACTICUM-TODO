<?php

namespace App\Http\Controllers\Login;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Validation\ValidatesRequests;


class LoginController extends Controller
{
    use ValidatesRequests;

    protected $redirectTo = '/index';

    /**
     * Función de login
     * @param Request $request
     * @return false|string
     */

     // Función para añadir un usuario
     // https://api.mypracticum.es/api/login
    public function login(Request $request)
    {
        // Validar los datos del formulario de inicio de sesión
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'password'],
        ]);

        // Intentar autenticar al usuario
        if (Auth::attempt($credentials)) {
            // Si el usuario ha sido autenticado correctamente, redirigirlo a la ruta especificada
            return redirect()->intended($this->redirectTo);
        }
    
        // Si la autenticación falla, redirigir de nuevo al formulario de inicio de sesión con un mensaje de error
        return redirect()->back()->withInput($request->only('email'))->withErrors([
            'email' => 'Estas credenciales no coinciden con nuestros registros.',
        ]);
}
}