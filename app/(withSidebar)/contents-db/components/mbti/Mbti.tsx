import React, { useEffect, useState } from "react";
import ContentTitle from "../../../../_components/contentTitle/ContentTitle";
import DatePagination from "../../../../_components/pagination/DatePagination";
import useDatePagination from "../../../../_hooks/useDatePagination";
import PromptHistory from "../../../../_components/promptHistory/PromptHistory";
import PromptTable from "../../../../_components/promptTable/PromptTable";
import ContentsForm from "../../../../_components/contentsForm/ContentsForm";
import MbtiContentsTable from "./mbtiContentsTable/MbtiContentsTable";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../../_constants/queryKey";
import promptAPI from "../../../../_services/prompt/api";
import dayjs from "dayjs";
import contentsAPI from "../../../../_services/contents/api";
import useLoginVerification from "../../../../_hooks/useLoginVerification";
import useMissingDateStateStore from "../../../../_stores/useMissingDateStateStore";
import NoContents from "../../../../_components/noContents/NoContents";

function Mbti() {
  const { missingDateState } = useMissingDateStateStore();
  const today = dayjs().format("YYYYMMDD");
  const [date, setDate] = useState(today);
  const [isClickedHistoryButton, setIsClickedHistoryButton] = useState(false);
  const totalItems = 16 * 180;
  const itemsPerPage = 16;
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
    queryKey: QUERY_KEYS.prompt.mbti.all(),
    queryFn: () => promptAPI.getPrompt("mbti"),
  });

  useLoginVerification(prompt?.response);

  const { data: mbtiContents, refetch: refetchContents } = useQuery({
    queryKey: QUERY_KEYS.contents.categoryAll("mbti"),
    queryFn: () => contentsAPI.getContents("mbti", Number(date)),
  });

  useEffect(() => {
    refetchContents();
  }, [refetchContents, date]);
  if (prompt?.response.status === 401) return;

  return (
    <div className="relative">
      <section className="mt-10">
        <ContentTitle title="프롬프트 관리" />
        <PromptTable
          category="mbti"
          setIsClickedHistoryButton={setIsClickedHistoryButton}
          promptData={prompt?.data}
        />
      </section>
      <section className="mt-10">
        <ContentTitle title="생성 콘텐츠" />
        <ContentsForm
          {...{
            findPageFromDate,
            setCurrentPage,
            lastDate: prompt?.data.last_date,
          }}
        />
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
        {missingDateState ? (
          <NoContents />
        ) : (
          <MbtiContentsTable mbtiContents={mbtiContents?.data} />
        )}
      </section>
      {isClickedHistoryButton && (
        <PromptHistory
          type="mbti"
          setIsClickedHistoryButton={setIsClickedHistoryButton}
        />
      )}
    </div>
  );
}

export default Mbti;
