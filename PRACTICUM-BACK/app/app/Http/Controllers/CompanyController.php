<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Company;

class CompanyController extends Controller
{
    // Función para que devuelva todas las empresas
    // https://api.mypracticum.es/api/companies
    public function index()
    {
        $companies = Company::all();
        return ['companies' => $companies];
    }
}
