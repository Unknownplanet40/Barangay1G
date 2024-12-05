<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



class Official extends Model
{
    protected $fillable = [
        'user_id', 
        'first_name', 
        'last_name', 
        'date_of_birth', 
        'age', 
        'address', 
        'phone_number', 
        'gender', 
        'address',
        'position'
    ];

    public function user(){
        return $this->belongsTo('App\User', 'user_id', 'id');
    }



}
