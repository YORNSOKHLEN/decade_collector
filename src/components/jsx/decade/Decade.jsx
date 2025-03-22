import React, { useState } from "react";
import DataDecade from "../../js/dataDecade1";
import Follow from "../../js/followUs";
import GroupDecade from "./GroupDecade";
import { Link } from "react-router-dom";

const Decade = () => {
  const [color, setColor] = useState(false);
  const [count, setCount] = useState(1);
  return (
    <div className="flex gap-10 mx-7 mt-10 ">
      <div className=" grid grid-cols-1 sticky">
        {DataDecade.map((d) => (
          <GroupDecade {...d} key={d.id} />
        ))}
      </div>
      <div className=" w-2/5 relative overflow-hidden z-0 mx-7 rounded-lg ">
        <div className=" hidden">
          {DataDecade.map((dc) => (
            <img
              src={dc.img}
              key={dc.id}
              className="w-[600px] h-auto absolute object-cover duration-700 rounded-lg"
            />
          ))}
        </div>
      </div>
      <div className="w-3/5 mr-7">
        <div className="flex justify-between">
          <div>
            <span className="uppercase py-2 px-12 mb-3 rounded-md bg-[#38A93B]">
              In stock
            </span>
          </div>
          <div className="text-xl flex gap-2">
            <button
              onClick={() => {
                setColor(!color);
              }}
            >
              <i
                className={`fas fa-heart text-2xl ${
                  color === true ? `text-[#38A93B]` : `text-white`
                }`}
              ></i>
            </button>
            <button>
              <i className="fas fa-link text-2xl"></i>
            </button>
          </div>
        </div>
        <div className="mt-5">
          <span className=" uppercase text-3xl">
            DX Neo Decade Driver & K-Touch 21
          </span>
        </div>
        <div className="mt-5">
          <Link
            to="/decade"
            className=" uppercase text-xl hover:text-[#38A93B]"
          >
            Series : Kamen Rider Decade
          </Link>
        </div>
        <div className="mt-7 flex gap-20">
          <div className="flex items-center justify-center text-white border-2 border-gray-900 rounded-sm px-5">
            <button
              onClick={() => {
                if (count > 1) {
                  setCount(count - 1);
                }
              }}
              className="px-3 py-3 rounded-lg"
            >
              -
            </button>
            <span className="px-5 py-3">{count}</span>
            <button
              onClick={() => setCount(count + 1)}
              className="px-3 py-3 rounded-lg"
            >
              +
            </button>
          </div>
          <div className="items-center mt-1">
            <span className="text-2xl ">Price : $160.00</span>
          </div>
        </div>
        <div className="mt-6 items-center ">
          <button
            href="#"
            className="w-1/3 flex justify-around uppercase py-3  bg-[#38A93B] rounded-xl hover:bg-white hover:text-[#38A93B] "
          >
            Add to cart <i className="fas fa-basket-shopping mt-1 "></i>
          </button>
        </div>
        <div className="mt-4">
          <span className=" uppercase text-lg font-semibold">Description</span>
          <p>
            From Rider Time Zi-O vs Decade comes the re-release Neo Decade
            Driver AND the premiere of the K-Touch 21! The set includes cards
            from W to Zero One!
          </p>

          <div className="flex gap-1">
            <span className="font-medium">Shipping: </span>
            <span> Free within the Cambodia</span>
          </div>
        </div>
      </div>
      <div className=" w-[50px] justify-items-center">
        {Follow.map((f) => (
          <img src={f.img} key={f.id} className="w-8 my-5" />
        ))}
      </div>
    </div>
  );
};

export default Decade;
