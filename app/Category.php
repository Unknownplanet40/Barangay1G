<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    
    protected $fillable = ['name'];
    
    public function disasters()
    {
        return $this->hasMany('App\Disaster', 'category_id', 'id');
    }
}
