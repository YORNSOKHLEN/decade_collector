import React, { useState } from "react";
import { Link } from "react-router-dom";
import Decade from "../../../assets/images/KamenRider/Decade/Decade1/Decade1.png";
import Khqr from "../../../assets/images/Logo/KHQR.png";
import Aba from "../../../assets/images/Logo/aba.png";
import Acleda from "../../../assets/images/Logo/acleda.jpg";

const GroupCard = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 150;
  // const handleDecrement = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // };
  // const handleIncrement = () => {
  //   setQuantity(quantity + 1);
  // };
  const subtotal = price * quantity;
  const subtotalkh = subtotal * 4100;
  return (
    <>
      <div className=" flex gap-3 mx-7 mt-8  ">
        <div className="w-2/3">
          <table className=" border-2 border-gray-900 w-full">
            <thead>
              <tr>
                <td className=" px-10 py-3 border-b-2 border-gray-900 text-2xl font-thin">
                  Product
                </td>
                <td className=" px-10 py-3 border-b-2 border-gray-900 text-2xl font-thin ">
                  Quantity
                </td>
                <td className=" px-10 py-3 border-b-2 border-gray-900 text-2xl font-thin">
                  Total
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3">
                  <div className="flex gap-5 items-center pr-5">
                    <img
                      src={Decade}
                      className="h-[130px] px-1"
                      alt="DX Neo Decade Driver"
                    />
                    <div className="grid gap-1">
                      <Link
                        to={"/detail-decade"}
                        className="hover:text-[#38A93B] font-medium"
                      >
                        DX Neo Decade Driver & K-Touch 21
                      </Link>
                      <span className="uppercase w-fit py-1 px-2 text-white rounded-sm bg-[#38A93B]">
                        In Stock
                      </span>
                      <span className="text-blue-500 text-lg">${price}</span>
                    </div>
                  </div>
                </td>
                <td className="px-10">
                  <div className="flex items-center justify-center text-white border-2 border-gray-900 rounded-sm px-5">
                    <button
                      onClick={() => {
                        if (quantity > 1) {
                          setQuantity(quantity - 1);
                        }
                      }}
                      className="px-1 py-1 rounded-l"
                    >
                      -
                    </button>
                    <span className="px-5 py-1">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-1 py-1 rounded-r"
                    >
                      +
                    </button>
                  </div>
                  <button className="mt-2 text-gray-500 mx-2 hover:text-[#38A93B] ">
                    Remove
                  </button>
                </td>
                <td className="px-10">
                  <div className="items-center">$ {subtotal.toFixed(2)}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-1/3">
          <table className=" border-2 border-gray-900 w-full">
            <thead>
              <tr>
                <td className="px-10 py-3 border-b-2 border-gray-900 text-2xl font-thin">
                  Total amount
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="px-5 py-5 flex justify-start gap-10">
                    <h2>USD {subtotal.toFixed(2)}</h2>
                    <h2>=</h2>
                    <h2>KHR {subtotalkh}</h2>
                  </div>
                  <p className=" font-thin px-5 my-7">
                    Taxes and shipping calculated at checkout
                  </p>
                  <div className="mx-2 my-4">
                    <Link to={"/shopping"}>
                      <button className="bg-[#38A93B] w-full py-4 rounded-2xl hover:bg-gray-900 font-semibold ">
                        Checkout
                      </button>
                    </Link>
                  </div>
                  <div>
                    <span className="flex gap-4 justify-center items-center text-gray-400">
                      <i className="fas fa-lock"></i>
                      <p>100% Secure Payments</p>
                    </span>
                    <div className="flex gap-1 justify-center pb-3">
                      <span className="left-0 mt-3 flex gap-2 items-center">
                        <img
                          src={Khqr}
                          alt="KHQR"
                          className="w-[50px] h-[40px] bg-white rounded-md"
                        />
                      </span>
                      <span className="left-0 mt-3 flex gap-2 items-center">
                        <img
                          src={Aba}
                          alt="ABA"
                          className="w-[40px] h-[40px] rounded-md"
                        />
                      </span>
                      <span className="left-0 mt-3 flex gap-2 items-center">
                        <img
                          src={Acleda}
                          alt="ACLEDA"
                          className="w-[40px] h-[40px] rounded-md"
                        />
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default GroupCard;
