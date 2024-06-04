import React, { useState } from "react";
import Setting from "../../../../_components/setting/Setting";
import DropdownInput from "../../../../_components/dropdown/DropdownInput";
import getNumericValue from "../../../../_utils/getNumericValue";

function SpecificdateSetting() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = getNumericValue(setInputValue);

  return (
    <React.Fragment>
      <Setting settingHeader={"특정일 콘텐츠 생성"}>
        <section className="flex gap-2 items-center">
          <DropdownInput inputValue={inputValue} handleChange={handleChange} />
          <p>콘텐츠를 생성합니다.</p>
        </section>
      </Setting>
    </React.Fragment>
  );
}

export default SpecificdateSetting;
