<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Auth;

/***
 *
 * Funcion para saber si tengo permisos
 *
 **/

 /*if (! function_exists('AuthCheckWithRoles')) {
    function AuthCheckWithRoles($type)
    {
       if(Auth::check()) {
            switch ($type) {
                case 'superadmin':
                    $result = Auth::user()->isSuperAdmin();
                    break;
                case 'admins':
                    if (Auth::user()->isSuperAdmin() || Auth::user()->isAdminCliente() || Auth::user()->isAdminEmpresa()) {
                        $result=  true;
                    }
                    break;
                case 'cliente':
                    $result = Auth::user()->isAdminCliente();
                    break;
                case 'empresa':
                    $result = Auth::user()->isAdminEmpresa();
                    break;
                case 'all':
                    if (Auth::user()->Auth::user()->isSuperAdmin() || Auth::user()->isAdminCliente() || Auth::user()->isAdminEmpresa()) {
                        $result =  true;
                    }
                    break;
                default:
                    $result = false;
            }
        }
        return $result;
    }
}*/
