<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Task extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillacle = [
        'title', 'is_done', 'user_id'
    ];

    protected $casts = [
        'is_done' => 'bool', 'user_id' => 'int'
    ];

    protected $primaryKey = 'id';

    public $incrementing = false;

    protected $keyType = 'string';
}
