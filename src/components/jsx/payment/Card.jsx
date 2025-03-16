import React from "react";
import Header from "../elements/Header";
import GroupMenu from "../elements/GroupMenu";
import NavBar from "../elements/NavBar";
import Footer from "../elements/Footer";
import GroupSerieMovie from "../elements/GroupSerieMovie";
import GroupCard from "./GroupCard";

const Card = () => {
  return (
    <>
      <Header />
      <div className="w-full mt-[90px] flex">
        <GroupMenu />
        <div className="w-full ml-[60px]">
          <NavBar />
          <GroupSerieMovie />
          <GroupCard />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Card;
