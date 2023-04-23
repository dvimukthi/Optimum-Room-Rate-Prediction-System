import React from "react";
import "./Header.css";
import LOGO from "../Assets/ORRP.png";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  // link home page
  const loadDashboard = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="Header__Left">
        {/* Add logo */}
        <img
          src={LOGO}
          alt=""
          onClick={loadDashboard}
          width="50"
          height="50"
          style={{
            marginLeft: "10px",
            alignSelf: "center",
          }}
        />
        <h2>ORRP-AI</h2>
      </div>
      {/* <div className="Header__Profile">
      </div> */}
    </div>
  );
};

export default Header;
