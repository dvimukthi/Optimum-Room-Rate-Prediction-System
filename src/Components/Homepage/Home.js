import React from "react";
import "./Home.css";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  // SignIn Route
  const loadSignIn = () => {
    navigate("/signin");
  };

  // SignUp Route
  const loadSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="Home__Container">
      <div className="Homepage__Container">
        <h1>
          Optimum Room Rate Prediction <br />
          System <br />
        </h1>
        <div className="Home__Btn">
          <div className="Home__SignIn__Btn" onClick={loadSignIn}>
            SignIn
          </div>
          <div className="Home__SignUp__Btn" onClick={loadSignUp}>
            SignUp
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
