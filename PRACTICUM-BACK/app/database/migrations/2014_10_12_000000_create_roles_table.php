<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    // Crear la tabla 'roles'
    public function up(): void
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->char('slug')->index();
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     */
    // Eliminar la tabla 'roles'
    public function down(): void
    {
        Schema::dropIfExists('roles');
    }
};
