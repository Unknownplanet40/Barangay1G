<?php

namespace App\Http\Controllers;

use App\Disaster;
use Illuminate\Http\Request;
use App\Http\Resources\DisasterResource;
use App\Http\Resources\DisasterCollection;
use App\Http\Resources\CategoryResource;

class DisasterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }


    public function residentDisasters()
    {
        $disasters = Disaster::with('category')->paginate(1);

        return response()->json([
            'data' => $disasters,
            'status' => true,
            'message' => 'Disasters fetched successfully'
        ], 200);
    }

    public function index()
    {
        $disasters = new DisasterCollection(Disaster::with('category')->get());

        return response()->json([
            'data' => $disasters,
            'status' => true,
            'message' => 'Disasters fetched successfully'
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
            'description' => 'required|string',
            'location' => 'required|string',
            'date' => 'required|date',
            'status' => 'required|string',

            'type' => 'required|exists:categories,id'
        ]);


        $disaster = new Disaster([
            'name' => $request->name,
            'description' => $request->description,
            'location' => $request->location,
            'date' => $request->date,
            'category_id' => $request->type,
            'status' => $request->status
        ]);

        $disaster->save();

        return response()->json([
            'data' => new DisasterResource($disaster),
            'status' => true,
            'message' => 'Disaster created successfully'
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Disaster  $disaster
     * @return \Illuminate\Http\Response
     */
    public function show(Disaster $disaster)
    {
        return response()->json([
            'data' => new DisasterResource($disaster),
            'status' => true,
            'message' => 'Disaster fetched successfully'
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Disaster  $disaster
     * @return \Illuminate\Http\Response
     */
    public function edit(Disaster $disaster)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Disaster  $disaster
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Disaster $disaster)
    {
        $request->validate([
            'name' => 'sometimes|string',
            'description' => 'sometimes|string',
            'location' => 'sometimes|string',
            'date' => 'sometimes|date',
            'status' => 'sometimes|string'
        ]);

        $disaster->update(
            $request->only(['name', 'description', 'location', 'date', 'type', 'status'])
        );

        return response()->json([
            'data' => new DisasterResource($disaster),
            'status' => true,
            'message' => 'Disaster updated successfully'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Disaster  $disaster
     * @return \Illuminate\Http\Response
     */
    public function destroy(Disaster $disaster)
    {
        $disaster->delete();

        return response()->json([
            'status' => true,
            'message' => 'Disaster deleted successfully'
        ], 200);
    }
}
