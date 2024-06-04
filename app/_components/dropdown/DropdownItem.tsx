import React, { PropsWithChildren } from "react";
import useDropdownStore from "../../_stores/useDropdownStore";

interface DropdownItemProps {
  type: "hour" | "minute" | "date";
  time: number;
}

function DropdownItem({
  children,
  type,
  time,
}: PropsWithChildren<DropdownItemProps>) {
  const {
    setHourDropdownItem,
    setMinuteDropdownItem,
    setIsOpenedHourDropdown,
    setIsOpenedMinuteDropdown,
    setDateDropdownItem,
    setIsOpenedDateDropdown,
  } = useDropdownStore();

  const handleClickDropDownItem = () => {
    if (type === "hour") {
      setHourDropdownItem(time);
      setIsOpenedHourDropdown(false);
    } else if (type === "minute") {
      setMinuteDropdownItem(time);
      setIsOpenedMinuteDropdown(false);
    } else {
      setDateDropdownItem(time);
      setIsOpenedDateDropdown(false);
    }
  };

  return (
    <li
      onClick={handleClickDropDownItem}
      className="px-4 hover:underline cursor-pointer select-none"
    >
      {children}
    </li>
  );
}

export default DropdownItem;
