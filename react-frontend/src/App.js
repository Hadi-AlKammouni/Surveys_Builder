import { useState, useEffect } from "react";

function App() {

  // Initialize State
  const [surveys, setSurveys] = useState([]); 

  // Initialize all surveys into state from backend at component load
  useEffect(() => {
    const getSurveys = async () => {
      const surveysFromServer = await fetchSurveys();
      console.log(surveysFromServer);
      setSurveys(surveysFromServer);
    };
    getSurveys();
    
  }, []);

  //Fetch All surveys from Backend
  const fetchSurveys = async () => {
      const res = await fetch("http://127.0.0.1:8000/api/v1/user/get_surveys_questions");
      const data = await res.json();
      return data;
    }
  
  return <div>App</div>;

};

export default App;
