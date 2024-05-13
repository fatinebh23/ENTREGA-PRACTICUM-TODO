<?php

namespace App\Http\Controllers;
use App\Models\Course;

use Illuminate\Http\Request;

class CourseController extends Controller
{
    // Función para que devuelva todos los cursos
    // https://api.mypracticum.es/api/courses
    public function index()
    {
        $courses = Course::all();
        return ['courses' => $courses];
    }
}
