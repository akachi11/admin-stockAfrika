import { useState } from "react";
import { GrFormView, GrFormViewHide } from "react-icons/gr";

interface InputProps {
  placeholder: string;
  type: string;
  value: string;
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  placeholder,
  type,
  value,
  handleChange,
  name,
}: InputProps) {
  const [hide, setHide] = useState(true);

  return (
    <div className="w-full relative">
      {type !== "password" ? (
        <input
          className="shadow px-6 py-4 border w-full rounded-3xl outline-none focus:border-accent transition-all ease-linear duration-300 bg-white"
          placeholder={placeholder}
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
        />
      ) : (
        <>
          <input
            className="shadow px-6 py-4 border w-full rounded-3xl outline-none focus:border-accent transition-all ease-linear duration-300 bg-white"
            placeholder={placeholder}
            type={hide ? type : "text"}
            value={value}
            onChange={handleChange}
            name={name}
          />
          <div className="absolute top-1/2 -translate-y-1/2 right-[18px] cursor-pointer">
            {hide ? (
              <GrFormView
                size={25}
                color="#B0B0B0"
                onClick={() => setHide(false)}
              />
            ) : (
              <GrFormViewHide
                size={25}
                color="#B0B0B0"
                onClick={() => setHide(true)}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
