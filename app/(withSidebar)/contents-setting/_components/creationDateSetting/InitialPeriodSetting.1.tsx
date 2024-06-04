import React, { useState } from "react";
import getNumericValue from "../../../../_utils/getNumericValue";
import DropdownInput from "../../../../_components/dropdown/DropdownInput";

export function InitialPeriodSetting() {
  const [inputValue, setInputValue] = useState({
    from: "",
    to: "",
  });
  const { handleChange } = getNumericValue(setInputValue);

  return (
    <section>
      <section className="flex items-center gap-2">
        <DropdownInput
          inputValue={inputValue.from}
          handleChange={handleChange}
        />
        <p>부터</p>
        <DropdownInput inputValue={inputValue.to} handleChange={handleChange} />
        <p>까지</p>
      </section>
    </section>
  );
}
