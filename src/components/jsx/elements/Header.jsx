import React from "react";
import Head from "./Head";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="sticky top-0 px-10 z-20 bg-[#06070D]">
      <Head />
      <NavBar />
    </header>
  );
};

export default Header;
