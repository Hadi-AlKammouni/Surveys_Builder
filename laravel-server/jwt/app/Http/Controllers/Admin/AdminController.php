<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;


use Illuminate\Http\Request;
use App\Models\Survey;

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
}
