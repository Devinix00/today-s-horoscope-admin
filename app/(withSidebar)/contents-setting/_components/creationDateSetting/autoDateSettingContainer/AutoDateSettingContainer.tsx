import React, { FormEvent, useEffect } from "react";
import Setting from "../../../../../_components/setting/Setting";
import AutoDateSetting from "./AutoDateSetting";
import getFormattedSettings from "../../../../../_utils/getFormattedSettings";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../../../_constants/queryKey";
import admsAPI from "../../../../../_services/adms/api";
import useDropdownStore from "../../../../../_stores/useDropdownStore";
import useResetDropdown from "../../../../../_hooks/useResetDropdown";
import getFormattedSubmitSettings from "../../../../../_utils/getFormattedSubmitSettings";

function AutoDateSettingContainer() {
  const queryClient = useQueryClient();
  const {
    isOpenedHourDropdown,
    isOpenedMinuteDropdown,
    isOpenedDateDropdown,
    hourDropdownItem,
    minuteDropdownItem,
    dateDropdownItem,
    setMinuteDropdownItem,
    setHourDropdownItem,
    setDateDropdownItem,
  } = useDropdownStore();
  useResetDropdown();

  const accessToken = localStorage.getItem("access-token");
  const { data: autoDate } = useQuery({
    queryKey: QUERY_KEYS.adms.terms(),
    queryFn: () => admsAPI.getAdms("terms", accessToken),
  });

  const { formattedData: hour } = getFormattedSettings(
    autoDate?.data?.term_time.slice(0, 2)
  );
  const { formattedData: minute } = getFormattedSettings(
    autoDate?.data?.term_time.slice(2, 4)
  );

  const autoDateMap = {
    "0030": "30",
    "0060": "60",
    "0090": "90",
    "0120": "120",
    "0150": "150",
    "0180": "180",
  };

  const date = autoDateMap[autoDate?.data.term_date];

  useEffect(() => {
    setMinuteDropdownItem(Number(minute));
    setHourDropdownItem(Number(hour));
    setDateDropdownItem(date);
  }, [
    date,
    hour,
    minute,
    setDateDropdownItem,
    setHourDropdownItem,
    setMinuteDropdownItem,
  ]);

  const submitAutoDateMap = {
    "30": "0030",
    "60": "0060",
    "90": "0090",
    "120": "0120",
    "150": "0150",
    "180": "0180",
  };

  const submitAutoDate = submitAutoDateMap[dateDropdownItem];

  const { formattedData: submitAutoTime } = getFormattedSubmitSettings(
    Number(hourDropdownItem),
    Number(minuteDropdownItem)
  );

  const { mutate: mutateAddTemrs } = useMutation({
    mutationFn: () =>
      admsAPI.addAdmsTerms(submitAutoDate, submitAutoTime, accessToken),
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.adms.terms());
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      confirm(
        `${dateDropdownItem}일 후부터 매일 ${hourDropdownItem}시 ${minuteDropdownItem}분에 데이터가 생성됩니다.`
      )
    ) {
      alert("설정합니다.");
    } else {
      return alert("취소합니다.");
    }
    mutateAddTemrs();
  };

  return (
    <Setting onClick={handleSubmit} settingHeader="콘텐츠 자동 생성일 설정">
      <AutoDateSetting
        {...{
          hourDropdownItem,
          minuteDropdownItem,
          dateDropdownItem,
          isOpenedHourDropdown,
          isOpenedMinuteDropdown,
          isOpenedDateDropdown,
        }}
      />
    </Setting>
  );
}

export default AutoDateSettingContainer;
