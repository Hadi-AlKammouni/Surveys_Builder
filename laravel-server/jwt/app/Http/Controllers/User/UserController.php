<?php

namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Models\Survey;
use App\Models\Question;
use App\Models\Response;

class UserController extends Controller
{
    public function userTest(){
        echo "user is here";
    }

    public function getSurveys($survey_id = null){
        if ($survey_id != null){
            $surveys = Survey::with("questions") -> where('survey_id','=',$survey_id) -> get();
        }else{
            $surveys = Survey::with("questions") -> get();
        }
        return response()->json([
            "status" => "Success",
            "surveys" => $surveys
        ], 200);
    }

    public function getQuestions($survey_id = null){
        if ($survey_id != null){
            $questions = Question::with("options") -> where('survey_id','=',$survey_id) -> get();
        }else{
            $questions = Question::with("options") ->  get();
        }
        return response()->json([
            "status" => "Success",
            "questions" => $questions
        ], 200);
    }

    // Function to add a survey to the db
    public function answerQuestion(Request $request){
        $response = new Response;
        $response->survey_id = $request->survey_id;
        $response->question_id = $request->question_id;
        $response->response = $request->response;

        $response->save();
        
        return response()->json([
            "status" => "Success"
        ], 200);

    }
    
}
