import { useState } from "react";

const Login = ({ onLogin }) => {
  // Initialize Input State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  //Add Data to Backend on Submit
  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill both fields!");
      return;
    }
    onLogin({ email, password});
    setEmail("");
    setPassword("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Email</label>
        <input
          type={"email"}
          placeholder={"Insert Email"}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className="form-control">
        <label>Password</label>
        <input
          type={"password"}
          placeholder={"Insert Password"}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      
      <input type={"submit"} value="Login" className="btn btn-block" />
    </form>
  );
};

export default Login;
