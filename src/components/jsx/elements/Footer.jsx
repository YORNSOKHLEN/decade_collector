import React from "react";
import LogoWhite from "../../../assets/images/Logo/Logo-White.png";
import Khqr from "../../../assets/images/Logo/KHQR.png";
import Aba from "../../../assets/images/Logo/aba.png";
import Acleda from "../../../assets/images/Logo/acleda.jpg";
import Telegram from "../../../assets/icon/telegram.png";
import Messenger from "../../../assets/icon/messenger.png";
import Email from "../../../assets/icon/email.png";
import Facebook from "../../../assets/icon/facebook.png";
import Tiktok from "../../../assets/icon/tiktok.png";
import Instagram from "../../../assets/icon/instagram.png";
import Youtube from "../../../assets/icon/youtube.png";
import { Link } from "react-router-dom";
import MoreSeries from "../../js/moreSeries";

const Footer = () => {
  return (
    <footer className="bg-[#16191E] mt-8 pt-9 pb-3">
      <div className="flex justify-evenly items-center mx-14">
        <div>
          <a href="#">
            <img src={LogoWhite} alt="Logo" className="w-[302px] h-[130px]" />
          </a>
        </div>
        <div className="flex gap-28">
          <div>
            <h2 className="text-2xl font-bold uppercase">More Series</h2>
            {MoreSeries.map((ms) => (
              <Link
                to={ms.link}
                key={ms.id}
                className="left-0 mt-3 flex gap-2 items-center hover:text-[#38A93B]"
              >
                {ms.title}
              </Link>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-bold">PAYMENT</h2>
            <a href="#1" className="left-0 mt-3 flex gap-2 items-center">
              <img
                src={Khqr}
                alt="KHQR"
                className="w-[40px] h-[30px] bg-white rounded-md"
              />
              <p>Bakong KHQR</p>
            </a>
            <a href="#1" className="left-0 mt-3 flex gap-2 items-center">
              <img
                src={Aba}
                alt="ABA"
                className="w-[40px] h-[40px] rounded-md"
              />
              <p>ABA Bank</p>
            </a>
            <a href="#1" className="left-0 mt-3 flex gap-2 items-center">
              <img
                src={Acleda}
                alt="ACLEDA"
                className="w-[40px] h-[40px] rounded-md"
              />
              <p>ACLEDA Bank Plc</p>
            </a>
          </div>
          <div>
            <h2 className="text-2xl font-bold">CONTACT US</h2>
            <p>
              Got a question or need help? Reach <br />
              out to us at
              <span> </span>
              <Link to={"/home"} className="text-[#38A93B] underline">
                decadecollector.com
              </Link>
              <br />
              For returns, please use the following <br />
              address: Box 351, Hamburg PA 19526
            </p>
            <div className="flex justify-evenly gap-6 mt-4 items-center mx-6">
              <a href="#">
                <img src={Telegram} alt="Telegram" />
              </a>
              <a href="#">
                <img src={Messenger} alt="Messenger" />
              </a>
              <a href="#">
                <img src={Email} alt="Email" />
              </a>
            </div>
            <div className="flex justify-start gap-3 mt-5 items-center">
              <p>Follow US</p>
              <a href="#">
                <img src={Facebook} alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#">
                <img src={Tiktok} alt="Tiktok" className="w-6 h-6" />
              </a>
              <a href="#">
                <img src={Instagram} alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#">
                <img src={Youtube} alt="Youtube" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-white text-sm mt-3">
        © 2024 Deacde Collector. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
