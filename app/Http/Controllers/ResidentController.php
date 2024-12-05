<?php

namespace App\Http\Controllers;

use App\Resident;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;

use App\Http\Resources\ResidenceResource;
use App\Http\Resources\ResidenceCollection;

class ResidentController extends Controller
{

    public function __construct(){  
        $this->middleware('auth:api');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    


    // GET /api/residents
    public function index()
    {

        $residents = new ResidenceCollection(Resident::with('user')->get());
        
        return response()->json([
            'data' => $residents,
            'status' => true,
            'message' => 'Residents fetched successfully'
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
    // POST /api/residents
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
        ]);


        // Create the user
        $user = new User([
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'role' => "resident",
            'is_active' => 1
        ]);

        $user->save();
        $resident = new Resident([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'date_of_birth' => $request->date_of_birth,
            'age' => $request->age,
            'address' => $request->address,
            'phone_number' => $request->phone_number,
            'gender' => $request->gender
        ]);
     

        $user->resident()->save($resident);

        return response()->json([
            'message' => 'Residence and user created successfully!',
            'user' => new UserResource($user),
            'resident' => new ResidenceResource($resident)
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Resident  $resident
     * @return \Illuminate\Http\Response
     */
    public function show(Resident $resident)
    {
        return response()->json([
            'residence' => new ResidenceResource($resident),
            'status' => true,
            'message' => 'Residence fetched successfully'
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Resident  $resident
     * @return \Illuminate\Http\Response
     */
    public function edit(Resident $resident)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Resident  $resident
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Resident $resident)
    {   
   
        $request->validate([
            // user fields
            'name' => 'sometimes|string',
            'username' => 'sometimes|string|unique:users,username,' . $resident->user_id,
            'email' => 'sometimes|email|unique:users,email,' . $resident->user_id,
            'password' => 'sometimes|string|confirmed|min:6',

            'first_name' => 'sometimes|string',
            'last_name' => 'sometimes|string',
            'date_of_birth' => 'sometimes|date',
            'age' => 'sometimes|integer',
            'address' => 'sometimes|string',
            'phone_number' => 'sometimes|integer',
            'gender' => 'sometimes|string'
        ]);

        // Update the user
        $user = $resident->user;
        $userData = $request->only(['name', 'username', 'email', 'password', 'role']);

        if (isset($userData['password'])) {
            $userData['password'] = bcrypt($userData['password']);
        }

        $user->update($userData);

        // Update the residence
        $resident->update($request->only([
            'first_name',
            'last_name',
            'date_of_birth',
            'age',
            'address',
            'phone_number',
            'gender'
        ]));


        return response()->json([
            'message' => 'Residence and user updated successfully!',
            'user' => new UserResource($user),
            'residence' => new ResidenceResource($resident)
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Resident  $resident
     * @return \Illuminate\Http\Response
     */
    public function destroy(Resident $resident)
    {
        $user = $resident->user;
        $user->is_active = 0;
        $user->save();

        $resident->delete();

        return response()->json([
            'message' => 'Residence deleted successfully!'
        ], 200);
    }
}
