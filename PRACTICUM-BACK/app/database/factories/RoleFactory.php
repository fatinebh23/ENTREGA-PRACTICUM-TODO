<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Role;
class RoleFactory extends Factory
{
    protected $model = Role::class;
    
    public function definition(): array
    {
        return [
            'name' => $this->faker->unique()->word,
            'description' => $this->faker->sentence,
            'slug' => $this->faker->unique()->word, // Añadir el slug aquí
        ];
    }

    // Puedes agregar estados para roles específicos
    public function company()
    {
        return $this->state([
            'name' => 'Company',
            'slug' => 'company',
        ]);
    }

    public function student()
    {
        return $this->state([
            'name' => 'Student',
            'slug' => 'student',
        ]);
    }
}
