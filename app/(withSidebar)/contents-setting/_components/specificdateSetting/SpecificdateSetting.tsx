import React, { FormEvent, useState } from "react";
import Setting from "../../../../_components/setting/Setting";
import DropdownInput from "../../../../_components/dropdown/DropdownInput";
import getNumericValue from "../../../../_utils/getNumericValue";
import { useMutation } from "@tanstack/react-query";
import admsAPI from "../../../../_services/adms/api";

function SpecificdateSetting() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = getNumericValue(setInputValue);

  const { mutate } = useMutation({
    mutationFn: () => admsAPI.addAdmsSpecificdate(inputValue),
    onSuccess: (data) => {
      alert(data?.data);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue) return alert("일자를 입력해주세요!");
    if (inputValue.length !== 8) return alert("정확한 일자를 입력해주세요!");
    if (confirm(`${inputValue}의 데이터를 생성하시겠습니까?`)) {
      alert("생성을 시작합니다.");
    } else {
      return alert("취소합니다.");
    }

    mutate();
    setTimeout(() => {
      setInputValue("");
    });
  };

  return (
    <React.Fragment>
      <Setting
        onClick={handleSubmit}
        settingHeader={"특정일 콘텐츠 생성"}
        settingFooterText="콘텐츠 생성 시 약 4분에서 6분정도가 소요됩니다."
      >
        <section className="flex gap-2 items-center">
          <DropdownInput inputValue={inputValue} handleChange={handleChange} />
          <p>콘텐츠를 생성합니다.</p>
        </section>
      </Setting>
    </React.Fragment>
  );
}

export default SpecificdateSetting;
