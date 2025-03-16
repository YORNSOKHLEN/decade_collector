import React from "react";
import GroupMenu from "./GroupMenu";
import NavBar from "./NavBar";
import GroupSerieMovie from "./GroupSerieMovie";
import GroupProduct from "../product/GroupProduct";
import Footer from "./Footer";
const GroupElements = () => {
  return (
    <div className="w-full mt-[90px] flex">
      <GroupMenu />
      <div className="w-full ml-[60px]">
        <NavBar />
        <GroupSerieMovie />
        <GroupProduct />
        <Footer />
      </div>
    </div>
  );
};

export default GroupElements;
