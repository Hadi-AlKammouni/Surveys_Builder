import React from 'react'

const Survey = ({survey}) => {
    return (
    <div className={'survey'}>
        <h1>{"Survey title: " + survey.survey_title}</h1>
        <p>{"Survey created at: " + survey.created_at}</p>
        <p>{console.log(survey.questions.length)}</p>
        <h4>{survey.questions[0].question}</h4>
        <input type={survey.questions[0].question_type}/>
    </div>
    );
};    

export default Survey;