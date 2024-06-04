import React from "react";
import Setting from "../../../../_components/setting/Setting";
import DropdownButton from "../../../../_components/dropdown/DropdownButton";
import Image from "next/image";
import { Dropdown } from "../../../../_images";
import DropdownList from "../../../../_components/dropdown/DropdownList";
import DropdownItems from "../../../../_components/dropdown/DropdownItems";
import useDropdownStore from "../../../../_stores/useDropdownStore";

function PushMsSetting() {
  const {
    isOpenedHourDropdown,
    isOpenedMinuteDropdown,
    hourDropdownItem,
    minuteDropdownItem,
  } = useDropdownStore();

  return (
    <Setting settingHeader="발송 시간 설정">
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
    </Setting>
  );
}

export default PushMsSetting;
