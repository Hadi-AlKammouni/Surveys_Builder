import React from 'react'
import Survey from './Survey'

const Surveys = ({surveys, display}) => {
    return (
    <>
        {surveys.map((survey) =>(
            <Survey 
                key = {survey.survey_id} 
                survey = {survey}
                display = {display}
            />
        ))}
    </>
    );
};

export default Surveys;