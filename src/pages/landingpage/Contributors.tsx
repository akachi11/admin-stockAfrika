import joe from "../../assets/joe.jpg";
import chioma from "../../assets/chioma.png";
import gbenga from "../../assets/gbenga.jpg";
import kofi from "../../assets/kofi.png";
import jabari from "../../assets/jabari.jpg";
import sean from "../../assets/sean.jpg";
import { Link } from "react-router-dom";

export default function Contributors() {
  return (
    <section className="font-inter">
      <div className="flex lg:flex-row flex-col-reverse lg:h-[313px]">
        <div className="lg:w-1/2 w-full h-full flex bg-red-100">
          <div className="flex-1 h-full relative">
            <img
              className="w-full h-full object-cover object-top"
              src={joe}
              alt=""
            />
            <p className="absolute text-white lg:text-2xl text-[10px] font-bold leading-6 lg:bottom-5 bottom-1 left-5">
              Joseph Makena
            </p>
          </div>
          <div className="flex-1 h-full relative">
            <img
              className="w-full h-full object-cover object-top"
              src={chioma}
              alt=""
            />
            <p className="absolute text-white lg:text-2xl text-[10px] font-bold leading-6 lg:bottom-5 bottom-1 left-5">
              Chioma Obi
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 h-full text-primary_black lg:py-10 lg:pl-20 lg:pr-48 lg:px-0 px-5 py-10 grid items-center">
          <div className="grid lg:gap-5 gap-3">
            <p className="lg:text-[45px] text-[40px] lg:leading-[58px] leading-[51px] font-bold">
              Popular Contributors
            </p>
            <p className="text-smoke">
              Here are some of our top contributors to inspire you. We hope to
              see you among the list soon.
            </p>
            <Link to="/sign-up">
              <button className="bg- border border-primary_black text-primary_black font-bold lg:text-xl text-sm rounded-full px-6 lg:py-3 py-2 w-fit">
                Start your journey
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:h-[313px]">
        <div className="lg:w-1/2 h-full flex">
          <div className="flex-1 h-full relative">
            <img
              className="w-full h-full object-cover object-top"
              src={gbenga}
              alt=""
            />
            <p className="absolute text-white lg:text-2xl text-[10px] font-bold leading-6 lg:bottom-5 bottom-1 left-5">
              Gbenga Ade
            </p>
          </div>
          <div className="flex-1 h-full relative">
            <img
              className="w-full h-full object-cover object-top"
              src={kofi}
              alt=""
            />
            <p className="absolute text-white lg:text-2xl text-[10px] font-bold leading-6 lg:bottom-5 bottom-1 left-5">
              Kofi Williams
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 h-full flex">
          <div className="flex-1 h-full relative">
            <img
              className="w-full h-full object-cover object-top"
              src={jabari}
              alt=""
            />
            <p className="absolute text-white lg:text-2xl text-[10px] font-bold leading-6 lg:bottom-5 bottom-1 left-5">
              Jabari Kwame
            </p>
          </div>
          <div className="flex-1 h-full relative">
            <img
              className="w-full h-full object-cover object-top"
              src={sean}
              alt=""
            />
            <p className="absolute text-white lg:text-2xl text-[10px] font-bold leading-6 lg:bottom-5 bottom-1 left-5">
              Sean Idir
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
