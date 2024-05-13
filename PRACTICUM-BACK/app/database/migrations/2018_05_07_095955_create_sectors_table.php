<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    // Crear la tabla 'sectors'
    public function up(): void
    {
        Schema::create('sectors', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('course_id')->nullable()->unsigned();
            $table->foreign('course_id')->references('id')->on('courses')->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    // Eliminar la tabla 'sectors'
    public function down(): void
    {
        Schema::dropIfExists('sectors');
    }
};
