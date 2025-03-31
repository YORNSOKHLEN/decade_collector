import React, { useState } from "react";
import Head from "./Head";
import NavBar from "./NavBar";
import { X, Search } from "lucide-react";
import DataTitle from "../../js/dataTitle";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <>
      <header className="w-full sticky top-0 left-0 px-2 lg:px-10 z-50 bg-[#06070D]">
        <Head setIsOpen={setIsOpen} isOpen={isOpen} />
      </header>

      <nav className="w-full bg-[#06070D] shadow-md lg:px-10 lg:py-2">
        <NavBar />
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className=" fixed top-12 inset-0 bg-[#06070D] w-full p-6 overflow-x-auto shadow-lg z-50 uppercase ">
          <div className="flex items-center border-b pb-2 mb-4">
            <Search size={20} className="mr-2" />
            <input
              type="text"
              placeholder="Search products"
              className="w-full py-1.5 px-5 bg-[#06070D] text-white text-sm"
            />
          </div>
          <nav className="space-y-4 text-l">
            {DataTitle.map((item) => (
              <div key={item.id}>
                <div className="flex justify-between items-center w-full py-1 border-b uppercase">
                  <Link
                    className=""
                    to={item.link}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {item.titleSerie}
                  </Link>
                  <button onClick={() => toggleExpand(item.titleSerie)}>
                    <span className="text-2xl">
                      {expanded[item.titleSerie] ? "-" : "+"}
                    </span>
                  </button>
                </div>
                {expanded[item.titleSerie] && (
                  <div className=" py-2 text-sm">
                    {item.movies.length > 0 ? (
                      <ul>
                        {item.movies.map((movie) => (
                          <li key={movie.title} className="py-1 text-gray-400">
                            <Link
                              to={movie.link}
                              className=""
                              onClick={() => setIsOpen(!isOpen)}
                            >
                              {movie.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className=" text-gray-400">
                        No movies available
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
