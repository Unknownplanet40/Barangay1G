<?php

namespace App\Http\Controllers;

use App\Alert;
use Illuminate\Http\Request;

use App\Http\Resources\AlertResource;
use App\Http\Resources\AlertCollection;
use App\Resident;

use Illuminate\Support\Facades\Http;
class AlertController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        
        $alerts = new AlertCollection(Alert::all());
        return response()->json([
            'data' => $alerts,
            'status' => true,
            'message' => 'Alerts retrieved successfully'
        ], 200);
    }

    public function sendAlerts(Request $request)
    {
        $residents = Resident::select('phone_number')->get();
        $phoneNumbers = $residents->pluck('phone_number')->map(function($number) {
            return '0' . $number;
        })->implode(',');

        $apiUrl = "https://api.semaphore.co/api/v4/messages";
        $apiKey = "8995e39c5d3fa0f2937eab7cda28ae05";
        $numbers = $phoneNumbers;
        $message = $request->message;

        $response = Http::asForm()->post($apiUrl, [
            'apikey' => $apiKey,
            'number' => $numbers,
            'message' => $message,
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Alerts sent successfully'
        ], 200);


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
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'category' => 'required|string',
            'status' => 'required|in:0,1',
        ]);

        $alert = Alert::create($request->all());

        return response()->json([
            'data' => new AlertResource($alert),
            'status' => true,
            'message' => 'Alert created successfully'
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Alert  $alert
     * @return \Illuminate\Http\Response
     */
    public function show(Alert $alert)
    {
        return response()->json([
            'data' => new AlertResource($alert),
            'status' => true,
            'message' => 'Alert retrieved successfully'
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Alert  $alert
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Alert $alert)
    {
        $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'category' => 'sometimes|string',
            'status' => 'sometimes|in:0,1',
        ]);

        $alert->update($request->all());

        return response()->json([
            'data' => new AlertResource($alert),
            'status' => true,
            'message' => 'Alert updated successfully'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Alert  $alert
     * @return \Illuminate\Http\Response
     */
    public function destroy(Alert $alert)
    {
        $alert->delete();

        return response()->json([
            'status' => true,
            'message' => 'Alert deleted successfully'
        ], 200);
    }
}