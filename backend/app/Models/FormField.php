<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FormField extends Model
{
    protected $fillable = [
        'form_id',
        'label',
        'type',
        'required',
        'options',
        'sort_order',
    ];

    public function form()
    {
        return $this->belongsTo(Form::class);
    }
}
