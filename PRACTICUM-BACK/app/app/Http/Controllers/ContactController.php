<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactEmail;

class ContactController extends Controller
{
    // Función para que devuelva un mensaje de contacto
    // https://api.mypracticum.es/api/contact
    public function index(Request $request)
    {
        Mail::to('contact@mypracticum.es')->send(new ContactEmail($request));

        return response()->json([
            'status' => 'success',
            'message' => 'Mensaje enviado correctamente. En breve nos pondremos en contacto contigo.'
        ]);
    }
}
