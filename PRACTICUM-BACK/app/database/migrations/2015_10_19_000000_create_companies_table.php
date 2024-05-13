<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    // Crear la tabla 'companies'
    public function up(): void
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->foreignId('province_id')->nullable()->unsigned();
            $table->foreign('province_id')->references('id')->on('provinces')->onDelete('set null');
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    // Eliminar la tabla 'companies'
    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
};
