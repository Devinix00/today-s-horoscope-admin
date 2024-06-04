import React from "react";
import DropdownButton from "../../../../_components/dropdown/DropdownButton";
import Image from "next/image";
import { Dropdown } from "../../../../_images";
import DropdownList from "../../../../_components/dropdown/DropdownList";
import DropdownItems from "../../../../_components/dropdown/DropdownItems";
import useDropdownStore from "../../../../_stores/useDropdownStore";
import useResetDropdown from "../../../../_hooks/useResetDropdown";

function AutoDateSetting() {
  const {
    isOpenedHourDropdown,
    isOpenedMinuteDropdown,
    isOpenedDateDropdown,
    hourDropdownItem,
    minuteDropdownItem,
    dateDropdownItem,
  } = useDropdownStore();

  useResetDropdown();

  return (
    <React.Fragment>
      <section className="flex flex-col gap-2 items-center">
        <section className="flex gap-4 items-center">
          <p>매일</p>
          <section className="relative">
            <DropdownButton type="hour" content={`${hourDropdownItem}시`}>
              <Image
                src={Dropdown}
                alt="dropdown"
                className={`w-[20px] ${
                  isOpenedHourDropdown ? "rotate-180" : ""
                } transition-all select-none`}
              />
            </DropdownButton>

            {isOpenedHourDropdown && (
              <DropdownList>
                <DropdownItems type="hour" />
              </DropdownList>
            )}
          </section>

          <section className="relative">
            <DropdownButton type="minute" content={`${minuteDropdownItem}분`}>
              <Image
                src={Dropdown}
                alt="dropdown"
                className={`w-[20px] ${
                  isOpenedMinuteDropdown ? "rotate-180" : ""
                } transition-all select-none`}
              />
            </DropdownButton>

            {isOpenedMinuteDropdown && (
              <DropdownList>
                <DropdownItems type="minute" />
              </DropdownList>
            )}
          </section>
          <p>에</p>
        </section>

        <section className="flex items-center gap-4">
          <section className="relative">
            <DropdownButton type="date" content={`${dateDropdownItem}일 후`}>
              <Image
                src={Dropdown}
                alt="dropdown"
                className={`w-[20px] ${
                  isOpenedDateDropdown ? "rotate-180" : ""
                } transition-all select-none`}
              />
            </DropdownButton>

            {isOpenedDateDropdown && (
              <DropdownList>
                <DropdownItems type="date" />
              </DropdownList>
            )}
          </section>
          <p>운세가 자동 생성됩니다.</p>
        </section>
      </section>
    </React.Fragment>
  );
}

export default AutoDateSetting;
