import Setting from "../../../../_components/setting/Setting";
import InitialPeriodSetting from "./InitialPeriodSetting";
import AutoDateSettingContainer from "./autoDateSettingContainer/AutoDateSettingContainer";

function CreationDateSetting() {
  return (
    <div>
      <AutoDateSettingContainer />
      <Setting settingHeader="최초 콘텐츠 생성 기간 설정">
        <InitialPeriodSetting />
      </Setting>
    </div>
  );
}

export default CreationDateSetting;
