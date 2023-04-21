import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainScreen from "./Pages/MainScreen";
import SidebarContent from "./Pages/SidebarContent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<MainScreen />} />
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
