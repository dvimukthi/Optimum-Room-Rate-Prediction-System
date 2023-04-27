import React, { useState } from "react";
import "./SignUp.css";
import { Axios } from "axios";

function SignUp() {
  const [SignUpName, setSignUpName] = useState("");
  const [SignUpPassword, setSignUpPassword] = useState("");

  const signup = () => {
    Axios.post("http://localhost:3001/signup", {
      name: SignUpName,
      password: SignUpPassword,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="SignUp__Container">
      <h1>Sign Up</h1>
      <label>Name</label>
      <input
        type="text"
        onChange={(e) => {
          setSignUpName(e.target.value);
        }}
        placeholder="Name *"
        style={{
          backgroundColor: "white",
          padding: "10px",
          width: "20rem",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      />
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => {
          setSignUpPassword(e.target.value);
        }}
        placeholder="Password *"
        style={{
          backgroundColor: "white",
          padding: "10px",
          width: "20rem",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      />
      <div className="SignUp__Btn" onClick={signup}>
        SIGNUP
      </div>
    </div>
  );
}

export default SignUp;
