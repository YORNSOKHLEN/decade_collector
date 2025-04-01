import React from "react";
import Item from "../../../assets/icon/item.png";
import Help from "../../../assets/icon/help.png";
import Payment from "../../../assets/icon/payment.png";

const Service = () => {
  return (
    <div className="lg:p-16 mt-10 w-full justify-items-center ">
      <ul className=" grid grid-cols-2 lg:grid-cols-4 mx-4">
        <li className=" border-r-2 border-gray-400">
          <div className=" justify-items-center p-5">
            <div>
              <img src={Item} className=" h-20 lg:h-40" />
            </div>
            <h3 className=" text-sm lg:text-2xl font-bold uppercase py-3">
              FREE SHIPPING
            </h3>
            <div className="px-2">
              <p className=" text-center text-xs lg:text-sm text-gray-300 justify-items-center">
                For all Full Payment orders within the Cambodia
              </p>
            </div>
          </div>
        </li>
        <li className=" lg:border-x-2 border-gray-400">
          <div className=" justify-items-center p-5">
            <div>
              <img src={Item} className="h-20 lg:h-40" />
            </div>
            <h3 className=" text-sm lg:text-2xl font-bold uppercase py-3">
              14-DAY RETURNS
            </h3>
            <div className="px-2">
              <p className="text-xs text-gray-300 justify-items-center">
                Return unopened items within 14 days
              </p>
            </div>
          </div>
        </li>
        <li className=" border-r-2 border-t-2 lg:border-t-0 lg:border-x-2 border-gray-400">
          <div className=" justify-items-center p-5">
            <div>
              <img src={Help} className="h-20 lg:h-40" />
            </div>
            <h3 className=" text-sm lg:text-2xl font-bold uppercase py-3">
              HERE TO HELP
            </h3>
            <div className="px-2">
              <p className="text-xs text-gray-300 justify-items-center">
                Send us an email or reach out on social media
              </p>
            </div>
          </div>
        </li>
        <li className=" border-t-2 lg:border-none border-gray-400">
          <div className=" justify-items-center p-5">
            <div>
              <img src={Payment} className="h-20 lg:h-40" />
            </div>
            <h3 className=" text-sm lg:text-2xl font-bold uppercase py-3">
              SECURE PAYMENTS
            </h3>
            <div className="px-2">
              <p className="text-xs text-gray-300 justify-items-center">
                We accept ABA Bank, ACLEDA Bank Plc, KHQR & More!
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Service;
