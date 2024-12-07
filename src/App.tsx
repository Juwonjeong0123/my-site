import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import RandomNumberPage from "./Pages/RandomNumber/RandomNumber";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random-number" element={<RandomNumberPage />} />
      </Routes>
    </Router>
  );
};

export default App;
