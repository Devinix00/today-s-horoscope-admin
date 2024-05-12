import Image from "next/image";
import { NextArrow, PrevArrow } from "../../_images";
import { Dispatch, SetStateAction } from "react";

interface DatePaginationProps {
  pageDates: string[];
  handlePrevious: () => void;
  handleNext: () => void;
  currentPage: number;
  pageNumbers: number[];
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
  setDate: Dispatch<SetStateAction<string>>;
}

function DatePagination({
  pageNumbers,
  pageDates,
  handleNext,
  handlePrevious,
  setCurrentPage,
  currentPage,
  totalPages,
  setDate,
}: DatePaginationProps) {
  return (
    <div className="flex ">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-4"
      >
        <Image src={PrevArrow} alt="prev-arrow" className="min-w-4" />
      </button>

      {pageDates.map((date, index) => {
        if (currentPage === pageNumbers[index]) {
          setDate(date);
        }
        return (
          <button
            key={pageNumbers[index]}
            onClick={() => {
              setCurrentPage(pageNumbers[index]);
            }}
            className={`w-full px-3 py-2 border rounded ${
              currentPage === pageNumbers[index]
                ? "bg-blue-500 text-white"
                : "bg-white"
            }`}
          >
            {date}
          </button>
        );
      })}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 "
      >
        <Image src={NextArrow} alt="next-arrow" className="min-w-4" />
      </button>
    </div>
  );
}

export default DatePagination;
