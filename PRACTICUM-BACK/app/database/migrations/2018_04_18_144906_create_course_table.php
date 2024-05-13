<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    // Crear la tabla 'courses'
    public function up(): void
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('level_id')->nullable()->unsigned();
            $table->foreign('level_id')->references('id')->on('levels')->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    // Eliminar la tabla 'courses'
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
