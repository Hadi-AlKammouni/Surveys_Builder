import React from 'react'
import { Link } from "react-router-dom";

const Survey = ({survey, display}) => {
    return (
        <div className={'survey'} onClick={()=>display(survey.survey_id)} >
            <Link to="/display">hoho</Link>
            <h1 >{"Survey title: " + survey.survey_title}</h1>
            <p>{"Survey id: " + survey.survey_id}</p>
            <p>{"Survey created at: " + survey.created_at}</p>
            {/* <p>{console.log(survey.questions.length)}</p> */}
            {/* <h4>{survey.questions[0].question}</h4> */}
            {/* <input type={survey.questions[0].question_type}/> */}
            
        </div>
    );
};    

export default Survey;