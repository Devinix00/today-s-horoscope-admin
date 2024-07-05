import React, { FormEvent, useState } from "react";
import getNumericValue from "../../../../_utils/getNumericValue";
import DropdownInput from "../../../../_components/dropdown/DropdownInput";
import Setting from "../../../../_components/setting/Setting";
import { useMutation } from "@tanstack/react-query";
import admsAPI from "../../../../_services/adms/api";

function InitialPeriodSetting() {
  const [fromInputValue, setFromInputValue] = useState("");
  const [toInputValue, setToInputValue] = useState("");

  const fromHandleChange = getNumericValue(setFromInputValue);
  const handleChange = getNumericValue(setToInputValue);
  const { mutate: mutateAddInitialPeriodSetting } = useMutation({
    mutationFn: () =>
      admsAPI.addInitialPeriodSetting(fromInputValue, toInputValue),
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (
        confirm(
          `${fromInputValue}부터 ${toInputValue}까지 콘텐츠를 생성합니다.`
        )
      ) {
        alert("설정합니다.");
      } else {
        return alert("취소합니다.");
      }

      mutateAddInitialPeriodSetting();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Setting onClick={handleSubmit} settingHeader="최초 콘텐츠 생성 기간 설정">
      <section className="flex flex-col gap-2 items-center">
        <section className="flex items-center gap-2">
          <DropdownInput
            inputValue={fromInputValue}
            handleChange={fromHandleChange}
          />
          <p>부터</p>
          <DropdownInput
            inputValue={toInputValue}
            handleChange={handleChange}
          />
          <p>까지</p>
        </section>

        <p>콘텐츠를 자동 생성 합니다.</p>
      </section>
    </Setting>
  );
}

export default InitialPeriodSetting;
