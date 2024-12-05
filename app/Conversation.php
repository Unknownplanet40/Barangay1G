<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{
    protected $fillable = [
        'user_id',
        'title'
    ];


    public function messages()
    {
        return $this->hasMany('App\Message', 'conversation_id', 'id');
    }

    public function creator()
    {
        return $this->belongsTo('App\User', 'user_id', 'id');
    }

}
