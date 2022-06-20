import React from 'react';
import { Link } from "react-router-dom";

const Survey = ({survey, display}) => {
    return (
        <div className={'survey'} onClick={()=>display(survey.survey_id)}>
            <h1 >{"Survey title: " + survey.survey_title}</h1>
            <p>{"Survey id: " + survey.survey_id}</p>
            <p>{"Survey created at: " + survey.created_at}</p>
            <Link to="/view">View Survey Questions</Link>
        </div>
    );
};    

export default Survey;