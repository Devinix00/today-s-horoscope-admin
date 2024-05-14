import { Dispatch, SetStateAction } from "react";
import getVisiblePages from "../_utils/getVisiblePages";

interface UsePaginationProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalItems: number;
  itemsPerPage: number;
}

function usePagination({
  currentPage,
  setCurrentPage,
  totalItems,
  itemsPerPage,
}: UsePaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageNumbers: number[] = [];
  const visiblePages = 9;

  const { startPage, endPage } = getVisiblePages(
    visiblePages,
    currentPage,
    totalPages
  );

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return {
    pageNumbers,
    totalPages,
    currentPage,
    setCurrentPage,
    handlePrevious,
    handleNext,
  };
}

export default usePagination;
