import { useState, useEffect } from "react";
import Surveys from "./components/Surveys";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Login from "./components/Login";
import AddSurvey from "./components/AddSurvey";
import AddQuestion from "./components/AddQuestion";
import Display from "./components/Display";

function App() {

  // Initialize State
  const [surveys, setSurveys] = useState([]); 
  const [questions, setQuestions] = useState([]); 
  const [showLogin, setShowLogin] = useState(false);
  const [showAddSurvey, setShowAddSurvey] = useState(false);
  const [showAddQuestion, setShowAddQuestion] = useState(false);

  // Initialize all surveys into state from backend at component load
  useEffect(() => {
    const getSurveys = async () => {
      const surveysFromServer = await fetchSurveys();
      console.log(surveysFromServer.surveys);
      setSurveys(surveysFromServer.surveys);
    };
    getSurveys();
    
  }, []);

  //Fetch All surveys from Backend
  const fetchSurveys = async () => {
      const res = await fetch("http://127.0.0.1:8000/api/v1/user/get_surveys_questions");
      const data = await res.json();
      // console.log(data);
      return data;
      
    }
  
  //Calling login api to be used by the admin inorder to add to the db
  const login = async (info) => {
    const res = await fetch("http://localhost:8000/api/login",{
      method: "POST",
      headers:{
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(info)
    });
    const data = await res.json();
    // console.log(data);
    localStorage.setItem("access_token",data.access_token)
    return data;
  };

  //Adding a survey
  const addSurvey = async (survey) => {
    const res = await fetch("http://127.0.0.1:8000/api/v1/admin/add_survey", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("access_token")
      },
      body: JSON.stringify(survey),
    });
    const data = await res.json();
    setSurveys([...surveys, data]);
  };

  //Adding a question
  const addQuestion = async (question) => {
    const res = await fetch("http://127.0.0.1:8000/api/v1/admin/add_question", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("access_token")
      },
      body: JSON.stringify(question),
    });
    const data = await res.json();
    setQuestions([...questions, data]);
  };

  //Fetch questions of a survey from Backend
  const DisplaySurvey = async (survey_id) => {
    const res = await fetch("http://127.0.0.1:8000/api/v1/user/get_questions_options/"+survey_id);
    const data = await res.json();
    console.log(data.questions);
    return data.questions;
  }
  
  return (
    <BrowserRouter>
      <div className="container">
        <Header
        title={"Survey Manager"}
        onLogin={() => {
          setShowLogin(!showLogin);
        }}
        onAddSurvey={() => {
          setShowAddSurvey(!showAddSurvey);
        }}
        onAddQuestion={() => {
          setShowAddQuestion(!showAddQuestion);
        }}
        showAddS={showAddSurvey}
        showAddL={showLogin}
        showAddQ={showAddQuestion}
        />
        <Routes>
          <Route path="/" element={
            <>
              {showLogin && <Login onLogin={login} />}
              {showAddSurvey && <AddSurvey onAddSurvey={addSurvey} />}
              {showAddQuestion && <AddQuestion onAddQuestion={addQuestion} />}
              {surveys.length > 0 ? (
                <Surveys surveys={surveys} display={DisplaySurvey}/>
              ) : (
                "No surveys found"
              )}
            </>}
          ></Route>
          <Route path="/display" element={<Display/>}></Route> 
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </div>
  </BrowserRouter>
  );
      };


export default App;
