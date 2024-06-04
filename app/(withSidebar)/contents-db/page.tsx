"use client";

import React from "react";
import MainContainer from "../../_components/mainContainer/MainContainer";
import ContentsTabs from "./components/ContentsTabs";
import useTabStore from "../../_stores/useTabStore";
import Zodiac from "./components/zodiac/Zodiac";
import Star from "./components/star/Star";
import Mbti from "./components/mbti/Mbti";
import PushMsDB from "./components/pushMsDB/PushMsDB";

function Contents() {
  const { tabId } = useTabStore();

  return (
    <MainContainer>
      <ContentsTabs />
      {tabId === 1 && <PushMsDB />}
      {tabId === 2 && <Zodiac />}
      {tabId === 3 && <Star />}
      {tabId === 4 && <Mbti />}
    </MainContainer>
  );
}

export default Contents;
