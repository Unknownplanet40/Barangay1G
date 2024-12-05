<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Auth;
use App\Http\Resources\UserResource;


class AuthController extends Controller
{

    public function users() {
        $users = new UserResource(User::all());

        return response()->json([
            'data' => $users,
            'status_code' => 200
        ], 200);
    }


    public function login(Request $request)
    {
        $request->validate([
            'username'  => 'required|string',
            'password'    => 'required|string',
        ]);

        $fieldType = filter_var($request->username, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

        if(!Auth::attempt([$fieldType => $request->username, 'password' => $request->password])) {
            return response()->json([
                'message' => 'Unauthorized',
                'status_code' => 401,
         
            ], 401);
        }

        $user = $request->user();

         if($user->role == "admin"){
            $tokenPermission = $user->createToken('Personal Access Token', ['admin']);
            $user_data = User::where('id', $user->id)->first();
        } elseif($user->role == "official") {    
            $tokenPermission = $user->createToken('Personal Access Token', ['official']);
            $user_data = User::where('id', $user->id)->first();
        }else{
            $tokenPermission = $user->createToken('Personal Access Token', ['resident']);
            $user_data = User::where('id', $user->id)->first();
        }

        $token = $tokenPermission->token;
        if($request->remember_me) {
            $token->expires_at = Carbon::now()->addWeeks(1);
        }      
        
        if($token->save()){
            return response()->json([
                'user' => $user_data,
                'access_token' => $tokenPermission->accessToken,
                'token_type' => 'Bearer',
                'token_scope' => $tokenPermission->token->scopes[0],
                'expires_at' => Carbon::parse($tokenPermission->token->expires_at)->toDateTimeString(),
                'status_code' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some error occurred, Please try again!',
                'status_code' => 500
            ], 500);
        }

    }


    public function register(Request $request)
    {
        $request->validate([
            'name'                  =>      ['required', 'string', 'max:255'],
            'email'                 =>      ['required', 'string', 'email', 'unique:users'],
            'username'              =>      ['required', 'string' ,'max:255', 'regex:/^[^(\|\]~`!%^&*=};:?><’)]*$/', 'unique:users'],
            'password'              =>      ['required', 'string', 'min:8', 'confirmed'],
            'password_confirmation' =>      ['required', 'string', 'min:8', 'same:password'],
            'role'                  =>      ['required', 'string'],
        ]);


        $user = user::firstOrCreate([
            'name' => $request->name,
            'email' => $request->email,
            'username' => $request->username,
            'password' => Hash::make($request->password),
            'role' => $request->role,
            'email_verified_at' => Carbon::now(),
        ]);

        return response()->json([
            'message' => 'User created successfully',
            'status_code'   =>    201,
            'data' => $user
        ], 201);
     
    }

    public function userProfile(Request $request){
        $user_id = $request->user()->id;
        $user_data = User::where('id', $user_id)->first();
    
        // echo $user_data;

      
        if($user_data->role == "admin" || $user_data->role == "official") {
            $logged_user = User::where('id', $user_id)->first();
        } else {
            $logged_user = User::where('id', $user_id)->first();   
        }

        if($logged_user) {
            return response()->json($logged_user, 200);
        }

        return response()->json(
            [
                'message' => 'Not loggedin!',
                'status_code' => 500
            ], 500 
        );

    }


    public function logout(Request $request){
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Logout successfully!',
            'status_code' => 200
        ], 200);
    }
}
