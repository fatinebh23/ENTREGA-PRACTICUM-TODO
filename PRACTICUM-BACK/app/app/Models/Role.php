<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\PermissionRole;

class Role extends Model
{
    use HasFactory;

    protected $table = 'roles';

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
