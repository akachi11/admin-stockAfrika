import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

interface ImageBoxProps {
  imageUrl: string;
  id: string;
  name: string;
  active: { id: string };
  handleSelectFile: () => void;
}

export default function ImageBox({
  active,
  id,
  imageUrl,
  name,
  handleSelectFile,
}: ImageBoxProps) {
  const [checked, setChecked] = useState(false);
  const handleSelect = () => {
    setChecked(!checked);
    handleSelectFile();
  };
  return (
    <div className="w-[170px] cursor-pointer" onClick={handleSelect}>
      <div className="h-[111px] w-full flex flex-row bg-[#FDFDFD]">
        <div className="w-[20%] flex justify-center items-start py-2 text-accent">
          {id === active?.id ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
        </div>
        <div className="flex-1 w-full h-full">
          <img
            className="w-full h-full object-cover object-top"
            src={imageUrl}
            alt=""
          />
        </div>
        <div className="w-[20%] justify-center items-start py-2">
          <button className="w-full flex items-center justify-center">
            <BsThreeDotsVertical size={15} />
          </button>
        </div>
      </div>
      <div className="flex items-stretch justify-between mt-[15px]">
        <p className="text-xs">{name?.slice(0, 15)}...</p>
        <button className="outline-none">
          <AiOutlineEdit size={15} />
        </button>
      </div>
    </div>
  );
}
