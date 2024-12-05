<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ResourceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'type' => $this->type,
            'file_type' => $this->file_type,
            'file_path' => $this->file_path,
            'status' => $this->status,
            'created_at' => $this->created_at,  
            'updated_at' => $this->updated_at,
        ];
    }
}





