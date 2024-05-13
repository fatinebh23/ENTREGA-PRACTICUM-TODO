<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $table = 'companies';

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function oferts()
    {
        return $this->hasMany(Ofert::class);
    }
}
