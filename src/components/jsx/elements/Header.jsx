import React from "react";
import iconSort from "../../../assets/icon/sort.png";
import LogoWhite from "../../../assets/images/Logo/Logo-White.png";
import Profile from "../../../assets/images/Logo/Profile.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <React.Fragment>
      <header
        id="head"
        className="bg-[#06070D] fixed top-0 left-0 w-full z-20 flex justify-between items-center"
      >
        <div className="flex justify-between gap-10 items-center w-2/3 mx-4">
          <div className="flex justify-between gap-24 items-center">
            <button>
              <img src={iconSort} alt="Menu"></img>
            </button>
            <div>
              <Link to={"/home"}>
                <img src={LogoWhite} alt="Logo" className="h-[88px]" />
              </Link>
            </div>
          </div>
          <div className="right-0 justify-items-start w-[350px] ">
            <input
              type="text"
              placeholder="Search products"
              className=" w-full border-2 border-[#585858] rounded-md py-1.5 pl-5 pr-10 bg-[#06070D] text-white text-sm"
            />
          </div>
        </div>
        <img
          src={Profile}
          alt="Profile"
          className="w-10 h-10 rounded-full mx-10"
        />
      </header>
    </React.Fragment>
  );
};

export default Header;
