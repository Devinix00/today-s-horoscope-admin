import React, { useEffect } from "react";
import Setting from "../../../../_components/setting/Setting";
import DropdownButton from "../../../../_components/dropdown/DropdownButton";
import Image from "next/image";
import { Dropdown } from "../../../../_images";
import DropdownList from "../../../../_components/dropdown/DropdownList";
import DropdownItems from "../../../../_components/dropdown/DropdownItems";
import useDropdownStore from "../../../../_stores/useDropdownStore";
import useResetDropdown from "../../../../_hooks/useResetDropdown";
import { useQuery } from "@tanstack/react-query";
import admsAPI from "../../../../_services/adms/api";
import { QUERY_KEYS } from "../../../../_constants/queryKey";
import getFormattedSettings from "../../../../_utils/getFormattedSettings";

function PushMsSetting() {
  const {
    isOpenedHourDropdown,
    isOpenedMinuteDropdown,
    hourDropdownItem,
    minuteDropdownItem,
    setHourDropdownItem,
    setMinuteDropdownItem,
  } = useDropdownStore();
  useResetDropdown();

  const accessToken = localStorage.getItem("access-token");

  const { data } = useQuery({
    queryKey: QUERY_KEYS.adms.push(),
    queryFn: () => admsAPI.getAdms("push", accessToken),
  });

  const pushTime: string = data?.data.push_time;
  const { formattedData: hour } = getFormattedSettings(pushTime?.slice(0, 2));
  const { formattedData: minute } = getFormattedSettings(pushTime?.slice(2, 4));

  useEffect(() => {
    setHourDropdownItem(Number(hour));
    setMinuteDropdownItem(Number(minute));
  }, [hour, minute, setHourDropdownItem, setMinuteDropdownItem]);

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
