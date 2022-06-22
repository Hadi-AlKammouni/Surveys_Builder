import { useState } from "react";

const AddSurvey = ({ onAddSurvey }) => {
  // Initialize Input State
  const [survey_title, setText] = useState("");


  //Add Data to Backend on Submit
  const onSubmit = (e) => {
    e.preventDefault();
    if (!survey_title) {
      alert("Please add a survey title!");
      return;
    }
    onAddSurvey({ survey_title});
    setText("");
    alert("Survey is created successfully ✅.. You can add questions now")
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Survey Title</label>
        <input
          type="text"
          placeholder={"Add Survey Title"}
          value={survey_title}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>

      <input type={"submit"} value="Add Survey" className="btn btn-block" />
    </form>
  );
};

export default AddSurvey;
