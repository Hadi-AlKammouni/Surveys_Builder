import React from 'react'
import Survey from './Survey'

const Surveys = ({surveys}) => {
    return (
    <>
        {surveys.map((survey) =>(
            <Survey 
                key = {survey.survey_id} 
                survey = {survey}
            />
        ))}
    </>
    );
};

export default Surveys;