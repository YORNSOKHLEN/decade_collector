import React from "react";
import Header from "./components/jsx/elements/Header";
import GroupMenu from "./components/jsx/elements/GroupMenu";
import NavBar from "./components/jsx/elements/NavBar";
import GroupSerieMovie from "./components/jsx/elements/GroupSerieMovie";
import GroupProduct from "./components/jsx/product/GroupProduct";
import Footer from "./components/jsx/elements/Footer";
import Poster from "./components/jsx/elements/Poster";

const MainHome = () => {
  return (
    <>
      <Header />
      <div className="w-full mt-[90px] flex">
        <GroupMenu />
        <div className="w-full ml-[60px]">
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
