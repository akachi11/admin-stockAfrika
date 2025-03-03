import { CiTwitter } from "react-icons/ci";
import logo from "../assets/logo.png";
import { RiFacebookCircleLine } from "react-icons/ri";
import { IoIosArrowRoundForward, IoLogoInstagram } from "react-icons/io";
import { PiLinkedinLogoBold } from "react-icons/pi";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-primary_black text-white font-open_sauce">
      <div className="lg:pt-32 pt-10 pb-20 lg:px-48 px-5">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="w-[273px] lg:self-center mb-16 lg:mb-0">
            <img className="w-full" src={logo} alt="Company Logo" />
          </div>
          <div className="text-[#B0B0B0] mb-10 lg:mb-0">
            <p className="font-bold leading-5 mb-3 uppercase">Learn more</p>
            <ul className="text-sm leading-5 grid gap-5">
              <li>Plans and pricing</li>
              <li>Stock Photos</li>
              <li>License information</li>
              <li>Legal and Privacy</li>
            </ul>
          </div>
          <div className="text-[#B0B0B0] mb-10 lg:mb-0">
            <p className="font-bold leading-5 mb-3 uppercase">Company</p>
            <ul className="text-sm leading-5 grid gap-5">
              <li>Our Story</li>
              <li>Our Plan</li>
            </ul>
          </div>
          <div className="text-[#B0B0B0] mb-10 lg:mb-0">
            <p className="font-bold leading-5 mb-3 uppercase">Support</p>
            <ul className="text-sm leading-5 grid gap-5">
              <li>Contact us</li>
              <li>FAQs</li>
              <li>Site map</li>
            </ul>
          </div>
          <div className="flex gap-5 lg:mt-20">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <CiTwitter size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <RiFacebookCircleLine size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <IoLogoInstagram size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <PiLinkedinLogoBold size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <IoIosArrowRoundForward size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#242424]"></div>
      <div className="lg:py-10 py-5 lg:px-20 px-5 text-center text-[#4F4F4F] font-medium">
        <p className="text-[7px] lg:text-[12px]">
          2023 Stock Afrika Ltd. | The Stock Afrika design is a trademark of
          Stock Afrika. | Explore a vast number of high quality afrocentric
          stock photos and videos.
        </p>
      </div>
    </div>
  );
};

export default Footer;
