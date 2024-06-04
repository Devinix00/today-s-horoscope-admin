import React from "react";
import Setting from "../../../../_components/setting/Setting";
import AutoDateSetting from "./AutoDateSetting";

function CreationDateSetting() {
  return (
    <div>
      <Setting settingHeader={"콘텐츠 자동 생성일 설정"}>
        <AutoDateSetting />
      </Setting>
      <Setting settingHeader={"최초 콘텐츠 생성 기간 설정"}>2</Setting>
    </div>
  );
}

export default CreationDateSetting;
