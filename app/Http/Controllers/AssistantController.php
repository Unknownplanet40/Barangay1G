<?php

namespace App\Http\Controllers;

use App\Assistant;
use Illuminate\Http\Request;

use App\Http\Resources\AssistantResource;
use App\Http\Resources\AssistantCollection;

use App\Resident;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class AssistantController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }


    public function getAssistanceData()
    {

        $data = \App\Assistant::selectRaw('COUNT(*) as count, YEAR(created_at) year,  monthname(created_at) as month, MONTH(created_at) month_num')
            ->groupBy('year', 'month', 'month_num')

            ->get();


        // $weekly = DB::table('assistants')
        //     ->select(DB::raw('COUNT(*) as count'), DB::raw('WEEK(created_at) as week'))
        //     ->groupBy('week')
        //     ->get();

        // $monthly = DB::table('assistants')
        //     ->select(DB::raw('COUNT(*) as count'), DB::raw('MONTH(created_at) as month'))
        //     ->groupBy('month')
        //     ->get();

        // $yearly = DB::table('assistants')
        //     ->select(DB::raw('COUNT(*) as count'), DB::raw('YEAR(created_at) as year'))
        //     ->groupBy('year')
        //     ->get();\

        return response()->json([
            'data' => $data,
            'status' => true,
            'message' => 'Assistance data retrieved successfully'
        ], 200);

        // return response()->json([
        //     'weekly' => $weekly,
        //     'monthly' => $monthly,
        //     'yearly' => $yearly
        // ]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $assistants = new AssistantCollection(Assistant::with('resident')->get());
        return response()->json([
            'data' => $assistants,
            'status' => true,
            'message' => 'Assistants retrieved successfully'
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {}

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function respondAction(Request $request, Assistant $assistant)
    {
        $request->validate([
            'status' => 'required|in:0,1,2',
        ]);

        $assistant->status = $request->status;
        $assistant->save();

        $apiUrl = "https://api.semaphore.co/api/v4/messages";
        $apiKey = "8995e39c5d3fa0f2937eab7cda28ae05";
        $numbers = $request->phone_number;
        $message = $request->message;

        $response = Http::asForm()->post($apiUrl, [
            'apikey' => $apiKey,
            'number' => $numbers,
            'message' => $message,
        ]);



        return response()->json([
            'data' => new AssistantResource($assistant),
            'status' => true,
            'message' => 'Assistant updated successfully'
        ], 200);
    }

    public function store(Request $request)
    {

        $user = Auth::user();
        $resident = $user->resident;

        if (!$resident) {
            return response()->json([
                'status' => false,
                'message' => 'You are not a resident'
            ], 403);
        }


        $request->validate([
            // 'title' => 'required|string|max:255',
            'assistant_type' => 'required|string|max:255',
            'description' => 'required|string',
            'date_request' => 'required|date',
            'lat' => 'required|string',
            'lng' => 'required|string',
            'status' => 'required|in:0,1,2',
            'file' => 'sometimes|mimes:jpeg,png,jpg,gif,svg,mp4,mov,avi|max:20480', // Validate image or video
        ]);



        $data = $request->only([
            'title',
            'assistant_type',
            'description',
            'date_request',
            'lat',
            'lng',
            'status',
        ]);

        $data['resident_id'] = $resident->id;



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

        $assistant = Assistant::create($data);

        return response()->json([
            'data' => new AssistantResource($assistant),
            'status' => true,
            'message' => 'Assistant created successfully'
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Assistant  $assistant
     * @return \Illuminate\Http\Response
     */
    public function show(Assistant $assistant)
    {
        return response()->json([
            'data' => new AssistantResource($assistant),
            'status' => true,
            'message' => 'Assistant retrieved successfully'
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Assistant  $assistant
     * @return \Illuminate\Http\Response
     */
    public function edit(Assistant $assistant) {}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Assistant  $assistant
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Assistant $assistant)
    {
        $request->validate([
            'title' => 'sometimes|string|max:255',
            'assistant_type' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'date_request' => 'sometimes|date',
            'lat' => 'sometimes|string',
            'lng' => 'sometimes|string',
            'status' => 'sometimes|in:0,1,2',
            'file' => 'sometimes|mimes:jpeg,png,jpg,gif,svg,mp4,mov,avi|max:20480', // Validate image or video
        ]);

        $data = $request->only([
            'title',
            'assistant_type',
            'description',
            'date_request',
            'lat',
            'lng',
            'status',
        ]);

        if ($request->hasFile('file')) {
            // Delete the old file if it exists
            if ($assistant->file_path) {
                Storage::disk('public')->delete($assistant->file_path);
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

        $assistant->update($data);

        return response()->json([
            'data' => new AssistantResource($assistant),
            'status' => true,
            'message' => 'Assistant updated successfully'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Assistant  $assistant
     * @return \Illuminate\Http\Response
     */
    public function destroy(Assistant $assistant)
    {
        // Delete the file if it exists
        if ($assistant->file_path) {
            Storage::disk('public')->delete($assistant->file_path);
        }

        $assistant->delete();

        return response()->json([
            'status' => true,
            'message' => 'Assistant deleted successfully'
        ], 200);
    }

    public function totalPerDay()
    {
        $totals = Assistant::selectRaw('DATE(created_at) as date, COUNT(*) as total')
            ->groupBy('date')
            ->get();

        return response()->json([
            'data' => $totals,
            'status' => true,
            'message' => 'Total assistants per day retrieved successfully'
        ], 200);
    }
}
