import React from "react";
import AllKr from "../../../assets/images/kamen_rider/AllKamenRider.jpg";
import DataRider from "../../js/dataRider";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const KamenRider = () => {
  return (
    <>
      <div className="px-10">
        <div className="my-5 justify-items-center">
          <img
            src={AllKr}
            alt="All Kamen Rider"
            className="w-full h-[450px] rounded-lg"
          />
        </div>
        <div className="border-y-2 border-gray-500 justify-items-center ">
          <p className="text-xl py-4">
            From Showa to Reiwa, we've got Drivers, Gimmicks and SH Figuarts for
            all your favorite Kamen Rider series!
          </p>
        </div>
        <div className="mt-5 grid grid-cols-3 uppercase justify-items-center">
          {DataRider.map((r, id) => (
            <div className="border-b-2 my-5 w-[400px]" key={id}>
              <div>
                <Link to={r.link}>
                  <img
                    src={r.img}
                    className="w-[400px] h-[220px] mb-2 rounded-lg shadow-md hover:opacity-85"
                  />
                </Link>
              </div>
              <div className="flex justify-between mb-3">
                <Link to={r.link} className=" hover:text-[#38A93B]">
                  {r.text}
                </Link>
                <Link to={r.link} className=" hover:text-[#38A93B]">
                  <ArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default KamenRider;
