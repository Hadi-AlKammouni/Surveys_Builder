import React from 'react';

const Question = ({detail}) => {
    return (
        <div className="form-control">
            <label >{"Question: " + detail.question}</label>
            <input type={detail.question_type} />
        </div>
    );
};    

export default Question;