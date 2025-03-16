import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Menu from "./Menu";

const GroupMenu = () => {
  const location = useLocation();
  const menuIcons = [
    {
      id: "home-icon",
      link: "/home",
      icon: <i className="fas fa-home text-[24px] text-[#38A93B]"></i>,
    },
    {
      id: "heart-icon",
      link: "/fav",
      icon: <i className="fas fa-heart text-[24px] text-[#38A93B]"></i>,
    },
    {
      id: "shop-icon",
      link: "/card",
      icon: (
        <i className="fas fa-basket-shopping text-[24px] text-[#38A93B]"></i>
      ),
    },
    {
      id: "about-icon",
      link: "/about",
      icon: <i className="fas fa-info-circle text-[24px] text-[#38A93B]"></i>,
    },
  ];
  const getActiveItem = () => {
    if (location.pathname === "/home") {
      return "home-icon";
    } else if (location.pathname === "/card") {
      return "shop-icon";
    } else if (location.pathname === "/fav") {
      return "heart-icon";
    } else if (location.pathname === "/about") {
      return "about-icon";
    }
    //home page
    return "home-icon";
  };
  const activeItem = getActiveItem();

  return (
    <>
      <div
        id="menu"
        className="fixed bg-[#06070D] w-[60px] h-screen border-r-2 border-gray-400"
      >
        {menuIcons.map((item) => (
          <Menu
            key={item.id}
            item={item}
            isActive={item.id === activeItem}
            onClick={() => {}}
          />
        ))}
      </div>
    </>
  );
};

export default GroupMenu;
