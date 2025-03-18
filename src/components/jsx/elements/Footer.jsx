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
import Policy from "../../js/policyStore";

const Footer = () => {
  return (
    <footer className="bg-[#0b0c10] mt-8 pt-9 pb-3">
      <div className="flex justify-evenly mx-14">
        <div>
          <a href="#">
            <img src={LogoWhite} alt="Logo" className="w-[282px] h-[110px]" />
          </a>
        </div>
        <div className="flex gap-20">
          <div>
            <h2 className="text-2xl font-bold uppercase">
              Store Policies & Info
            </h2>
            {Policy.map((p) => (
              <Link
                to={p.link}
                key={p.id}
                className="left-0 mt-3 flex gap-2 items-center hover:text-[#38A93B]"
              >
                {p.policy}
              </Link>
            ))}
          </div>
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
            <Link to="#1" className="left-0 mt-3 flex gap-2 items-center">
              <img
                src={Khqr}
                alt="KHQR"
                className="w-[40px] h-[30px] bg-white rounded-md"
              />
              <p>Bakong KHQR</p>
            </Link>
            <Link to="#1" className="left-0 mt-3 flex gap-2 items-center">
              <img
                src={Aba}
                alt="ABA"
                className="w-[40px] h-[40px] rounded-md"
              />
              <p>ABA Bank</p>
            </Link>
            <Link to="#1" className="left-0 mt-3 flex gap-2 items-center">
              <img
                src={Acleda}
                alt="ACLEDA"
                className="w-[40px] h-[40px] rounded-md"
              />
              <p>ACLEDA Bank Plc</p>
            </Link>
          </div>
          <div>
            <h2 className="text-2xl font-bold">CONTACT US</h2>
            <p>
              Got a question or need help? Reach <br />
              out to us at
              <span> </span>
              <Link
                to={"/home"}
                className="text-[#38A93B] underline hover:opacity-70"
              >
                decadecollector.com
              </Link>
              <br />
              For returns, please use the following <br />
              address: Box 351, Hamburg PA 19526
            </p>
            <div className="flex justify-evenly gap-6 mt-4 items-center mx-6">
              <Link to="#">
                <img
                  src={Telegram}
                  alt="Telegram"
                  className="h-8 hover:opacity-70"
                />
              </Link>
              <Link to="#">
                <img
                  src={Messenger}
                  alt="Messenger"
                  className="h-8 hover:opacity-70"
                />
              </Link>
              <Link to="#">
                <img src={Email} alt="Email" className="h-8 hover:opacity-70" />
              </Link>
            </div>
            <div className="flex justify-start gap-3 mt-5 items-center">
              <p>Follow US</p>
              <Link to="#">
                <img
                  src={Facebook}
                  alt="Facebook"
                  className="h-8 hover:opacity-70"
                />
              </Link>
              <Link to="#">
                <img
                  src={Tiktok}
                  alt="Tiktok"
                  className="h-9 hover:opacity-70"
                />
              </Link>
              <Link to="#">
                <img
                  src={Instagram}
                  alt="Instagram"
                  className="h-8 hover:opacity-70"
                />
              </Link>
              <Link to="#">
                <img
                  src={Youtube}
                  alt="Youtube"
                  className="h-9 hover:opacity-70"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-white text-sm mt-3">
        © 2025 Deacde Collector. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
