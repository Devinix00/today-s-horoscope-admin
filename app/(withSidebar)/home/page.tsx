"use client";

import HomeContent from "./_components/HomeContent";
import ShortcutsLink from "./_components/ShortcutsLink";
import routes from "../../_constants/routes";
import ShortcutsButton from "./_components/ShortcutsButton";
import MainContainer from "../../_components/mainContainer/MainContainer";
import dayjs from "dayjs";
import contentsAPI from "../../_services/contents/api";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../_constants/queryKey";
import useLoginVerification from "../../_hooks/useLoginVerification";

function Home() {
  const today = dayjs().format("YYYY/MM/DD");
  const { data: dashboard } = useQuery({
    queryKey: QUERY_KEYS.dashboard(),
    queryFn: () => contentsAPI.getDashboard(),
  });

  useLoginVerification(dashboard?.response);

  if (dashboard?.response.status === 401) return;
  const dashboardDate = dashboard?.data.split("").slice(0, 8).join("");
  const formattedDashboardDate = dayjs(dashboardDate).format("YYYY/MM/DD");

  return (
    <MainContainer>
      <div className="grid grid-cols-2 gap-14">
        <HomeContent title="콘텐츠 생성 현황">
          <div className="absolute top-0 h-12 flex items-center bg-blue-500 left-0 pl-4 w-full text-white">
            {today}
          </div>
          <div className="absolute top-16">
            <li>
              <span className="text-blue-500">
                {formattedDashboardDate} 생성 완료
              </span>
            </li>
          </div>
          <ShortcutsLink type={routes.CONTENTS_DB} href={routes.CONTENTS_DB} />
        </HomeContent>
        <HomeContent title="관리자 설정">
          <li>관리자 정보</li>
          <ShortcutsLink href={routes.ADMIN} />
        </HomeContent>
        <HomeContent title="통계">
          <li>방문자 통계</li>
          <li>기간 조회 가능</li>
          <ShortcutsLink href={routes.STATISTICS} />
        </HomeContent>
        <HomeContent title="기능 관리">
          <div className="flex flex-col justify-between">
            <li className="py-2 border-b-2 relative">
              <span>푸시메시지 발송시간 관리</span>
              <div className="absolute right-0 top-1/2 translate-y-[-50%]">
                <ShortcutsButton type={routes.PUSH_MESSAGE} />
              </div>
            </li>
            <li className="py-2 border-b-2 relative">
              <span>콘텐츠 생성 관리</span>
              <div className="absolute right-0 top-1/2 translate-y-[-50%]">
                <ShortcutsButton type={routes.CONTENTS_SETTING} />
              </div>
            </li>
            <li className="py-2 relative">
              <span>콘텐츠 프롬프트 관리 및 수정</span>
              <div className="absolute right-0 top-1/2 translate-y-[-50%]">
                <ShortcutsButton type={routes.CONTENTS_DB} />
              </div>
            </li>
          </div>
        </HomeContent>
      </div>
    </MainContainer>
  );
}

export default Home;
