import Setting from "../../../../_components/setting/Setting";
import InitialPeriodSetting from "./InitialPeriodSetting";
import AutoDateSettingContainer from "./autoDateSettingContainer/AutoDateSettingContainer";

function CreationDateSetting() {
  return (
    <div>
      <AutoDateSettingContainer />

      <InitialPeriodSetting />
    </div>
  );
}

export default CreationDateSetting;
