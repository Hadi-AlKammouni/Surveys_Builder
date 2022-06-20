import React from 'react'
import Question2 from './Question2';

const Question = ({detail}) => {
    return (
        <>
            {detail.map((detail)=>(
                <Question2
                    key = {detail.question_id}
                    detail = {detail}
                />
            ))}
        </>
    );
};    

export default Question;