import { CiTwitter } from "react-icons/ci";
import logo from "../../assets/logo.png";
import { RiFacebookCircleLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { PiLinkedinLogoBold } from "react-icons/pi";
import React from "react";

const DashboardFooter: React.FC = () => {
  const date = new Date();
  return (
    <div className="py-[32px] bg-primary_black text-[#B0B0B0] font-open_sauce">
      <div className="flex flex-wrap lg:justify-end justify-center px-8 items-center gap-5">
        <div className="w-[115px] h-[15px] overflow-hidden">
          <img className="w-full h-full" src={logo} alt="Logo" />
        </div>
        <p className="hidden lg:block text-xs font-medium">
          ©{date.getFullYear()} Stock Afrika Ltd. All rights reserved.
        </p>

        <p className="text-xs">Terms of use</p>
        <p className="text-xs">Privacy</p>
        <p className="text-xs">Contact us</p>
        <p className="text-xs">FAQ</p>
        <p className="text-xs">Site map</p>
        <p className="text-xs">Join our community</p>
        <div className="flex gap-5">
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
        </div>
      </div>
      <div className="lg:hidden">
        <div className="w-[85%] h-[1px] bg-[#5F5F5F] mx-auto my-7"></div>
        <p className="lg:hidden text-xs font-medium text-center text-[#B0B0B0]">
          ©{date.getFullYear()} Stock Afrika Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default DashboardFooter;
