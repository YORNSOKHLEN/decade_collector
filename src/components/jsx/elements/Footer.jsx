import React, { useState } from "react";
import Kh from "../../../assets/images/logo/kh.png";
import Aba from "../../../assets/images/logo/aba.png";
import Acleda from "../../../assets/images/logo/acleda.jpg";
// import Telegram from "../../../assets/icon/telegram.png";
// import Messenger from "../../../assets/icon/messenger.png";
// import Email from "../../../assets/icon/email.png";
import Facebook from "../../../assets/icon/facebook.png";
import Tiktok from "../../../assets/icon/tiktok.png";
import Instagram from "../../../assets/icon/instagram.png";
import Youtube from "../../../assets/icon/youtube.png";
import { Link } from "react-router-dom";
import MoreSeries from "../../js/moreSeries";
import Policy from "../../js/policyStore";

const Footer = () => {
  return (
    <footer className="bg-[#0b0c10] mt-20 pt-9 pb-3 items-center">
      <div className="flex px-7 md:mx-14">
        {/* <div>
          <a href="#">
            <img src={logoWhite} alt="logo" className="w-[282px] h-[110px]" />
          </a>
        </div> */}
        <div className="grid grid-cols-2 lg:flex gap-5 justify-center lg:gap-10">
          <div>
            <div>
              <h2 className="text-base lg:text-2xl font-semibold lg:font-bold uppercase">
                Store Policies
              </h2>
            </div>

            <div className=" grid">
              {Policy.map((p) => (
                <Link
                  to={p.link}
                  key={p.id}
                  className="text-sm md:text-base mt-3 items-center hover:text-[#38A93B]"
                >
                  {p.policy}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="lg:text-2xl font-semibold lg:font-bold uppercase">
              More Series
            </h2>
            <div className="grid">
              {MoreSeries.map((ms) => (
                <Link
                  to={ms.link}
                  key={ms.id}
                  className="text-sm md:text-base mt-3 gap-2 items-center hover:text-[#38A93B]"
                >
                  {ms.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="lg:text-2xl font-semibold lg:font-bold">PAYMENT</h2>
            <Link
              onClick={() => {
                window.open("/decadecollector", "_blank");
              }}
              className="text-xs md:text-base mt-3 flex gap-2 items-center"
            >
              <img
                src={Kh}
                alt="KHQR"
                className="w-[40px] h-[30px] bg-white rounded-md"
              />
              <p>Bakong KHQR</p>
            </Link>
            <Link
              onClick={() => {
                window.open("/decadecollector", "_blank");
              }}
              className="text-xs md:text-base mt-3 flex gap-2 items-center"
            >
              <img
                src={Aba}
                alt="ABA"
                className="w-[40px] h-[40px] rounded-md"
              />
              <p>ABA Bank</p>
            </Link>
            <Link
              onClick={() => {
                window.open("/decadecollector", "_blank");
              }}
              className="text-xs md:text-base mt-3 flex gap-2 items-center"
            >
              <img
                src={Acleda}
                alt="ACLEDA"
                className="w-[40px] h-[40px] rounded-md"
              />
              <p>ACLEDA Bank Plc</p>
            </Link>
          </div>
          <div>
            <div>
              <h2 className="lg:text-2xl font-semibold lg:font-bold">
                CONTACT US
              </h2>
              <p className="text-sm md:text-base">
                Got a question or need help? <br className="hidden md:block" />
                Reach
                <span> </span>
                out to us at
                <span> </span>
                <button
                  onClick={() => {
                    window.open("https://t.me/decadecollector", "_blank");
                  }}
                  className="text-[#38A93B] underline hover:opacity-70"
                >
                  decadecollector.com
                </button>
                <br />
                For returns, please use the following{" "}
                <br className="hidden md:block" />
                address: Box 351, Hamburg PA 19526
              </p>
            </div>
            {/* <div className="flex justify-evenly gap-6 mt-4 items-center mx-6">
              <Link to="#">
                <img
                  src={Telegram}
                  alt="Telegram"
                  className="h-7 lg:h-8 hover:opacity-70"
                />
              </Link>
              <Link to="#">
                <img
                  src={Messenger}
                  alt="Messenger"
                  className="h-7 lg:h-8 hover:opacity-70"
                />
              </Link>
              <Link to="#">
                <img
                  src={Email}
                  alt="Email"
                  className="h-7 lg:h-8 hover:opacity-70"
                />
              </Link>
            </div> */}
            <div className=" lg:flex justify-start gap-3 mt-5 items-center">
              <p>Follow US</p>
              <div className="flex gap-3 mt-2 lg:mt-0">
                <button
                  onClick={() => {
                    window.open("/decadecollector", "_blank");
                  }}
                >
                  <img
                    src={Facebook}
                    alt="Facebook"
                    className="h-7 lg:h-8 hover:opacity-70"
                  />
                </button>
                <button
                  onClick={() => {
                    window.open("/decadecollector", "_blank");
                  }}
                >
                  <img
                    src={Tiktok}
                    alt="Tiktok"
                    className="h-7 lg:h-8 hover:opacity-70"
                  />
                </button>
                <button
                  onClick={() => {
                    window.open("/decadecollector", "_blank");
                  }}
                >
                  <img
                    src={Instagram}
                    alt="Instagram"
                    className="h-7 lg:h-8 hover:opacity-70"
                  />
                </button>
                <button
                  onClick={() => {
                    window.open("/decadecollector", "_blank");
                  }}
                >
                  <img
                    src={Youtube}
                    alt="Youtube"
                    className="h-7 lg:h-8 hover:opacity-70"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-white text-sm mt-5">
        © 2025 Deacde Collector. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
