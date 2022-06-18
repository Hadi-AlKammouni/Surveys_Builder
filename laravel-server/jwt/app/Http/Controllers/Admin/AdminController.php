<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;


use Illuminate\Http\Request;
use App\Models\Survey;
use App\Models\Question;

class AdminController extends Controller
{
    // public function adminTest(){
    //     echo "admin is here";
    // }

    // Function to add a survey to the db
    public function addSurvey(Request $request){
        // echo "add";
        $survey = new Survey;
        $survey->survey_title = $request->survey_title;

        $survey->save();
        
        return response()->json([
            "status" => "Success"
        ], 200);

    }

    // Function to add a question to the db
    public function addQuestion(Request $request){
        // echo "add";
        $question = new Question;
        $question->survey_id = $request->survey_id;
        $question->question_type = $request->question_type;
        $question->question = $request->question;

        $question->save();
        
        return response()->json([
            "status" => "Success"
        ], 200);

    }
}
