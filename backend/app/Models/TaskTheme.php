<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskTheme extends Model
{
    use HasFactory;

    protected $fillacle = [
        'name'
    ];

    protected $primaryKey = 'id';

    public $incrementing = false;

    protected $keyType = 'string';
}
