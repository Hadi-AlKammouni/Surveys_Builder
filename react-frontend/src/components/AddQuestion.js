import { useState } from "react";

const AddQuestion = ({ onAddQuestion }) => {
  // Initialize Input State
  const [survey_id, setId] = useState("");
  const [question_type, setQuestionType] = useState("");
  const [question, setQuestion] = useState("");


  //Add Data to Backend on Submit
  const onSubmit = (e) => {
    e.preventDefault();
    if (!survey_id || !question_type || !question) {
      alert("Please fill all fields!");
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
        <label>Surevey ID</label>
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

      <input type={"submit"} value="Add Question" className="btn btn-block" />
    </form>
  );
};

export default AddQuestion;
