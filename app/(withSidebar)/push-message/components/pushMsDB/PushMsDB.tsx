import React, { useEffect, useState } from "react";
import ContentTitle from "../../../../_components/contentTitle/ContentTitle";
import DatePagination from "../../../../_components/pagination/DatePagination";
import useDatePagination from "../../../../_hooks/useDatePagination";
import PromptHistory from "../../../../_components/promptHistory/PromptHistory";
import PromptTable from "../../../../_components/promptTable/PromptTable";
import ContentsForm from "../../../../_components/contentsForm/ContentsForm";
import PushMsContentsTable from "./pushMsTable/pushMsContentsTable/PushMsContentsTable";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../../_constants/queryKey";
import promptAPI from "../../../../_services/prompt/api";
import contentsAPI from "../../../../_services/contents/api";
import dayjs from "dayjs";

function PushMsDB() {
  const today = dayjs().format("YYYYMMDD");
  const [date, setDate] = useState(today);
  const [isClickedHistoryButton, setIsClickedHistoryButton] = useState(false);
  const totalItems = 540;
  const itemsPerPage = 7;
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

  const { data: promptData } = useQuery({
    queryKey: QUERY_KEYS.prompt.today.all(),
    queryFn: () => promptAPI.today.getPrompt(),
  });

  const { data: promptHistoryData } = useQuery({
    queryKey: QUERY_KEYS.prompt.history.detail("today"),
    queryFn: () => promptAPI.getHistory("today"),
  });

  const { data: todayContentsData, refetch: refetchContents } = useQuery({
    queryKey: QUERY_KEYS.contents.categoryAll("today"),
    queryFn: () => contentsAPI.getContents("today", Number(date)),
  });

  const todayPrompt: Prompt = promptData?.data;
  const promptHistory: Prompt = promptHistoryData?.data;
  const todayContents: Contents[] = todayContentsData?.data;

  useEffect(() => {
    refetchContents();
  }, [date, refetchContents]);

  return (
    <div className="relative">
      <section className="mt-10">
        <ContentTitle title="프롬프트 관리" />
        <PromptTable
          setIsClickedHistoryButton={setIsClickedHistoryButton}
          promptData={todayPrompt}
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

        <PushMsContentsTable todayContents={todayContents} />
      </section>
      {isClickedHistoryButton && (
        <PromptHistory setIsClickedHistoryButton={setIsClickedHistoryButton} />
      )}
    </div>
  );
}

export default PushMsDB;
