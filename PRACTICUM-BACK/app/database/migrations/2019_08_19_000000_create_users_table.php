<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    // Crear la tabla 'users'
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('surname')->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->foreignId('role_id')->nullable()->unsigned();
            $table->foreign('role_id')->references('id')->on('roles')->onDelete('set null');
            $table->char('status')->default(1);
            $table->foreignId('company_id')->nullable()->unsigned();
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('set null');
            $table->foreignId('center_id')->nullable()->unsigned();
            $table->foreign('center_id')->references('id')->on('centers')->onDelete('set null');
            $table->foreignId('course_id')->nullable()->unsigned();
            $table->foreign('course_id')->references('id')->on('courses')->onDelete('set null');
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    // Eliminar la tabla 'users'
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
