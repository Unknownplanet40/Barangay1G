<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Resident extends Model
{
    //
    protected $fillable = [
        'user_id', 
        'first_name', 
        'last_name', 
        'date_of_birth', 
        'age', 
        'address', 
        'phone_number', 
        'gender', 
        'address'
    ];


    public function user(){
        return $this->belongsTo('App\User', 'user_id', 'id');
    }




    public function assistants(){
        return $this->hasMany('App\Assistant', 'resident_id', 'id');
    }
}

