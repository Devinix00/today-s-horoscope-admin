import React from "react";
import HomeContent from "./_components/HomeContent";
import ShortcutsLink from "./_components/ShortcutsLink";
import routes from "../../_constants/routes";
import ShortcutsButton from "./_components/ShortcutsButton";
import MainContainer from "../../_components/mainContainer/MainContainer";

function Home() {
  return (
    <MainContainer>
      <div className="grid grid-cols-2 gap-14">
        <HomeContent title="콘텐츠 생성 현황">
          <li>2024/08/15 생성 완료</li>
          <ShortcutsLink type={routes.CONTENTS_DB} href={routes.CONTENTS_DB} />
        </HomeContent>
        <HomeContent title="관리자 설정">
          <li>관리자 관리 및 정보 수정</li>
          <ShortcutsLink href={routes.ADMIN} />
        </HomeContent>
        <HomeContent title="통계">
          <li>방문자 통계</li>
          <li>기간 조회 가능</li>
          <ShortcutsLink href={routes.STATISTICS} />
        </HomeContent>
        <HomeContent title="기능 관리">
          <div className="flex flex-col justify-between">
            <li className="pb-2 border-b-2 flex items-center justify-between">
              <p>푸시메시지 발송시간 관리</p>
              <ShortcutsButton type={routes.PUSH_MESSAGE} />
            </li>
            <li className="py-2 border-b-2 flex items-center justify-between">
              <p>콘텐츠 생성 관리</p>
              <ShortcutsButton type={routes.CONTENTS_SETTING} />
            </li>
            <li className="py-2 flex items-center justify-between">
              <p>콘텐츠 프롬프트 관리 및 수정</p>
              <ShortcutsButton type={routes.CONTENTS_DB} />
            </li>
          </div>
        </HomeContent>
      </div>
    </MainContainer>
  );
}

export default Home;
