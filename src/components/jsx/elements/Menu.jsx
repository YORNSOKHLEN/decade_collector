import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ item, isActive }) => {
  return (
    <div
      className={`py-4 px-4 cursor-pointer ${isActive ? "bg-[#16191E]" : ""}`}
    >
      <Link to={item.link}>{item.icon}</Link>
    </div>
  );
};

export default Menu;
