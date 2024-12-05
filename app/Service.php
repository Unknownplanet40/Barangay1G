<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = [
        'title',
        'description',
        'eligibility',
        'category',
        'date_start',
        'date_end',
        'status',
        'file_type',
        'file_path',
    ];
}






