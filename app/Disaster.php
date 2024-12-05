<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Disaster extends Model
{
    
    protected $fillable = [
        'name', 'description', 'location', 'date', 'category_id', 'status'
    ];

    public function category()
    {
        return $this->belongsTo('App\Category', 'category_id', 'id');
    }
}
