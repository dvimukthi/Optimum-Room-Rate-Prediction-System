import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Header from "../Components/Header/Header";


const MainScreen = () => {
  return (
    <div  className="Sidebar__Container">
      <Header />
      <Sidebar />
    </div>
  );
};

export default MainScreen;
