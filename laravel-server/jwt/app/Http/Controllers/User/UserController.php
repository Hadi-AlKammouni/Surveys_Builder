<?php

namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Models\Survey;
use App\Models\Question;

class UserController extends Controller
{
    public function userTest(){
        echo "user is here";
    }

    public function getSurveys(){

        $surveys = Survey::with("questions") -> get();

        return response()->json([
            "status" => "Success",
            "surveys" => $surveys
        ], 200);
    }

    public function getQuestions(){

        $questions = Question::with("options") -> get();

        return response()->json([
            "status" => "Success",
            "questions" => $questions
        ], 200);
    }
    
}
