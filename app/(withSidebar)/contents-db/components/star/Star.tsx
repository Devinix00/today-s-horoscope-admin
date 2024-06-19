import React, { useEffect, useState } from "react";
import ContentTitle from "../../../../_components/contentTitle/ContentTitle";
import DatePagination from "../../../../_components/pagination/DatePagination";
import useDatePagination from "../../../../_hooks/useDatePagination";
import PromptHistory from "../../../../_components/promptHistory/PromptHistory";
import PromptTable from "../../../../_components/promptTable/PromptTable";
import ContentsForm from "../../../../_components/contentsForm/ContentsForm";
import StarContentsTable from "./starContentsTable/StarContentsTable";
import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../../_constants/queryKey";
import promptAPI from "../../../../_services/prompt/api";
import contentsAPI from "../../../../_services/contents/api";
import useLoginVerification from "../../../../_hooks/useLoginVerification";
import NoContents from "../../../../_components/noContents/NoContents";
import useMissingDateStateStore from "../../../../_stores/useMissingDateStateStore";

function Star() {
  const { missingDateState } = useMissingDateStateStore();
  const today = dayjs().format("YYYYMMDD");
  const [date, setDate] = useState(today);
  const [isClickedHistoryButton, setIsClickedHistoryButton] = useState(false);
  const totalItems = 12 * 180;
  const itemsPerPage = 12;
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
    queryKey: QUERY_KEYS.prompt.star.all(),
    queryFn: () => promptAPI.getPrompt("star"),
  });

  useLoginVerification(prompt?.response);

  const { data: starContents, refetch: refetchContents } = useQuery({
    queryKey: QUERY_KEYS.contents.categoryAll("star"),
    queryFn: () => contentsAPI.getContents("star", Number(date)),
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
          category="star"
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
          <StarContentsTable starContents={starContents?.data} />
        )}
      </section>
      {isClickedHistoryButton && (
        <PromptHistory
          type="star"
          setIsClickedHistoryButton={setIsClickedHistoryButton}
        />
      )}
    </div>
  );
}

export default Star;
