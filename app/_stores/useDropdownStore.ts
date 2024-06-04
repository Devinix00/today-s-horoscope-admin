import { create } from "zustand";

interface UseDropdownStore {
  isOpenedHourDropdown: boolean;
  setIsOpenedHourDropdown: (openState: boolean) => void;

  isOpenedMinuteDropdown: boolean;
  setIsOpenedMinuteDropdown: (openState: boolean) => void;

  isOpenedDateDropdown: boolean;
  setIsOpenedDateDropdown: (openState: boolean) => void;

  hourDropdownItem: number;
  setHourDropdownItem: (newHour: number) => void;

  minuteDropdownItem: number;
  setMinuteDropdownItem: (newMinute: number) => void;

  dateDropdownItem: number;
  setDateDropdownItem: (newDate: number) => void;
}

const useDropdownStore = create<UseDropdownStore>((set) => ({
  isOpenedHourDropdown: false,
  setIsOpenedHourDropdown: (openState: boolean) =>
    set(() => ({ isOpenedHourDropdown: openState })),

  isOpenedMinuteDropdown: false,
  setIsOpenedMinuteDropdown: (openState: boolean) =>
    set(() => ({ isOpenedMinuteDropdown: openState })),

  isOpenedDateDropdown: false,
  setIsOpenedDateDropdown: (openState: boolean) =>
    set(() => ({ isOpenedDateDropdown: openState })),

  hourDropdownItem: 0,
  setHourDropdownItem: (newHour: number) =>
    set(() => ({ hourDropdownItem: newHour })),

  minuteDropdownItem: 0,
  setMinuteDropdownItem: (newMinute: number) =>
    set(() => ({ minuteDropdownItem: newMinute })),

  dateDropdownItem: 0,
  setDateDropdownItem: (newDate: number) =>
    set(() => ({ dateDropdownItem: newDate })),
}));

export default useDropdownStore;
