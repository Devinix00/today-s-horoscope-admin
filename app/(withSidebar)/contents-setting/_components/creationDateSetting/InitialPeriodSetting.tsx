import React, { useState } from "react";
import getNumericValue from "../../../../_utils/getNumericValue";
import DropdownInput from "../../../../_components/dropdown/DropdownInput";

function InitialPeriodSetting() {
  const [fromInputValue, setFromInputValue] = useState("");
  const [toInputValue, setToInputValue] = useState("");

  const fromHandleChange = getNumericValue(setFromInputValue);
  const handleChange = getNumericValue(setToInputValue);

  return (
    <section className="flex flex-col gap-2 items-center">
      <section className="flex items-center gap-2">
        <DropdownInput
          inputValue={fromInputValue}
          handleChange={fromHandleChange}
        />
        <p>부터</p>
        <DropdownInput inputValue={toInputValue} handleChange={handleChange} />
        <p>까지</p>
      </section>

      <p>콘텐츠를 자동 생성 합니다.</p>
    </section>
  );
}

export default InitialPeriodSetting;
