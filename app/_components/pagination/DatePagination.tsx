import Image from "next/image";
import { NextArrow, PrevArrow } from "../../_images";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import contentsAPI from "../../_services/contents/api";
import useMissingDateStateStore from "../../_stores/useMissingDateStateStore";

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
  const { data } = useQuery({
    queryKey: null,
    queryFn: () => contentsAPI.getDatesWithData(),
  });
  const { setMissingDateState } = useMissingDateStateStore();
  const datesWithData = data?.data.luck_days;

  const missingDates = pageDates.filter(
    (date) => !datesWithData?.includes(date)
  );

  useEffect(() => {
    const currentPageDate = pageDates[pageNumbers.indexOf(currentPage)];
    setDate(currentPageDate);
    setMissingDateState(missingDates.includes(currentPageDate));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <div className="flex ">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-4"
      >
        <Image src={PrevArrow} alt="prev-arrow" className="min-w-4" />
      </button>

      {pageDates?.map((date, index) => (
        <div key={pageNumbers[index]} className="relative w-full">
          <button
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
          {missingDates.includes(date) && (
            <div
              className={`absolute top-1/2 right-[12px] -translate-y-1/2 w-5 h-5 flex rounded-full items-center justify-center border-[1px] ${
                currentPage === pageNumbers[index]
                  ? "border-white"
                  : "border-[#686868]"
              }`}
            >
              <p
                className={`absolute text-sm -top-[2px] ${
                  currentPage === pageNumbers[index]
                    ? "text-white"
                    : "text-[#686868]"
                }`}
              >
                x
              </p>
            </div>
          )}
        </div>
      ))}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4"
      >
        <Image src={NextArrow} alt="next-arrow" className="min-w-4" />
      </button>
    </div>
  );
}

export default DatePagination;
