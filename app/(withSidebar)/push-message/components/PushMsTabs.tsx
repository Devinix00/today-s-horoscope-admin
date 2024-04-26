import { useEffect } from 'react';
import Tab from '../../../_components/tab/Tab';
import useTabStore from '../../../_stores/useTabStore';

function PushMsTabs() {
  const { tabId, setTabId } = useTabStore();
  useEffect(() => {
    setTabId(1);
  }, [setTabId]);

  return (
    <section className="table w-full border-b-[1px]">
      <Tab active={tabId === 1 && true} tabId={1} setTabId={setTabId}>
        푸시 메시지 관리
      </Tab>
      <Tab active={tabId === 2 && true} tabId={2} setTabId={setTabId}>
        오늘의 한마디 DB
      </Tab>
    </section>
  );
}

export default PushMsTabs;
