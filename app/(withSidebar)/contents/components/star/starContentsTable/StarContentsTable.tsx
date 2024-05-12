import React from "react";
import StarContentsTableHeader from "./StarContentsTableHeader";
import StarContentsTableRow from "./StarContentsTableRow";

interface StarContentsTableProps {
  starContents: Contents[];
}

function StarContentsTable({ starContents }: StarContentsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full leading-normal">
        <StarContentsTableHeader />
        <tbody>
          {starContents?.map((star, i) => (
            <StarContentsTableRow star={star} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StarContentsTable;
