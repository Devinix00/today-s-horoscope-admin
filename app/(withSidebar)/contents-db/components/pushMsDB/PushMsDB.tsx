import React, { useEffect, useState } from "react";
import ContentTitle from "../../../../_components/contentTitle/ContentTitle";
import DatePagination from "../../../../_components/pagination/DatePagination";
import useDatePagination from "../../../../_hooks/useDatePagination";
import PromptHistory from "../../../../_components/promptHistory/PromptHistory";
import PromptTable from "../../../../_components/promptTable/PromptTable";
import ContentsForm from "../../../../_components/contentsForm/ContentsForm";

import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../../_constants/queryKey";
import promptAPI from "../../../../_services/prompt/api";
import contentsAPI from "../../../../_services/contents/api";
import dayjs from "dayjs";
import PushMsContentsTable from "./pushMsTable/pushMsContentsTable/PushMsContentsTable";

function PushMsDB() {
  const today = dayjs().format("YYYYMMDD");
  const [date, setDate] = useState(today);
  const [isClickedHistoryButton, setIsClickedHistoryButton] = useState(false);
  const totalItems = 180;
  const itemsPerPage = 1;
  const {
    currentPage,
    handleNext,
    handlePrevious,
    pageNumbers,
    pageDates,
    setCurrentPage,
    totalPages,
    findPageFromDate,
  } = useDatePagination({
    totalItems,
    itemsPerPage,
  });
  const accessToken = localStorage.getItem("access-token");

  const { data: prompt } = useQuery({
    queryKey: QUERY_KEYS.prompt.today.all(),
    queryFn: () => promptAPI.getPrompt("today", accessToken),
  });

  const { data: todayContents, refetch: refetchContents } = useQuery({
    queryKey: QUERY_KEYS.contents.categoryAll("today"),
    queryFn: () => contentsAPI.getContents("today", Number(date), accessToken),
  });

  useEffect(() => {
    refetchContents();
  }, [date, refetchContents]);

  return (
    <div className="relative">
      <section className="mt-10">
        <ContentTitle title="프롬프트 관리" />
        <PromptTable
          category="today"
          setIsClickedHistoryButton={setIsClickedHistoryButton}
          promptData={prompt?.data}
        />
      </section>
      <section className="mt-10">
        <ContentTitle title="생성 콘텐츠" />
        <ContentsForm {...{ findPageFromDate, setCurrentPage }} />

        <DatePagination
          {...{
            pageDates,
            handleNext,
            handlePrevious,
            currentPage,
            pageNumbers,
            setCurrentPage,
            totalPages,
            setDate,
          }}
        />

        <PushMsContentsTable todayContents={todayContents?.data} />
      </section>
      {isClickedHistoryButton && (
        <PromptHistory
          type="today"
          setIsClickedHistoryButton={setIsClickedHistoryButton}
        />
      )}
    </div>
  );
}

export default PushMsDB;
