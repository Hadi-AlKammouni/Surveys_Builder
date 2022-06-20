import React from 'react';
import { Link } from "react-router-dom";
import Question from './Question';


const View = ({details}) => {
    return(
        <>
            {details.map((detail)=>(
                <Question
                    key = {detail[0].question_id}
                    detail = {detail}
                />
            ))};

            <Link to="/">Go Back</Link>
        </>
    );
};

export default View;
