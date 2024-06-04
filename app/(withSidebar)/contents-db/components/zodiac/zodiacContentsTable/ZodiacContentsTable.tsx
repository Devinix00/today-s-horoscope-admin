import React from "react";
import ZodiacContentsTableHeader from "./ZodiacContentsTableHeader";
import ZodiacContentsTableRow from "./ZodiacContentsTableRow";

interface ZodiacContentsTableProps {
  zodiacContents: ZodiacContents[];
}

function ZodiacContentsTable({ zodiacContents }: ZodiacContentsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full leading-normal">
        <ZodiacContentsTableHeader />
        <tbody>
          {zodiacContents?.map((zodiac, i) => (
            <ZodiacContentsTableRow zodiac={zodiac} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ZodiacContentsTable;
