<?php

namespace App\Http\Controllers;

use App\Official;
use Illuminate\Http\Request;
use App\Http\Resources\OfficialResource;
use App\Http\Resources\OfficialCollection;
use App\User;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;

class OfficialController extends Controller
{
    public function __construct(){  
        $this->middleware('auth:api');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $officials = new OfficialCollection(Official::with('user')->get());
        
        return response()->json([
            'data' => $officials,
            'status' => true,
            'message' => 'Officials fetched successfully'
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'username' => 'required|string|unique:users',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|confirmed|min:6',


            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'date_of_birth' => 'required|date',
            'age' => 'required|integer',
            'address' => 'required|string',
            'phone_number' => 'required|integer',
            'gender' => 'required|string',
            'position' => 'required|string'
        ]);


        // Create the user
        $user = new User([
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'role' => "official",
            'is_active' => 1
        ]);

        $user->save();

        $official = new Official([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'date_of_birth' => $request->date_of_birth,
            'age' => $request->age,
            'address' => $request->address,
            'phone_number' => $request->phone_number,
            'gender' => $request->gender,
            'position' => $request->position
        ]);

        $user->official()->save($official);

        return response()->json([
            'message' => 'Official and user created successfully!',
            'user' => new UserResource($user),
            'official' => new OfficialResource($official)
        ], 201);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Official  $official
     * @return \Illuminate\Http\Response
     */
    public function show(Official $official)
    {
        return response()->json([
            'official' => new OfficialResource($official),
            'status' => true,
            'message' => 'Official fetched successfully'
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Official  $official
     * @return \Illuminate\Http\Response
     */
    public function edit(Official $official)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Official  $official
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Official $official)
    {
        $request->validate([
            // user fields
            'name' => 'sometimes|string',
            'username' => 'sometimes|string|unique:users,username,' . $official->user_id,
            'email' => 'sometimes|email|unique:users,email,' . $official->user_id,
            'password' => 'sometimes|string|confirmed|min:6',

            'first_name' => 'sometimes|string',
            'last_name' => 'sometimes|string',
            'date_of_birth' => 'sometimes|date',
            'age' => 'sometimes|integer',
            'address' => 'sometimes|string',
            'phone_number' => 'sometimes|integer',
            'gender' => 'sometimes|string',
            'position' => 'sometimes|string'
        ]);

        $user = $official->user;
        $userData = $request->only(['name', 'username', 'email', 'password', 'role']);
        
        if(isset($userData['password'])) {
            $userData['password'] = bcrypt($userData['password']);
        }

        $user->update($userData);

        $official->update(
            $request->only(
                [
                    'first_name', 
                    'last_name', 
                    'date_of_birth', 
                    'age', 
                    'address', 
                    'phone_number', 
                    'gender', 
                    'position'
                ]
            )
        );

       
        return response()->json([
            'message' => 'Official updated successfully!',
            'user' => new UserResource($user),
            'official' => new OfficialResource($official)
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Official  $official
     * @return \Illuminate\Http\Response
     */
    public function destroy(Official $official)
    {   
        $user = $official->user;
        $user->is_active = 0;
        $user->save();
        
        $official->delete();
        
        return response()->json([
            'message' => 'Official deleted successfully!'
        ], 200);
    }
}
