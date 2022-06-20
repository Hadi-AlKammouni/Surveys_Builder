import { useState, useEffect } from "react";
import Surveys from "./components/Surveys";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";

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
  
  return (
    <BrowserRouter>
      <div className="container">
        <Header
        onAdd={() => {
          setShowAddSurvey(!showAddSurvey);
        }}
        showAdd={showAddSurvey}/>
        <Routes>
          <Route path="/" element={
            <>
              {surveys.length > 0 ? (
                <Surveys surveys={surveys} />
              ) : (
                "No surveys found"
              )}
            </>}
          ></Route> 
          <Route path="/about" element={<About />}></Route>
        </Routes>
        
      </div>
  </BrowserRouter>
  );
      };


export default App;
