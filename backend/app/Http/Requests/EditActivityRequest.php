<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EditActivityRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'description' => 'max:255',
            'process_definition_id' => 'required|numeric|exists:process_definitions,id',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'A name is required',
            'description.max'=> 'The description is too long. The max is 255 characters',
            'process_definition_id.required'  => 'You need to specify a process definition',
            'process_definition_id.numeric'  => 'The process definition is not valid',
            'process_definition_id.exists'  => 'The process definition does not exist',
        ];
    }
}
