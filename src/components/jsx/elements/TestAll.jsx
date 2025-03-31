// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import iconSort from "../../../assets/icon/sort.png";
// import LogoWhite from "../../../assets/images/logo/Logo-White.png";
// import Profile from "../../../assets/images/logo/Profile.jpg";
// import { ShoppingCart, Heart } from "lucide-react";

// const Menu = ({ item, isActive }) => {
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       {/* <div
//         className={`py-4 px-4 cursor-pointer ${isActive ? "bg-[#16191E]" : ""}`}
//       >
//         <Link to={item.link}>{item.icon}</Link>
//       </div> */}
//       <header className="bg-[#06070D] p-4 flex  items-center justify-between gap-4">
//         {/* Mobile Menu Button (Hidden on Large Screens) */}
//         <button aria-label="Open Menu" className="lg:hidden">
//           <img src={iconSort} alt="Menu" className="w-8 h-8" />
//         </button>

//         {/* Logo (Centered on Mobile) */}
//         <Link to="/" className="lg:mx-auto">
//           <img src={LogoWhite} alt="Decade Collector Logo" className="h-14" />
//         </Link>

//         {/* Cart & Profile (Stacked on Mobile, Inline on Desktop) */}
//         <div className="flex flex-col lg:flex-row items-center gap-3">
//           {/* Cart */}
//           <Link
//             to="/cart"
//             className="flex items-center gap-2 hover:text-[#38A93B] transition"
//           >
//             <ShoppingCart className="w-6 h-6 text-white" />
//           </Link>

//           {/* Profile */}
//           <Link to="/profile">
//             <img
//               src={Profile}
//               alt="User Profile"
//               className="w-10 h-10 rounded-full border-2 border-gray-500 hover:border-[#38A93B] transition"
//             />
//           </Link>
//         </div>
//       </header>
//       <div className="p-4">
//         <button
//           onClick={() => setShow(!show)}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//         >
//           {show ? "Hide" : "Show"}
//         </button>

//         <div
//           className={`mt-4 p-4 border rounded-lg shadow-md bg-gray-100 transition-all duration-500 ease-in-out ${
//             show
//               ? "max-h-screen opacity-100"
//               : "max-h-0 opacity-0 overflow-hidden"
//           }`}
//         >
//           {show && <div>This is the content to show and hide.</div>}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Menu;

import { useState } from "react";
import { Menu, X, Search, Heart, User } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <header className="sticky top- left-0 w-full shadow-md p-4 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">My App</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className=" sticky inset-0 bg-[#06070D] w-full shadow-lg p-6 overflow-y-auto">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4"
          >
            <X size={32} />
          </button>

          <div className="flex items-center border-b pb-2 mb-4">
            <Search size={20} className="mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 border rounded"
            />
          </div>

          <nav className="space-y-4 text-lg">
            {["Kamen Rider", "Super Sentai", "Ultraman", "Anime"].map(
              (item) => (
                <div key={item}>
                  <button
                    className="flex justify-between w-full py-2 border-b"
                    onClick={() => toggleExpand(item)}
                  >
                    {item} <span>{expanded[item] ? "-" : "+"}</span>
                  </button>
                  {expanded[item] && (
                    <div className="pl-4 py-2 text-sm text-gray-600">
                      Submenu Items
                    </div>
                  )}
                </div>
              )
            )}
            {["Power Rangers", "Precure", "S.H. Figuarts", "New Preorders"].map(
              (item) => (
                <a key={item} href="#" className="block py-2 border-b">
                  {item}
                </a>
              )
            )}
          </nav>

          <div className="mt-6 flex flex-col space-y-3">
            <button className="flex items-center justify-center p-3 border rounded">
              <Heart size={20} className="mr-2" /> Favorites
            </button>
            <button className="flex items-center justify-center p-3 bg-blue-500 text-white rounded">
              <User size={20} className="mr-2" /> Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
