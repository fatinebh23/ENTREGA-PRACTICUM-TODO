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
        Schema::table('users', function (Blueprint $table) {
            if (!Schema::hasColumn('users', 'age')) {
                $table->integer('age')->nullable();
            }
            if (!Schema::hasColumn('users', 'sector_id')) {
                $table->unsignedBigInteger('sector_id')->nullable();
            }
            if (!Schema::hasColumn('users', 'description')) {
                $table->string('description', 255)->nullable();
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
            //
            Schema::table('users', function (Blueprint $table) {
                if (Schema::hasColumn('users', 'age')) {
                    $table->dropColumn('age');
                }
                if (Schema::hasColumn('users', 'sector_id')) {
                    $table->dropColumn('sector_id');
                }
                if (Schema::hasColumn('users', 'description')) {
                    $table->dropColumn('description');
                }
            });
    }
};
