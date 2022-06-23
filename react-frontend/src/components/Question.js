import React from 'react'
// import Question2 from './Question2';

// const Question = ({detail}) => {
//     return (
//         <>
//             {detail.map((detail)=>(
//                 <Question2
//                     key = {detail.question_id}
//                     detail = {detail}
//                 />
//             ))}
//         </>
//     );
// };    

const displayAccordingToType = (detail) => {
    if (detail.question_type === "text"){
       return <input type={detail.question_type} placeholder="Type your asnwer here"/>
    } 
}

const Question = ({detail}) => {
    return (
        <>
            {detail.map((detail)=>(
                <div>
                    <div className="form-control">
                        <label >{"Question: " + detail.question}</label>
                        <div>
                          {displayAccordingToType(detail)}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};   

export default Question;