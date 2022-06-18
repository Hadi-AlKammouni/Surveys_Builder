<?php

namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Models\Survey;

class UserController extends Controller
{
    public function userTest(){
        echo "user is here";
    }

    public function getSurveys(){

        $surveys = Survey::with("questions") -> get();

        return response()->json([
            "status" => "Success",
            "items" => $surveys
        ], 200);
    }
    
}
