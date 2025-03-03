import { IoMenu } from "react-icons/io5";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-primary_black lg:py-[38px] lg:px-[70px] px-5 py-5 text-white font-open_sauce">
      <div className="flex items-center justify-between">
        <div className="lg:w-[220px] w-[119px] lg:h-[33px] h-[17px]">
          <img className="w-full h-full object-contain" src={logo} alt="Logo" />
        </div>
        <div className="flex items-center gap-16">
          <p className="hidden lg:block text-sm font-bold cursor-pointer">
            Help & Support
          </p>
          <div className="flex items-center lg:gap-5 gap-3">
            <Link to="/sign-up">
              <button className="bg-white text-primary_black font-bold lg:text-sm text-[10px] rounded-full lg:px-6 lg:py-3 px-3 py-1">
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-transparent border border-white text-white font-bold lg:text-sm text-[10px] rounded-full lg:px-6 lg:py-3 px-3 py-1">
                Log In
              </button>
            </Link>
            <div className="lg:hidden">
              <IoMenu size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
