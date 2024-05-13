<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    // Crear la tabla 'offerts'
    public function up(): void
    {
        Schema::create('offerts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->nullable()->unsigned();
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('set null');
            $table->string('title');
            /*$table->string('dates');
            $table->string('schedule');
            $table->integer('vacancies');*/
            $table->text('description');
            $table->foreignId('sector_id')->nullable()->unsigned();
            $table->foreign('sector_id')->references('id')->on('sectors')->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    // Eliminar la tabla 'offerts'
    public function down(): void
    {
        Schema::dropIfExists('offerts');
    }
};
