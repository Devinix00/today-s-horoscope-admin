import React, { ChangeEvent } from "react";

interface DropdownInputProps {
  inputValue: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function DropdownInput({ inputValue, handleChange }: DropdownInputProps) {
  return (
    <input
      type="text"
      placeholder="YYYYMMDD"
      maxLength={8}
      value={inputValue}
      onChange={handleChange}
      className="w-[140px] border-[1px] outline-none px-4 py-1 border-gray-300 rounded-lg flex justify-between items-center cursor-pointer select-none"
    />
  );
}

export default DropdownInput;
