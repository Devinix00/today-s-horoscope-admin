import React, { FormEvent, useEffect } from "react";
import Setting from "../../../../_components/setting/Setting";
import DropdownButton from "../../../../_components/dropdown/DropdownButton";
import Image from "next/image";
import { Dropdown } from "../../../../_images";
import DropdownList from "../../../../_components/dropdown/DropdownList";
import DropdownItems from "../../../../_components/dropdown/DropdownItems";
import useDropdownStore from "../../../../_stores/useDropdownStore";
import useResetDropdown from "../../../../_hooks/useResetDropdown";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import admsAPI from "../../../../_services/adms/api";
import { QUERY_KEYS } from "../../../../_constants/queryKey";
import getFormattedSettings from "../../../../_utils/getFormattedSettings";
import getFormattedSubmitSettings from "../../../../_utils/getFormattedSubmitSettings";
import tokenManager from "../../../../_utils/tokenManager";
import useLoginVerification from "../../../../_hooks/useLoginVerification";

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
  const queryClient = useQueryClient();
  const { accessToken } = tokenManager();

  const { data } = useQuery({
    queryKey: QUERY_KEYS.adms.push(),
    queryFn: () => admsAPI.getAdms("push", accessToken),
  });
  const pushTime: string = data?.data.push_time;

  useLoginVerification(data?.response);

  const { formattedData: hour } = getFormattedSettings(pushTime?.slice(0, 2));
  const { formattedData: minute } = getFormattedSettings(pushTime?.slice(2, 4));

  useEffect(() => {
    setHourDropdownItem(Number(hour));
    setMinuteDropdownItem(Number(minute));
  }, [hour, minute, setHourDropdownItem, setMinuteDropdownItem]);

  const { formattedData: push_ms } = getFormattedSubmitSettings(
    hourDropdownItem,
    minuteDropdownItem
  );

  const { mutate: mutateAddPushMsSetting, data: mutateData } = useMutation({
    mutationFn: () => admsAPI.addAdmsPush(push_ms, accessToken),
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.adms.push());
    },
  });

  const handleSubbmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      confirm(
        `${hourDropdownItem}시 ${minuteDropdownItem}분으로 푸시 메세지 발송 시간을 설정하시겠습니까?`
      )
    ) {
      alert("설정합니다.");
    } else {
      return alert("취소합니다.");
    }

    mutateAddPushMsSetting();

    if (!mutateData?.response.ok) {
      alert(mutateData.data?.Error);
    }
  };
  if (data?.response.status === 401) return;
  return (
    <Setting onClick={handleSubbmit} settingHeader="발송 시간 설정">
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
