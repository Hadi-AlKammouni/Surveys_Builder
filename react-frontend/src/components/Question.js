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
    }
}

//Function to check how many option there is for every question of radio type and display them
const displayRadio = (detail) => {
    console.log("hi")
    if(detail.option1 === null){
        return <p>"No options availabe"</p>
    }
    else if(detail.option2 === null){
        return <div>
        <input type={detail.question_type} id={detail.option1} value={detail.option1} name="radio"/>
        <label for={detail.option1}>{detail.option1}</label><br></br>
        <p>"No other options"</p>
    </div> 
    }
    else if(detail.option3 === null){
        return <div>
        <input type={detail.question_type} id={detail.option1} value={detail.option1} name="radio"/>
        <label for={detail.option1}>{detail.option1}</label><br></br>
        <input type={detail.question_type} id={detail.option2} value={detail.option2} name="radio"/>
        <label for={detail.option2}>{detail.option2}</label><br></br>
        <p>"No other options"</p>
    </div> 
    } 
    return <div>
        <input type={detail.question_type} id={detail.option1} value={detail.option1} name="radio"/>
        <label for={detail.option1}>{detail.option1}</label><br></br>
        <input type={detail.question_type} id={detail.option2} value={detail.option2} name="radio"/>
        <label for={detail.option2}>{detail.option2}</label><br></br>
        <input type={detail.question_type} id={detail.option3} value={detail.option3} name="radio"/>
        <label for={detail.option3}>{detail.option3}</label><br></br>
    </div>
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