"use client";

import MainContainer from "../../_components/mainContainer/MainContainer";
import useTabStore from "../../_stores/useTabStore";
import ContentsSettingTabs from "./_components/ContentsSettingTabs";
import CreationDateSetting from "./_components/creationDateSetting/CreationDateSetting";
import SpecificdateSetting from "./_components/specificdateSetting/SpecificdateSetting";

function ContentsSetting() {
  const { tabId } = useTabStore();

  return (
    <MainContainer>
      <ContentsSettingTabs />
      {tabId === 1 && <CreationDateSetting />}
      {tabId === 2 && <SpecificdateSetting />}
    </MainContainer>
  );
}

export default ContentsSetting;
