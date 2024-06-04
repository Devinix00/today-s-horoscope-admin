"use client";

import { useEffect } from "react";
import Tab from "../../../_components/tab/Tab";
import useTabStore from "../../../_stores/useTabStore";

function ContentsTabs() {
  const { tabId, setTabId } = useTabStore();

  useEffect(() => {
    setTabId(1);
  }, [setTabId]);

  return (
    <section className="table w-full border-b-[1px]">
      <Tab active={tabId === 1} tabId={1} setTabId={setTabId}>
        오늘의 한마디
      </Tab>
      <Tab active={tabId === 2} tabId={2} setTabId={setTabId}>
        띠별 운세
      </Tab>
      <Tab active={tabId === 3} tabId={3} setTabId={setTabId}>
        별자리별 운세
      </Tab>
      <Tab active={tabId === 4} tabId={4} setTabId={setTabId}>
        MBTI별 운세
      </Tab>
    </section>
  );
}

export default ContentsTabs;
