import { useState, useEffect } from "react";
import Surveys from "./components/Surveys";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Login from "./components/Login";

function App() {

  // Initialize State
  const [surveys, setSurveys] = useState([]); 
  const [showAddSurvey, setShowAddSurvey] = useState(false);

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
      console.log(data);
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

  return (
    <BrowserRouter>
      <div className="container">
        <Header
        title={"Survey Manager"}
        onAdd={() => {
          setShowAddSurvey(!showAddSurvey);
        }}
        showAdd={showAddSurvey}/>
        <Routes>
          <Route path="/" element={
            <>
              {showAddSurvey && <Login onAdd={login} />}
              {surveys.length > 0 ? (
                <Surveys surveys={surveys} />
              ) : (
                "No surveys found"
              )}
            </>}
          ></Route> 
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </div>
  </BrowserRouter>
  );
      };


export default App;
