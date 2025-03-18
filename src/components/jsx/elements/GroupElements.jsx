import React from "react";
import GroupMenu from "./GroupMenu";
import NavBar from "./NavBar";
import GroupSerieMovie from "./GroupSerieMovie";
import GroupProduct from "../product/GroupProduct";
import Footer from "./Footer";
const GroupElements = () => {
  return (
    <>
      <div>
        <GroupMenu />
        <NavBar />
        <GroupSerieMovie />
        <GroupProduct />
        <Footer />
      </div>
    </>
  );
};

export default GroupElements;
