import { FaChartBar } from "react-icons/fa";
import { RiHistoryLine } from "react-icons/ri";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TfiWallet } from "react-icons/tfi";

export default function Progress() {
  return (
    <section className="lg:h-[401px] flex lg:flex-row flex-col-reverse gap-5 font-inter">
      <div className="lg:w-[30%] grid gap-5">
        <div className="w-full h-[242px] rounded-3xl bg-white text-primary_black py-9 px-8 shadow">
          <div>
            <div className="flex items-center justify-between">
              <p className="text-[15px] font-bold leading-[18px]">
                Your Balance is
              </p>
              <button className="border-none outline-none text-[#B0B0B0] text-lg">
                <RxOpenInNewWindow />
              </button>
            </div>
            <p className="text-[40px] font-bold leading-[48px] mb-3 mt-2">
              $0
            </p>
            <p className="text-[15px] font-bold leading-[18px]">0 Credits</p>
            <div className="my-6 bg-primary_black w-full h-[1px]"></div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <TfiWallet size={10} />
                <p className="text-[10px]">Wallet</p>
              </div>
              <div className="flex items-center gap-2">
                <RiHistoryLine size={10} />
                <p className="text-[10px]">Earning History</p>
              </div>
              <div className="flex items-center gap-2">
                <FaChartBar size={10} />
                <p className="text-[10px]">Statistics</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[139px] rounded-3xl bg-white text-primary_black overflow-hidden py-9 px-8 shadow">
          <div>
            <p>Ranking unavailable</p>
          </div>
        </div>
      </div>
      <div className="lg:w-[70%] bg-white rounded-3xl overflow-hidden shadow">
        <div className="w-full flex lg:flex-row flex-col h-full">
          <div
            style={{
              background: `url('https://plus.unsplash.com/premium_photo-1708275671997-f240e96b24fd?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
              backgroundSize: "cover",
              backgroundPositionY: "20%",
            }}
            className="lg:w-[40%] w-full lg:h-full h-[273px] border"
          ></div>
          <div className="lg:w-[60%] lg:h-full lg:p-10 p-4">
            <div className="text-primary_black">
              <p className="lg:text-4xl text-2xl text-accent font-inter font-bold lg:leading-[42px] leading-[30.26px]">
                No challenge available
              </p>
              {/* <div className="my-6 bg-primary_black w-full h-[1px]"></div>
              <ul className="grid gap-6">
                {Array.from({ length: 3 }, (_, index) => (
                  <li key={index}>
                    <div className="flex items-center gap-1 font-semibold">
                      <IoIosArrowRoundForward size={20} />
                      <p className="text-sm">
                        <span className="text-blue-600">Submit</span> a
                        collection of black people ideating.
                      </p>
                    </div>
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
