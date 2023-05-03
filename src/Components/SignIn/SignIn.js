import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import axios from "axios";

function SignIn() {
  const [SignInName, setSignInName] = useState("");
  const [SignInPassword, setSignInPassword] = useState("");

  const navigate = useNavigate();

  const signin = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3002/signin", {
      SignInName,
      SignInPassword,
    });

    if (response.status === 200) {
      navigate('/dashboard')
    }

    
  };

  return (
    <div className="SignIn__Container">
      <h1>Sign In</h1>
      <label>Name</label>
      <input
        type="text"
        value={SignInName}
        onChange={(e) => setSignInName(e.target.value)}
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
        value={SignInPassword}
        onChange={(e) => setSignInPassword(e.target.value)}
        placeholder="Password *"
        style={{
          backgroundColor: "white",
          padding: "10px",
          width: "20rem",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      />
      <div className="SignIn__Btn" onClick={signin}>
        Sign In
      </div>
    </div>
  );
}

export default SignIn;
