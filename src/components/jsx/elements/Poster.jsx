import React, { useState, useEffect, useRef } from "react";
import DataPoster from "../../js/dataPoster";
const Poster = () => {
  const [currentId, setCurrentId] = useState(0);
  const timeoutRef = useRef(null);
  useEffect(() => {
    const nextImg = () => {
      setCurrentId((prevId) => (prevId + 1) % DataPoster.length);
    };
    timeoutRef.current = setInterval(nextImg, 3000);
    return () => {
      clearInterval(timeoutRef.current);
      behavior: "smooth";
    };
  }, [currentId]);
  // const nextImg = () => {
  //   setCurrentId((prevId) => (prevId + 1) % DataPoster.length);
  // };
  // const prevImg = () => {
  //   setCurrentId((prevId) => (prevId - 1) % DataPoster.length);
  // };
  return (
    <div className="h-[480px] z-0 mb-3 px-10">
      <div className="relative z-0 mx-7 overflow-hidden rounded-lg md:h-[480.11px]">
        {DataPoster.map((po, id) => (
          <img
            key={id}
            src={po.img}
            className={`absolute w-full h-[450px] object-cover duration-700 rounded-lg ${
              id === currentId ? "opacity-100" : "opacity-0"
            }`}
            alt="..."
          />
        ))}
      </div>
      {/* <button
        onClick={prevImg}
        className=" bottom-32 absolute left-24 transform -translate-y-1/2 bg-black/50 w-8 h-8 rounded-full  hover:bg-black/80"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        onClick={nextImg}
        className="bottom-32 absolute right-9 transform -translate-y-1/2 bg-black/50 w-8 h-8 rounded-full  hover:bg-black/80"
      >
        <i className="fas fa-chevron-right"></i>
      </button> */}
    </div>
  );
};

export default Poster;
