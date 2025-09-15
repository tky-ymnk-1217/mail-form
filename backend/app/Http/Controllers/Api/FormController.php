<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Models\Form;

class FormController extends Controller
{
    // 公開フォーム一覧
    public function index() {
        return Form::where('status', true)->get();
    }

    // 公開フォーム詳細
    public function show($slug)
    {
        $form = Form::with('fields')
            ->where('slug', $slug)
            ->where('status', true)
            ->firstOrFail();

        return response()->json([
            'id' => $form->id,
            'title' => $form->title,
            'description' => $form->description,
            'slug' => $form->slug,
            'fields' => $form->fields->map(function ($field) {
                return [
                    'id' => $field->id,
                    'label' => $field->label,
                    'type' => $field->type,
                    'required' => $field->required,
                    'options' => $field->options,
                ];
            }),
        ]);
    }
}
