import { useState } from "react";

const AddQuestion = ({ onAddQuestion }) => {
  // Initialize Input State
  const [survey_id, setId] = useState("");
  const [question_type, setQuestionType] = useState("");
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");


  //Add Data to Backend on Submit
  const onSubmit = (e) => {
    e.preventDefault();
    if (!survey_id || !question_type || !question) {
      alert("Please fill first three fields!");
      return;
    }
    onAddQuestion({ survey_id, question_type, question});
    setId("");
    setQuestionType("");
    setQuestion("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Survey ID</label>
        <input
          type="text"
          placeholder={"Insert Survey ID"}
          value={survey_id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
      </div>

      <div className="form-control">
        <label>Question Type</label>
        <input
          type="text"
          placeholder={"Insert question type [radio,text,checkbox]"}
          value={question_type}
          onChange={(e) => {
            setQuestionType(e.target.value);
          }}
        />
      </div>

      <div className="form-control">
        <label>The Question</label>
        <input
          type="text"
          placeholder={"Insert A Question"}
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        />
      </div>

      <h2>Filling the following fields is optional / They will be taken into consideration only if the question type is radio or checkbox</h2>
      <div className="form-control">
        <label>Option 1</label>
        <input
          type="text"
          placeholder={"Insert Option 1"}
          value={option1}
          onChange={(e) => {
            setOption1(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label>Option 2</label>
        <input
          type="text"
          placeholder={"Insert Option 2"}
          value={option2}
          onChange={(e) => {
            setOption2(e.target.value);
          }}
        />
      </div><div className="form-control">
        <label>Option 3</label>
        <input
          type="text"
          placeholder={"Insert Option 3"}
          value={option3}
          onChange={(e) => {
            setOption3(e.target.value);
          }}
        />
      </div>
      <input type={"submit"} value="Add Question" className="btn btn-block" />
    </form>
  );
};

export default AddQuestion;
