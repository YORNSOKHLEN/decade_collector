import React from "react";
import iconSort from "../../../assets/icon/sort.png";
import LogoWhite from "../../../assets/images/logo/Logo-White.png";
import Profile from "../../../assets/images/logo/Profile.jpg";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
const Head = () => {
  return (
    <>
      <div
        id="head"
        className=" bg-[#06070D] left-0 w-full  flex justify-between items-center "
      >
        <div className="flex justify-between gap-10 items-center w-1/2 mx-4 ">
          <div className="flex justify-between gap-24 items-center">
            <div className=" hidden">
              <button>
                <img src={iconSort} alt="Menu"></img>
              </button>
            </div>
            <div>
              <Link to={"/"}>
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
        <div className="items-center flex gap-5">
          <div className=" items-center">
            <Link>
              <Heart className="w-6 h-6 text-white hover:text-[#38A93B]" />
            </Link>
          </div>
          <div className="flex gap-3 items-center border-r-2 pr-4 ">
            <Link
              to={"/Cart"}
              className="flex gap-3 items-center hover:text-[#38A93B]"
            >
              <h2 className="text-xl uppercase ">Cart</h2>
              <ShoppingCart className="w-6 h-6 text-white " />
            </Link>
          </div>
          <div>
            <img
              src={Profile}
              alt="Profile"
              className="w-10 h-10 rounded-full mx-10 border-2 border-gray-500"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
