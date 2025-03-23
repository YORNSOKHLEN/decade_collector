import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/jsx/elements/Header";
import Footer from "./components/jsx/elements/Footer";
import ScrollToTop from "./components/jsx/elements/ScrollToTop";
import Home from "./components/jsx/elements/Home";
import Cart from "./components/jsx/payment/Cart";
import Shopping from "./components/jsx/payment/shopping";
import Decade from "./components/jsx/decade/Decade";
import KamenRider from "./components/jsx/elements/KamenRider";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/kamen-rider" element={<KamenRider />} />
        <Route path="/detail-decade" element={<Decade />} />
        <Route path="/shopping" element={<Shopping />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
