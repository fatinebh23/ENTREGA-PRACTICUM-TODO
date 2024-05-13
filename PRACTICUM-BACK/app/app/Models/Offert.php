<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\OffertController;

class Offert extends Model
{
    use HasFactory;
    protected $table = 'offerts';

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function sector()
    {
        return $this->belongsTo(Sector::class);
    }
}
