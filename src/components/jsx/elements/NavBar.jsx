import React from "react";
import { useLocation } from "react-router-dom";
const NavBar = () => {
  const location = useLocation();
  const getActiveMenu = () => {
    if (location.pathname === "/home") {
      return "Home";
    } else if (location.pathname === "/fav") {
      return "My Favorite";
    } else if (location.pathname === "/card") {
      return "My Card";
    } else if (location.pathname === "/about") {
      return "About";
    } else if (location.pathname === "/profile") {
      return "Profile";
    } else if (location.pathname === "/kamen-rider") {
      return "Kamen Rider";
    } else if (location.pathname === "/kamen-rider-gavv") {
      return "Kamen Rider Gavv";
    } else if (location.pathname === "/kamen-rider-gotchard") {
      return "Kamen Rider Gotchard";
    } else if (location.pathname === "/kamen-rider-geats") {
      return "Kamen Rider Geats";
    } else if (location.pathname === "/kamen-rider-rivice") {
      return "Kamen Rider Rivice";
    } else if (location.pathname === "/kamen-rider-saber") {
      return "Kamen Rider Saber";
    } else if (location.pathname === "/kamen-rider-zero-one") {
      return "Kamen Rider Zero-One";
    } else if (location.pathname === "/kamen-rider-zi-o") {
      return "Kamen Rider Zi-o";
    } else if (location.pathname === "/kamen-rider-build") {
      return "Kamen Rider Build";
    } else if (location.pathname === "/detail-decade") {
      return "Kamen Rider Decade";
    }
    //home page
    return "Home";
  };
  const activeMenu = getActiveMenu();
  return (
    <div className="bg-[#16191E] top-0 py-[13.5px]">
      <h1 className="mx-7 text-2xl uppercase">{activeMenu}</h1>
    </div>
  );
};

export default NavBar;
