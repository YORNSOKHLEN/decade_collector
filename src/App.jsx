import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/jsx/payment/Cart";
import Home from "./components/jsx/elements/Home";
import GroupSh from "./components/jsx/payment/GroupSh";
import DecadeApp from "./components/jsx/decade/DecadeApp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail-decade" element={<DecadeApp />} />
        <Route path="/shopping" element={<GroupSh />} />
      </Routes>
    </Router>
  );
};
export default App;
