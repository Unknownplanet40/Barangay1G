<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Resource extends Model
{
    protected $fillable = [
        'title',
        'description',
        'type',
        'file_type',
        'file_path',
        'status',
    ];
}





