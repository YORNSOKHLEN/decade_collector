// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   return (
//     <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2.5">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="flex items-center space-x-3 rtl:space-x-reverse"
//         >
//           <img
//             src="https://flowbite.com/docs/images/logo.svg"
//             className="h-8"
//             alt="Flowbite Logo"
//           />
//           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//             Flowbite
//           </span>
//         </Link>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="inline-flex items-center p-2 ms-3 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-expanded={isMenuOpen}
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="w-5 h-5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 17 14"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>

//         {/* Navigation Menu */}
//         <div
//           className={`${
//             isMenuOpen ? "block" : "hidden"
//           } w-full md:block md:w-auto`}
//           id="navbar-dropdown"
//         >
//           <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:text-sm md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:space-x-8 md:rtl:space-x-reverse">
//             <li>
//               <Link
//                 to="/"
//                 className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
//               >
//                 Home
//               </Link>
//             </li>

//             {/* Dropdown Menu */}
//             <li className="relative">
//               <button
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
//               >
//                 Dropdown
//                 <svg
//                   className="w-2.5 h-2.5 ms-3"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 10 6"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="m1 1 4 4 4-4"
//                   />
//                 </svg>
//               </button>

//               {/* Dropdown Content */}
//               {isDropdownOpen && (
//                 <div className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
//                   <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                     <li>
//                       <Link
//                         to="/dashboard"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Dashboard
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/settings"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Settings
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/earnings"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Earnings
//                       </Link>
//                     </li>
//                   </ul>
//                   <div className="py-1">
//                     <Link
//                       to="/logout"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Sign out
//                     </Link>
//                   </div>
//                 </div>
//               )}
//             </li>
//             <li>
//               {/* new             */}
//               <button
//                 id="dropdownDefaultButton"
//                 data-dropdown-toggle="dropdown"
//                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                 type="button"
//               >
//                 Dropdown button{" "}
//                 <svg
//                   className="w-2.5 h-2.5 ms-3"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 10 6"
//                 >
//                   <path
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="m1 1 4 4 4-4"
//                   />
//                 </svg>
//               </button>

//               <div
//                 id="dropdown"
//                 className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
//               >
//                 <ul
//                   className="py-2 text-sm text-gray-700 dark:text-gray-200"
//                   aria-labelledby="dropdownDefaultButton"
//                 >
//                   <li>
//                     <a
//                       href="#"
//                       className="  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       Dashboard
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       Settings
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       Earnings
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       Sign out
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </li>
//             <li>
//               <Link
//                 to="/services"
//                 className="block py-2 px-3 text-gray-700 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/pricing"
//                 className="block py-2 px-3 text-gray-700 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 Pricing
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact"
//                 className="block py-2 px-3 text-gray-700 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import SerieMovie from "./SerieMovie";
// import DataTitle from "../../js/dataTitle";
// import React from "react";
// import { Link } from "react-router-dom";

// const testflow = ({ titleSerie, link, movies }) => {
//   return (
//     <>
//       <div className="group z-10 flex-row">
//         <div className="">
//           <Link to={link}>{titleSerie}</Link>
//         </div>

//         <div className=" hidden ">
//           <div className="grid">
//             {movies &&
//               movies.map((movie, id) => (
//                 <Link key={id} to={movie.link} className=" ">
//                   {movie.title}
//                 </Link>
//               ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default testflow;

<header className="sticky top-0 left-0 w-full bg-white shadow-md p-4 z-50">
  <div className="flex justify-between items-center">
    <h1 className="text-xl font-bold">My App</h1>
    <button onClick={() => setIsOpen(!isOpen)} className="p-2">
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>

  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-white text-2xl"
    >
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4"
      >
        <X size={32} />
      </button>
      <a href="#home" className="hover:text-gray-300">
        Home
      </a>
      <a href="#about" className="hover:text-gray-300">
        About
      </a>
      <a href="#services" className="hover:text-gray-300">
        Services
      </a>
      <a href="#contact" className="hover:text-gray-300">
        Contact
      </a>
    </motion.div>
  )}
</header>;
