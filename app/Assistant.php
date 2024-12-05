<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Assistant extends Model
{
    protected $fillable = [
        'id',
        'title',
        'resident_id',
        'assistant_type',
        'description',
        'date_request',
        'lat',
        'lng',
        'file_type',
        'file_path',
        'status',
    ];


    public function resident()
    {
        return $this->belongsTo('App\Resident' , 'resident_id', 'id');
    }
}
