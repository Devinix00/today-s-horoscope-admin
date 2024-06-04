import { useEffect } from "react";
import Tab from "../../../_components/tab/Tab";
import useTabStore from "../../../_stores/useTabStore";

function ContentsSettingTabs() {
  const { tabId, setTabId } = useTabStore();
  useEffect(() => {
    setTabId(1);
  }, [setTabId]);

  return (
    <section className="table w-full border-b-[1px]">
      <Tab active={tabId === 1} tabId={1} setTabId={setTabId}>
        생성일 설정
      </Tab>
      <Tab active={tabId === 2} tabId={2} setTabId={setTabId}>
        특정 일자 생성
      </Tab>
    </section>
  );
}

export default ContentsSettingTabs;
