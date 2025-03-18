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
      <GroupSerieMovie />
      <GroupCard />
      <Footer />
    </>
  );
};

export default Card;
