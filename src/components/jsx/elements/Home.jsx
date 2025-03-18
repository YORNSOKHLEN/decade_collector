import React from "react";
import Header from "./Header";
import GroupSerieMovie from "./GroupSerieMovie";
import Poster from "./Poster";
import GroupProduct from "../product/GroupProduct";
import Footer from "./Footer";
import Service from "./Service";

const Home = () => {
  return (
    <>
      <Header />
      <GroupSerieMovie />
      <Poster />
      <GroupProduct />
      <Service />
      <Footer />
    </>
  );
};

export default Home;
