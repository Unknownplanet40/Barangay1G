<?php

namespace App\Http\Controllers;

use App\Resource;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

use App\Http\Resources\ResourceResource;
use App\Http\Resources\ResourcesCollection;


class ResourceController extends Controller
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
        $resources = new ResourcesCollection(Resource::all());
        return response()->json([
            'data' => $resources,
            'status' => true,
            'message' => 'Resources retrieved successfully'
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
            'type' => 'required|string',
            'status' => 'required|in:0,1',
            'file' => 'required|mimes:jpeg,png,jpg,gif,svg,mp4,mov,avi|max:20480', // Validate image or video
        ]);

        $data = $request->only([
            'title',
            'description',
            'type',
            'status',
        ]);

        if ($request->hasFile('file')) {
            // Store the new file
            $file = $request->file('file');
            $fileName = Str::uuid() . '.' . $file->getClientOriginalExtension(); // Generate a unique file name using UUID
            $filePath = $file->storeAs('uploads', $fileName, 'public');
            $fileMimeType = $file->getMimeType(); // Get the MIME type of the file

            // Add the new file path and MIME type to the data array
            $data['file_path'] = $filePath;
            $data['file_type'] = $fileMimeType;
        }

        $resource = Resource::create($data);

        return response()->json([
            'data' => new ResourceResource($resource),
            'status' => true,
            'message' => 'Resource created successfully'
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Resource  $resource
     * @return \Illuminate\Http\Response
     */
    public function show(Resource $resource)
    {
        return response()->json([
            'data' => $resource,
            'status' => true,
            'message' => 'Resource retrieved successfully'
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Resource  $resource
     * @return \Illuminate\Http\Response
     */
    public function edit(Resource $resource)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Resource  $resource
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Resource $resource)
    {

        $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'type' => 'sometimes|string',
            'status' => 'sometimes|in:0,1',
            'file' => 'sometimes|mimes:jpeg,png,jpg,gif,svg,mp4,mov,avi|max:20480', // Validate image or video
        ]);

        $data = $request->only([
            'title',
            'description',
            'type',
            'status',
        ]);


           // Update the service
        $resource->update($request->only([
            'title',
            'description',
            'type',
            'status',
            'file_type',
            'file_path',
        ]));
        if ($request->hasFile('file')) {
            // Delete the old file if it exists
            if ($resource->file_path) {
                Storage::disk('public')->delete($resource->file_path);
            }

            // Store the new file
            $file = $request->file('file');
            $fileName = Str::uuid() . '.' . $file->getClientOriginalExtension(); // Generate a unique file name using UUID
            $filePath = $file->storeAs('uploads', $fileName, 'public');
            $fileMimeType = $file->getMimeType(); // Get the MIME type of the file

            // Add the new file path and MIME type to the data array
            $data['file_path'] = $filePath;
            $data['file_type'] = $fileMimeType;
        }

        $resource->update($data);

        return response()->json([
            'data' => new ResourceResource($resource),
            'status' => true,
            'message' => 'Resource updated successfully'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Resource  $resource
     * @return \Illuminate\Http\Response
     */
    public function destroy(Resource $resource)
    {
        // Delete the file if it exists
        if ($resource->file_path) {
            Storage::disk('public')->delete($resource->file_path);
        }

        $resource->delete();

        return response()->json([
            'status' => true,
            'message' => 'Resource deleted successfully'
        ], 200);
    }
}
