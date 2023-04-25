import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import MainScreen from "./Pages/MainScreen";
import SidebarContent from "./Pages/SidebarContent";
import SignIn from "./Components/SignIn/SignIn";
import Home from "./Components/Homepage/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* <Route path="/" exact element={<MainScreen />} /> */}
        <Route path="/signin" exact element={<SignIn />} />
        <Route
          path="/dashboard"
          element={<SidebarContent widget="Dashboard" />}
        />
        <Route path="/price" element={<SidebarContent widget="Price" />} />
        <Route
          path="/roomtype"
          element={<SidebarContent widget="RoomType" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
