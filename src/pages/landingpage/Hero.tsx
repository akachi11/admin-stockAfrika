import bghero from "../../assets/herobg.jpg";
import { CiTwitter } from "react-icons/ci";
import { RiFacebookCircleLine } from "react-icons/ri";
import { IoIosArrowRoundForward, IoLogoInstagram } from "react-icons/io";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Hero(): JSX.Element {
  return (
    <section className="flex items-center h-[906px] relative font-inter">
      <div className="lg:px-[70px] py-28 px-5 lg:bg-accent bg-[url('/herobg.jpg')] lg:bg-none bg-no-repeat bg-[20%] text-white lg:w-[621px] h-full">
        <div className="z-20 relative">
          <div className="flex flex-col gap-10">
            <p className="text-6xl font-black leading-[80px]">
              Let’s view Africa through your lens
            </p>
            <p className="text-lg font-medium leading-[30px]">
              Become part of a community of passionate photographers and earn
              rewards doing what you love.
            </p>
            <Link to="/login">
            <button className="bg-white text-accent font-bold text-xl rounded-full px-6 py-3 w-fit">
              Start your journey
            </button>
            </Link>
          </div>
          <div className="flex gap-5 mt-20">
            <a href="" target="_blank" rel="noopener noreferrer">
              <CiTwitter size={20} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <RiFacebookCircleLine size={20} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <IoLogoInstagram size={20} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <PiLinkedinLogoBold size={20} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <IoIosArrowRoundForward size={20} />
            </a>
          </div>
        </div>
        <div className="z-10 lg:hidden absolute top-0 bottom-0 left-0 right-0 bg-[#884b204c] h-full"></div>
      </div>
      <div
        className="hidden lg:block flex-1 h-full"
        style={{
          background: `url(${bghero})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      ></div>
    </section>
  );
}
