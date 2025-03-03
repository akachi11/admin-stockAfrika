import camera from "../../assets/camera.png";
import download from "../../assets/download.png";
import RewardBox from "../../components/RewardBox";

export default function Reward(): JSX.Element {
  return (
    <section className="lg:px-[70px] lg:py-28 px-5 py-28 bg-primary_black text-white font-inter">
      <div className="lg:w-[504px]">
        <p className="lg:text-[45px] text-[40px] lg:leading-[58px] leading-[51px] font-bold">
          Get Rewarded for your Passion and Creativity
        </p>
      </div>
      <div className="mt-20 flex lg:flex-row flex-col gap-10 justify-between items-center">
        <RewardBox
          img={camera}
          heading="Hit the shutter Button"
          text="First step is gathering your images, videos or other forms of assets using either your camera / smartphone or creating interesting Afrocentric illustrations on your favourite graphic software."
        />
        <RewardBox
          img={download}
          heading="Share your work - It matters"
          text="Now that you have created a masterpiece, do not let it lay idle on your hard drive. Your masterpiece could be helpful in marketing, creative designs and showing the world how beautiful Africa is. Simply upload your work on our platform."
        />
        <RewardBox
          img={camera}
          heading="Get Recognised & Rewarded"
          text="Now that you have done work that really matter, we will reward you with points which can be converted to money, higher ranking and job opportunities. The more you contribute, the more you rank, the more rewards you get."
        />
      </div>
    </section>
  );
}
