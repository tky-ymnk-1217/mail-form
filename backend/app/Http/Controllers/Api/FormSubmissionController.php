<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Models\Form;
use App\Models\FormSubmission;

class FormSubmissionController extends Controller
{
    // フォーム送信
    public function store(Request $request, $slug)
    {
        $form = Form::with('fields')
            ->where('slug', $slug)
            ->where('status', true)
            ->firstOrFail();

        // バリデーション動的生成
        $rules = [];
        foreach ($form->fields as $field) {
            $rule = [];
            if ($field->required) $rule[] = 'required';
            if ($field->type === 'email') $rule[] = 'email';
            $rules[$field->label] = implode('|', $rule);
        }

        $validated = $request->validate($rules);

        // 保存
        FormSubmission::create([
            'form_id' => $form->id,
            'data' => $validated,
        ]);

        // 通知メール送信（例: 管理者宛）
        // Mail::raw("新しい送信がありました: " . json_encode($validated, JSON_UNESCAPED_UNICODE), function ($m) {
        //     $m->to('admin@example.com')->subject('フォーム送信通知');
        // });

        return response()->json([
            'status' => 'success',
            'message' => '送信が完了しました。ありがとうございました。'
        ]);
    }
}
