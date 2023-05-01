import React, { useState } from "react";
import "./SignIn.css";
import axios from "axios";

function SignIn() {
  const [SignInName, setSignInName] = useState("");
  const [SignInPassword, setSignInPassword] = useState("");

  const signin = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3001/signin", {
      SignInName,
      SignInPassword,
    });
    console.log(response);
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
