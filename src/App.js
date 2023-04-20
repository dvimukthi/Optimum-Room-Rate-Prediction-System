import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainScreen from "./Pages/MainScreen";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<MainScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
