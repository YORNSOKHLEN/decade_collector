import React, { useState } from "react";
import { Link } from "react-router-dom";

const Product = ({ old_pic, new_pic, Detail, Price, link }) => {
  const [currentPic, setCurrentPic] = useState(old_pic);
  const [color, setColor] = useState(false);

  return (
    <article className="mb-7 hover:scale-110 transition-transform duration-300 flex flex-col">
      <div className="uppercase py-1 mb-3 flex justify-center rounded-sm bg-[#38A93B]">
        in stock
      </div>
      <div className="grid justify-items-center">
        <Link to={link}>
          <img
            src={currentPic}
            alt=""
            className="rounded-xl mb-3 h-72"
            id="pic"
            onMouseOver={() => setCurrentPic(new_pic)}
            onMouseOut={() => setCurrentPic(old_pic)}
          />
        </Link>
      </div>
      <div>
        <span className="flex-grow text-base text-gray-300">{Detail}</span>
      </div>
      <div className="flex justify-between items-center mx-1 mt-auto">
        <div>
          <span className="font-bold text-2xl">{Price}</span>
        </div>
        <div className="text-xl flex gap-2">
          <button
            onClick={() => {
              setColor(!color);
            }}
          >
            <i
              className={`fas fa-heart ${
                color === true ? `text-[#38A93B]` : `text-white`
              }`}
            ></i>
          </button>
          <button>
            <i className="fas fa-link"></i>
          </button>
        </div>
      </div>
      <div className="mt-4 items-center py-3 border-[1px] rounded-xl hover:border-[#38A93B] hover:text-[#38A93B]">
        <button href="#" className="w-full flex justify-around uppercase">
          Add to cart <i className="fas fa-basket-shopping mt-1"></i>
        </button>
      </div>
    </article>
  );
};

export default Product;
