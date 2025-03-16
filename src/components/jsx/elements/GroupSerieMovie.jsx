import React from "react";
import SerieMovie from "./SerieMovie";
import DataTitle from "../../js/dataTitle";

const GroupSerieMovie = () => {
  return (
    <div className="flex space-x-8 uppercase text-xl mx-7 py-3 items-center">
      {DataTitle.map((t) => (
        <SerieMovie {...t} key={t.id} />
      ))}
    </div>
  );
};

export default GroupSerieMovie;
