import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/jsx/payment/Card";
import MainHome from "./MainHome";
import GroupSh from "./components/jsx/payment/GroupSh";
import DecadeApp from "./components/jsx/decade/DecadeApp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/home" element={<MainHome />} />
        <Route path="/card" element={<Card />} />
        <Route path="/detail-decade" element={<DecadeApp />} />
        <Route path="/shopping" element={<GroupSh />} />
      </Routes>
    </Router>
  );
};
export default App;
