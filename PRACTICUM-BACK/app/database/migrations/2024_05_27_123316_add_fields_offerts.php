<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('offerts', function (Blueprint $table) {
            $table->string('name')->after('title')->nullable(); // Agrega la columna 'name' después de 'title'
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('offerts', function (Blueprint $table) {
            $table->dropColumn('name'); // Elimina la columna 'name' si necesitas revertir la migración
        });
    }
};
