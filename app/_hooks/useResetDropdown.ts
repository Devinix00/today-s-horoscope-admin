import { useEffect } from "react";
import useDropdownStore from "../_stores/useDropdownStore";

function useResetDropdown() {
  const {
    setMinuteDropdownItem,
    setHourDropdownItem,
    setDateDropdownItem,
    setIsOpenedDateDropdown,
    setIsOpenedHourDropdown,
    setIsOpenedMinuteDropdown,
  } = useDropdownStore();

  useEffect(() => {
    setMinuteDropdownItem(0);
    setHourDropdownItem(0);
    setDateDropdownItem(0);
    setIsOpenedDateDropdown(false);
    setIsOpenedMinuteDropdown(false);
    setIsOpenedHourDropdown(false);
  }, [
    setDateDropdownItem,
    setHourDropdownItem,
    setIsOpenedDateDropdown,
    setIsOpenedHourDropdown,
    setIsOpenedMinuteDropdown,
    setMinuteDropdownItem,
  ]);
}

export default useResetDropdown;
