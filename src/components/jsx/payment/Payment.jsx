import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GroupItem from '../product/GroupItem';
import visa from '../../../assets/images/logo/visa.png';
import paypal from '../../../assets/images/logo/paypal.png';
import googlePay from '../../../assets/images/logo/googlePay.png';

const Payment = () => {
  const [selectedOption, setSelectedOption] = useState('Standard');
  // Helper function to decide the accent color
  const getAccentClass = (option) => {
    return selectedOption === option ? 'accent-blue-500' : 'accent-white';
  };
  return (
    <div className="max-w-7xl mx-auto pt-8 pb-3 flex">
      <div className="w-1/2 border-r border-gray-700 pr-8 mx-5">
        <div className="text-xl font-semibold mb-6">
          <h4 className="text-xl font-semibold mb-6">Oder Summary</h4>
        </div>
        <div>
          <GroupItem />
        </div>
        <div className="mb-4 mx-5">
          <label
            htmlFor="discound-code"
            className="block text-sm font-medium mb-1"
          >
            Gift Card / Discound code
          </label>
          <div className="flex items-center gap-3 mb-6">
            <input
              type="text"
              id="discount-code"
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-l px-3 py-2"
            />
            <button className="px-4 py-2 bg-[#38A93B] text-white rounded-r">
              Apply
            </button>
          </div>
        </div>

        {/* pricing Details  */}
        <div className="text-sm mb-2 mx-5">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$160.00</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping Fee</span>
            <span className="text-[#38A93B]">FREE</span>
          </div>
        </div>
      </div>
      {/* Shipping Details  */}
      <div className="w-1/2 pl-8 pr-5">
        {/* Progress Steps */}
        <div className="mb-6 flex items-center text-gray-300 justify-between">
          <span className="mr-4 text-[#38A93B]">Shipping</span>
          <div>
            <i className="fa-solid fa-minus fa-lg"></i>
            <i className="fa-solid fa-circle-check fa-lg"></i>
            <i className="fa-solid fa-minus fa-lg"></i>
          </div>
          <span className="mr-4 text-[#38A93B] ">Delivery</span>
          <div>
            <i className="fa-solid fa-minus fa-lg"></i>
            <i className="fa-solid fa-circle-check fa-lg"></i>
            <i className="fa-solid fa-minus fa-lg"></i>
          </div>
          <span className="mr-4 text-[#38A93B]">Payment</span>
        </div>

        {/* Contact Details */}
        <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
        <div className="flex flex-col space-y-2">
          <form>
            <label className="flex items-center mb-4 cursor-pointer ">
              <input
                type="radio"
                value="standard"
                checked={selectedOption === 'standard'}
                onChange={() => setSelectedOption('standard')}
                className={`mr-2 ${getAccentClass('standard')}`}
              />
              <div className="flex flex-col ml-3">
                <span className="text-lg">Pay on Delivery</span>
                <span>Pay with cash on delivery</span>
              </div>
            </label>

            <label className="flex items-center justify-between mb-4 cursor-pointer ">
              <div className="flex">
                <input
                  type="radio"
                  value="express"
                  checked={selectedOption === 'express'}
                  onChange={() => setSelectedOption('express')}
                  className={`mr-2 ${getAccentClass('express')}`}
                />
                <div className="flex flex-col  ml-3 ">
                  <span className="text-lg">Credit Card/Debit Cards</span>
                  <span>Pay with your Credit / Debit Card</span>
                </div>
              </div>

              <div>
                <img
                  className="w-10 rounded-lg object-contain"
                  src={visa}
                  alt=""
                />
              </div>
            </label>
            <label className="flex items-center mb-4 cursor-pointer justify-between">
              <div className="flex items-center">
                <input
                  type="radio"
                  value="samDay"
                  checked={selectedOption === 'samDay'}
                  onChange={() => setSelectedOption('samDay')}
                  className={`mr-2 ${getAccentClass('samDay')}`}
                />
                <div className="flex flex-col ml-3">
                  <span className="text-lg">Other payment Method</span>
                  <span>Make payment through Gpay. Paypal etec</span>
                </div>
              </div>
              <div className="w-10 flex space-x-2">
                <img src={paypal} alt="" />
                <img src={googlePay} alt="" />
              </div>
            </label>
          </form>
        </div>
        <div className="flex justify-between">
          <Link to={'/Delivery'}>
            <button className=" py-3 mt-10 w-32  bg-blue-800  text-white rounded-lg">
              Back
            </button>
          </Link>

          <button className=" py-3 mt-10 w-32  bg-[#38A93B]  text-white rounded-lg">
            Pay $164.23
          </button>
        </div>
      </div>
    </div>
  );
};
export default Payment;
