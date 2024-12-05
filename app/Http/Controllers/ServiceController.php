<?php

namespace App\Http\Controllers;

use App\Service;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;

use App\Http\Resources\ServiceResource;
use App\Http\Resources\ServiceCollection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


class ServiceController extends Controller
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
    public function index()
    {
        $services = new ServiceCollection(Service::all());

        return response()->json([
            'data' => $services,
            'status' => true,
            'message' => 'Services fetched successfully'
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
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'eligibility' => 'required|string',
            'category' => 'required|string',
            'date_start' => 'required|date',
            'date_end' => 'required|date|after_or_equal:date_start',
            'status' => 'required|in:0,1',

            'file' => 'required|mimes:jpeg,png,jpg,gif,svg,mp4,mov,avi|max:20480',
        ]);


        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $filePath = $file->storeAs('uploads', $fileName, 'public');
            $fileMimeType = $file->getMimeType();
            $request->file_path = $filePath;
        }

        // Create a new service
        $service = new Service([
            'title' => $request->title,
            'description' => $request->description,
            'eligibility' => $request->eligibility,
            'category' => $request->category,
            'date_start' => $request->date_start,
            'date_end' => $request->date_end,
            'status' => $request->status,
            'file_type' => $fileMimeType,
            'file_path' => $filePath,
        ]);
        // Save the service
        $service->save();

        return response()->json([
            'data' => new ServiceResource($service),
            'status' => true,
            'message' => 'Disaster created successfully'
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Service  $service
     * @return \Illuminate\Http\Response
     */
    // www.facebook.com

    public function show(Service $service)
    {
        return response()->json([
            'data' => new ServiceResource($service),
            'status' => true,
            'message' => 'Service fetched successfully'
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function edit(Service $service)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Service $service)
    {


        $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'eligibility' => 'sometimes|string',
            'category' => 'sometimes|string',
            'date_start' => 'sometimes|date',
            'date_end' => 'sometimes|date|after_or_equal:date_start',
            'status' => 'sometimes|in:0,1',

            'file' => 'sometimes|mimes:jpeg,png,jpg,gif,svg,mp4,mov,avi|max:20480', // Validate image or video
        ]);
        // Update the service
        $service->update($request->only([
            'title',
            'description',
            'eligibility',
            'category',
            'date_start',
            'date_end',
            'status',
            'file_type',
            'file_path',
        ]));
        if ($request->hasFile('file')) {
            // Delete the old file if it exists
            if ($service->file_path) {
                Storage::disk('public')->delete($service->file_path);
            }



            // Store the new file
            $file = $request->file('file');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $filePath = $file->storeAs('uploads', $fileName, 'public');
            $fileMimeType = $file->getMimeType(); // Get the MIME type of the file

            // Add the new file path and MIME type to the data array
            $service->update([
                'file_type' => $fileMimeType,
                'file_path' => $filePath,
            ]);
        }



        return response()->json([
            'data' => new ServiceResource($service),
            'status' => true,
            'message' => 'Service updated successfully'
        ], 200);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function destroy(Service $service)
    {
        $service->delete();

        return response()->json([
            'status' => true,
            'message' => 'Service deleted successfully'
        ], 200);
    }
}
