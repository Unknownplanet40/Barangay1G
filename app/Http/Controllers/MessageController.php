<?php

namespace App\Http\Controllers;

use App\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

use App\User;
use App\Conversation;
use App\Events\MessageEvent;

class MessageController extends Controller
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
        //
    }

    public function conversations()
    {
        $conversations = Conversation::with('messages.sender', 'creator')->get();
        
        return response()->json([
            'data' => $conversations,
            'status' => true,
            'message' => 'fetch all messages'
        ], 201);
    
    }

    public function fetchAllMessage()
    {
        $messages = Message::with('user')->get();

        return response()->json([
            'data' => $messages,
            'status' => true,
            'message' => 'Messages fetched successfully'
        ], 200);
    }


    public function conversation(Request $request, $id)
    {
        $conversation = Conversation::with('messages.sender', 'creator')->where('id', $id)->first();

        return response()->json([
            'data' => $conversation,
            'status' => true,
            'message' => 'conversation fetched successfully'
        ], 200);
    }

    public function replyMessage(Request $request, $id)
    {   
        $user = Auth::user();

        $conversation = Conversation::with('messages', 'creator')->where('id', $id)->first();
      

        $message = new Message([
            'sender_id' => $user->id,
            'content' => $request->content,
            'status' => $request->status,
            'role' => $user->role,
            'conversation_id' => $conversation->id
        ]); 

        $message->save();
        broadcast(new MessageEvent($message->load('sender')))->toOthers();
        return response()->json([
            'data' => $message,
            'status' => true,
            'message' => 'Message sent successfully'
        ]);
    }

    public function deleteConversation($id)
    {
        $conversation = Conversation::find($id);

        if ($conversation) {
            $conversation->messages()->delete();
            $conversation->delete();

            return response()->json([
                'status' => true,
                'message' => 'Conversation and its messages deleted successfully'
            ], 200);
        }

        return response()->json([
            'status' => false,
            'message' => 'Conversation not found'
        ], 404);
    }


    public function sendMessage(Request $request)
    {
        $user = Auth::user();
        $conversation = new Conversation([
            'title' => $request->title,
            'user_id' => $user->id,
        ]);
        
        $conversation->save();

        $message = new Message([
            'sender_id' => $user->id,
            'content' => $request->content,
            'status' => $request->status,
            'role' => $user->role,
            'conversation_id' => $conversation->id
        ]);

        $message->save();

        $conversation = Conversation::with('messages')->find($conversation->id);
        broadcast(new MessageEvent($message->load('sender')))->toOthers();
        return response()->json([
            'data' => $conversation,
            'status' => true,
            'message' => 'Message sent and conversation fetched successfully'
        ], 201);
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function show(Message $message)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function edit(Message $message)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Message $message)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function destroy(Message $message)
    {
        //
    }
}
