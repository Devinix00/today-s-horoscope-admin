"use client";

import MainContainer from "../../_components/mainContainer/MainContainer";
import useTabStore from "../../_stores/useTabStore";
import PushMsTabs from "./components/PushMsTabs";
import PushMsSetting from "./components/pushMsSetting/PushMsSetting";

function PushMessage() {
  const { tabId } = useTabStore();

  return (
    <MainContainer>
      <PushMsTabs />
      {tabId === 1 && <PushMsSetting />}
    </MainContainer>
  );
}

export default PushMessage;
