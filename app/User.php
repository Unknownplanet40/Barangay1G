<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'username',
        'role',
        'is_active',
        'email_verified_at'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function resident()
    {
        return $this->hasOne('App\Resident', 'user_id', 'id');
    }

    public function official()
    {
        return $this->hasOne('App\Official', 'user_id', 'id');
    }
    public function sentMessages()
    {
        return $this->hasMany('App\Message', 'sender_id', 'id');
    }

    public function recievedMessage() 
    {
        return $this->hasMany('App\Message', 'receiver_id', 'id');
    }

    public function conversations() 
    {
        return $this->hasMany('App\Conversation', 'user_id', 'id');
    }
 
}
