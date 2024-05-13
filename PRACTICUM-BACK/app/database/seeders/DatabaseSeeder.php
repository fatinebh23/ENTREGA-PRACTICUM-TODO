<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Role;
use App\Models\Sector;
use App\Models\Center;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $role = new Role();
        $role->name = 'Super Admin';
        $role->slug= "super-admin";
        $role->save();

        $role = new Role();
        $role->name = 'Empresa';
        $role->slug= "company";
        $role->save();

        $role = new Role();
        $role->name = 'Estudiante';
        $role->slug= "student";
        $role->save();

        $sector = new Sector();
        $sector->name = 'Informática';
        $sector->save();

        $sector = new Sector();
        $sector->name = 'Administración';
        $sector->save();

        $sector = new Sector();
        $sector->name = 'Sanidad';
        $sector->save();

        $center = new Center();
        $center->name = 'IES Alvaro Falomir';
        $center->save();

        $center = new Center();
        $center->name = 'IES Cervantes';
        $center->save();

        $center = new Center();
        $center->name = 'IES Santa Maria';
        $center->save();
    }
}
