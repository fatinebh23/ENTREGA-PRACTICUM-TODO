<?php

namespace Tests\Unit;

use App\Models\User;
use App\Models\Role;
use Tests\TestCase; // Usar la TestCase de Laravel

class RegisterTest extends TestCase {

    /**
     * Prueba básica para el registro de un usuario.
     */
    public function test_user_can_register(): void
    {

        // Define los datos del usuario que se enviarán al método register
        $response = $this->post('/api/register', [
            'name' => 'Pinchaaqui',
            'email' => 'contact@pinchaaqui.es',
            'password' => 'password',
            'type' => 'company', // Or 'student', depending on your implementation
            'nameCompany' => 'Company XYZ',
            'dir' => '123 Main St',
            'prov' => 'Province XYZ',
            'fecha' => '2024-06-03',
        ]);

        // Capturar el contenido de la respuesta para depurar
        $response->dump();

        // Verificar que la respuesta sea exitosa (código de estado HTTP 200)
        $response->assertStatus(302);

        // Verificar que el usuario fue creado en la base de datos
        $this->assertDatabaseHas('users', [
            'email' => 'contact@pinchaaqui.es',
        ]);

        // Verificar que el usuario tenga el rol correcto asignado
        $user = User::where('email', 'contact@pinchaaqui.es')->first();
        $this->assertEquals('company', $user->role->slug);
    }
}