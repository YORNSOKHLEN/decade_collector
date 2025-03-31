import React from "react";
import SerieMovie from "./SerieMovie";
import DataTitle from "../../js/dataTitle";
const NavBar = () => {
  return (
    <>
      <div className="hidden lg:block">
        <div className="flex space-x-8 uppercase text-xl mx-7 py-2 items-center">
          {DataTitle.map((t) => (
            <SerieMovie {...t} key={t.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
