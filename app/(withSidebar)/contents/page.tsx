"use client";

import React from "react";
import MainContainer from "../../_components/mainContainer/MainContainer";
import ContentsTabs from "./components/ContentsTabs";
import useTabStore from "../../_stores/useTabStore";
import Zodiac from "./components/zodiac/Zodiac";
import Star from "./components/star/Star";

function Contents() {
  const { tabId } = useTabStore();

  return (
    <MainContainer>
      <ContentsTabs />
      {tabId === 1 && <Zodiac />}
      {tabId === 2 && <Star />}
      {tabId === 3 && <></>}
    </MainContainer>
  );
}

export default Contents;
