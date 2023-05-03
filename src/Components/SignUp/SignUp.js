import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";

function SignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const signup = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3002/signup", {
      name,
      password,
    });
    console.log(response);
  };

  return (
    <div className="SignUp__Container">
      <h1>Sign Up</h1>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
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
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
        Sign Up
      </div>
    </div>
  );
}

export default SignUp;
