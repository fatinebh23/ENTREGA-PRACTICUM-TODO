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
            $table->string('dates')->nullable(); // Agrega la columna
            $table->string('schedule')->nullable(); // Agrega la columna
            $table->string('vacancies')->nullable(); // Agrega la columna
            $table->string('remun')->nullable(); // Agrega la columna
            $table->string('prov_id')->nullable(); // Agrega la columna
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('offerts', function (Blueprint $table) {
            $table->dropColumn('dates'); // Elimina la columna
            $table->dropColumn('schedule'); // Elimina la columna
            $table->dropColumn('vacancies'); // Elimina la columna
            $table->dropColumn('remun'); // Elimina la columna
            $table->dropColumn('prov_id'); // Elimina la columna
        });
    }
};
