import { CiUser } from "react-icons/ci";
import logo from "../../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import React, { useEffect, useRef, useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { getuser, resetUserSession } from "../../services/AuthServices";

const DashboardNavbar: React.FC = () => {
  const user = getuser();

  const [profile, setProfile] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setProfile(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setProfile(false);
      }
    };

    if (profile) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profile]);
  return (
    <div className="bg-primary_black lg:px-9 px-5 h-[98px] text-white flex items-center justify-between fixed lg:relative w-full z-50">
      <div className="lg:hidden">
        <IoMenu size={25} />
      </div>
      <div className="lg:hidden w-[173px] h-[26px] overflow-hidden">
        <img className="w-full h-full object-contain" src={logo} alt="Logo" />
      </div>
      <div className="flex items-center gap-3 ml-auto relative">
        <button
          onClick={() => setProfile(!profile)}
          className="outline-none rounded-full border border-white p-1"
        >
          <CiUser size={20} />
        </button>
        {profile && (
          <div
            ref={dropdownRef}
            className="absolute bg-white grid gap-4 top-12 lg:-left-[100px] -left-[220px] w-[252px] rounded-[20px] shadow-2xl text-primary_black p-5"
          >
            <div className="flex items-center gap-2">
              <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://randomwordgenerator.com/img/picture-generator/black-and-white-man-person-cigarette-543.jpg"
                  alt=""
                />
              </div>
              <div>
                <p className="font-medium text-sm">{user?.user?.full_name}</p>
                <p className="text-[#777777] text-[10px]">User ID : 039484</p>
              </div>
            </div>
            <div>
              <Link
                to={"/profile"}
                className="flex items-center gap-2 border-y border-[#C0C0C0] py-4 hover:bg-[#C0C0C0] pl-2 transition-all duration-150 ease-linear"
              >
                <div className="outline-none rounded-full border border-primary_black w-fit p-1">
                  <CiUser size={14} />
                </div>
                <p className="font-medium text-sm">Profile</p>
              </Link>
              <button
                onClick={() => resetUserSession()}
                className="flex items-center gap-2 py-4 hover:bg-[#C0C0C0] pl-2 w-full transition-all duration-150 ease-linear"
              >
                <div className="">
                  <IoIosLogOut size={25} />
                </div>
                <p className="font-medium text-sm">Log Out</p>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardNavbar;
