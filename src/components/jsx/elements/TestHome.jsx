import React from "react";
import Header from "./Header";
import GroupMenu from "./GroupMenu";
import NavBar from "./NavBar";
import GroupSerieMovie from "./GroupSerieMovie";
import GroupProduct from "../product/GroupProduct";
import Footer from "./Footer";
import Poster from "./Poster";

const MainHome = () => {
  return (
    <>
      <Header />
      <div className="w-full flex">
        <GroupMenu />
        <div className="w-full">
          <NavBar />
          <GroupSerieMovie />
          <Poster />
          <GroupProduct />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainHome;
