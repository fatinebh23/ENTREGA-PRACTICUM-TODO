<?php

namespace Tests\Unit;

use App\Models\User;
use Tests\TestCase; // Usar la TestCase de Laravel

class LoginTest extends TestCase {
    

    public function test_login_with_valid_credentials()
    {
        // Crear un usuario con la factoría
        $user = User::factory()->create([
            'password' => bcrypt($password = 'valid-password'),
        ]);

        // Intentar iniciar sesión con credenciales válidas
        $response = $this->post('/api/login', [
            'email' => $user->email,
            'password' => $password,
        ]);

        // Verificar la respuesta para depuración
        $response->dump();

        // Verificar que la autenticación fue exitosa
        $response->assertStatus(200);
        $this->assertAuthenticatedAs($user);
    }

    public function test_login_with_invalid_credentials()
    {
        // Crear un usuario con la factoría
        $user = User::factory()->create([
            'password' => bcrypt('valid-password'),
        ]);

        // Intentar iniciar sesión con credenciales inválidas
        $response = $this->post('/api/login', [
            'email' => $user->email,
            'password' => 'invalid-password',
        ]);

        // Verificar la respuesta para depuración
        $response->dump();

        // Verificar que la autenticación falló
        $response->assertStatus(401);
        $this->assertGuest();
    }
}