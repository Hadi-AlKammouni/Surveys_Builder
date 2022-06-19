import React from 'react'

const Survey = ({survey}) => {
    return (
    <div className={'survey'}>
        <h3>{survey.survey_title}</h3>
        <p>{survey.created_at}</p>
    </div>
    );
};    

export default Survey;