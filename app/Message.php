<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    //
    protected $fillable = [
        'sender_id',
        'receiver_id',
        'content',
        'status',
        'role',
        'conversation_id'
    ];

    
    public function sender() {
        return $this->belongsTo('App\User', 'sender_id', 'id');
    }

    public function receiver()
    {
        return $this->belongsTo('App\User', 'receiver_id', 'id');
    }

    public function conversation() 
    {
        return $this->belongsTo('App\Conversation', 'conversation_id', 'id');
    }
}
