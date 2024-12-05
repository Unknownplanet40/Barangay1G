<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\ResidenceResource;

class AssistantResource extends JsonResource
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
            'resident_id' => $this->resident_id,
            'assistant_type' => $this->assistant_type,
            'description' => $this->description,
            'date_request' => $this->date_request,
            'lat' => $this->lat,
            'lng' => $this->lng,
            'file_type' => $this->file_type,
            'file_path' => $this->file_path,
            'status' => $this->status,
            'resident' => new ResidenceResource($this->whenLoaded('resident')),
        ];
    }
}
