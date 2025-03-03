interface RewardBoxProps {
  img: string;
  heading: string;
  text: string;
}

export default function RewardBox({ img, heading, text }: RewardBoxProps) {
  return (
    <div className="grid gap-5 lg:w-[342px]">
      <div className="w-[88px] h-[76px]">
        <img src={img} className="w-full h-full object-contain" alt="" />
      </div>
      <div>
        <p className="lg:text-2xl text-xl font-bold leading-[28px] mb-2">{heading}</p>
        <p className="leading-4 text-[13px] font-normal">{text}</p>
      </div>
    </div>
  );
}
