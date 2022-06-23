import React from 'react';

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
    }else if (detail.question_type === "radio"){
        return displayRadio(detail)
    }else if (detail.question_type === "checkbox"){
        return <div>
            <input type={detail.question_type} id={detail.question_type} value={detail.option1}/>
            <label for={detail.question_type}>{detail.option1}</label><br/>
        </div>
    }
    
}

//Function to check how many options there are for every question of radio type and display them
const displayRadio = (detail) => {
    if(detail.option1 === null){
        return <p>"No options availabe"</p>
    }
    else if(detail.option2 === null){
        return <div>
        <input type={detail.question_type} id={detail.option1} value={detail.option1} name="radio"/>
        <label for={detail.option1}>{detail.option1}</label><br/>
        <p>"No other options"</p>
    </div> 
    }
    else if(detail.option3 === null){
        return <div>
        <input type={detail.question_type} id={detail.option1} value={detail.option1} name="radio"/>
        <label for={detail.option1}>{detail.option1}</label><br/>
        <input type={detail.question_type} id={detail.option2} value={detail.option2} name="radio"/>
        <label for={detail.option2}>{detail.option2}</label><br/>
    </div> 
    } 
    return <div>
        <input type={detail.question_type} id={detail.option1} value={detail.option1} name="radio"/>
        <label for={detail.option1}>{detail.option1}</label><br/>
        <input type={detail.question_type} id={detail.option2} value={detail.option2} name="radio"/>
        <label for={detail.option2}>{detail.option2}</label><br/>
        <input type={detail.question_type} id={detail.option3} value={detail.option3} name="radio"/>
        <label for={detail.option3}>{detail.option3}</label><br/>
    </div>
}

const Question = ({detail}) => {
    return (
        <>
            {detail.map((detail)=>(
                <div>
                    <div className="form-control">
                        <label ><b>{"Question: " + detail.question}</b></label>
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