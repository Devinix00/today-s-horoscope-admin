import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import PromptHistoryTable from "./promptHistoryTable/PromptHistoryTable";
import Pagination from "../pagination/Pagination";
import usePagination from "../../_hooks/usePagination";
import ContentTitle from "../contentTitle/ContentTitle";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../_constants/queryKey";
import promptAPI from "../../_services/prompt/api";

interface PromptHistoryProps {
  type: Category;
  setIsClickedHistoryButton: Dispatch<SetStateAction<boolean>>;
}

function PromptHistory({
  type,
  setIsClickedHistoryButton,
}: PromptHistoryProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: history, refetch: refetchHistory } = useQuery({
    queryKey: QUERY_KEYS.prompt.history.all(type),
    queryFn: () => promptAPI.getHistory(type, currentPage),
  });
  const totalItems = history?.data.total;
  const itemsPerPage = 4;

  const { handleNext, handlePrevious, pageNumbers, totalPages } = usePagination(
    {
      currentPage,
      setCurrentPage,
      totalItems,
      itemsPerPage,
    }
  );

  useEffect(() => {
    refetchHistory();
  }, [currentPage, refetchHistory]);

  return (
    <div className="absolute top-0 left-0 bg-white w-full h-full">
      <ContentTitle title="프롬프트 히스토리" />
      <PromptHistoryTable
        setIsClickedHistoryButton={setIsClickedHistoryButton}
        history={history?.data.prompt_msgs}
      />
      <Pagination
        {...{
          currentPage,
          handleNext,
          handlePrevious,
          totalPages,
          pageNumbers,
          setCurrentPage,
        }}
      />
    </div>
  );
}

export default PromptHistory;
