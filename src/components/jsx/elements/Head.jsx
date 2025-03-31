import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Menu, X } from "lucide-react";
import LogoWhite from "../../../assets/images/logo/Logo-White.png";
import Profile from "../../../assets/images/logo/Profile.jpg";

const Head = ({ setIsOpen, isOpen }) => {
  return (
    <div className="bg-[#06070D] flex justify-between items-center py-2 px-4 lg:px-5">
      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 lg:hidden">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Logo */}
      <div>
        <Link to="/" className="lg:mx-auto">
          <img
            src={LogoWhite}
            alt="Logo"
            className="h-10 md:h-12 lg:h-16 xl:h-16 py-1 md:py-2"
          />
        </Link>
      </div>

      {/* Desktop Search Bar */}
      <div className="hidden lg:block w-[350px]">
        <input
          type="text"
          placeholder="Search products"
          className="w-full border-2 border-[#585858] rounded-md py-1.5 px-5 bg-[#06070D] text-white text-sm"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-3">
        <Link to="/favorites" className="hidden lg:block">
          <Heart className="w-5 h-5 text-white hover:text-[#38A93B]" />
        </Link>
        <Link
          to="/cart"
          className="flex items-center gap-2 hover:text-[#38A93B]"
        >
          <ShoppingCart className="w-6 h-6 text-white" />
        </Link>
        <img
          src={Profile}
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-gray-500"
        />
      </div>
    </div>
  );
};

export default Head;
