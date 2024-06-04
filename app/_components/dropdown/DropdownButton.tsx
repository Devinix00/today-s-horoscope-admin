"use client";

import React, { PropsWithChildren } from "react";
import useDropdownStore from "../../_stores/useDropdownStore";

interface DropdownButtonProps {
  type: "hour" | "minute" | "date";
  content: string;
}

function DropdownButton({
  type,
  content,
  children,
}: PropsWithChildren<DropdownButtonProps>) {
  const {
    isOpenedHourDropdown,
    setIsOpenedHourDropdown,
    isOpenedMinuteDropdown,
    setIsOpenedMinuteDropdown,
    setIsOpenedDateDropdown,
    isOpenedDateDropdown,
  } = useDropdownStore();

  const toggleDropdownButton = () => {
    if (type === "hour") setIsOpenedHourDropdown(!isOpenedHourDropdown);
    else if (type === "minute")
      setIsOpenedMinuteDropdown(!isOpenedMinuteDropdown);
    else if (type === "date") {
      setIsOpenedDateDropdown(!isOpenedDateDropdown);
    }
  };

  return (
    <div
      onClick={toggleDropdownButton}
      className="w-[140px] border-[1px] px-4 py-1 border-gray-300 rounded-lg flex justify-between items-center cursor-pointer select-none"
    >
      {content}
      {children}
    </div>
  );
}

export default DropdownButton;
