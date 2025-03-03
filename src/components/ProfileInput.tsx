import React from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  name?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ProfileInput({
  label,
  name,
  placeholder,
  type,
  handleChange,
  value,
}: InputProps) {
  return (
    <div className="w-full">
      <label
        className="block font-semibold text-primary_black capitalize"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="border-b-2 border-[#B0B0B0] text-[##777777] bg-transparent w-full outline-none py-3 placeholder:text-sm"
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
