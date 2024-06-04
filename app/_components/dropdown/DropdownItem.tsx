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

  const clickDropdownItemMap = {
    hour: () => {
      setHourDropdownItem(time);
      setIsOpenedHourDropdown(false);
    },
    minute: () => {
      setMinuteDropdownItem(time);
      setIsOpenedMinuteDropdown(false);
    },
    date: () => {
      setDateDropdownItem(time);
      setIsOpenedDateDropdown(false);
    },
  };

  const handleClickDropdownItem = clickDropdownItemMap[type];

  return (
    <li
      onClick={handleClickDropdownItem}
      className="px-4 hover:underline cursor-pointer select-none"
    >
      {children}
    </li>
  );
}

export default DropdownItem;
