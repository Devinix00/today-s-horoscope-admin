import React, { useState } from "react";
import ContentTitle from "../../../../_components/contentTitle/ContentTitle";
import DatePagination from "../../../../_components/pagination/DatePagination";
import useDatePagination from "../../../../_hooks/useDatePagination";
import PromptHistory from "../../../../_components/promptHistory/PromptHistory";
import PromptTable from "../../../../_components/promptTable/PromptTable";
import ContentsForm from "../../../../_components/contentsForm/ContentsForm";
import ZodiacContentsTable from "./zodiacContentsTable/ZodiacContentsTable";
import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../../_constants/queryKey";
import contentsAPI from "../../../../_services/contents/api";
import promptAPI from "../../../../_services/prompt/api";

function Zodiac() {
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

  const { data: prompt } = useQuery({
    queryKey: QUERY_KEYS.prompt.zodiac.all(),
    queryFn: () => promptAPI.getPrompt("zodiac"),
  });

  const { data: contents, refetch: refetchContents } = useQuery({
    queryKey: QUERY_KEYS.contents.categoryAll("zodiac"),
    queryFn: () => contentsAPI.getContents("zodiac", Number(date)),
  });

  return (
    <div className="relative">
      <section className="mt-10">
        <ContentTitle title="프롬프트 관리" />
        <PromptTable
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
        <ZodiacContentsTable />
      </section>
      {isClickedHistoryButton && (
        <PromptHistory setIsClickedHistoryButton={setIsClickedHistoryButton} />
      )}
    </div>
  );
}

export default Zodiac;
