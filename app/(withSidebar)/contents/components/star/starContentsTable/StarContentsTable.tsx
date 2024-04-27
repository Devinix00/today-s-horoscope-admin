import React from "react";
import StarContentsTableHeader from "./StarContentsTableHeader";
import StarContentsTableRow from "./StarContentsTableRow";
import starData from "./fakeData";

function StarContentsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full leading-normal">
        <StarContentsTableHeader />
        <tbody>
          {starData.map((star, i) => (
            <StarContentsTableRow star={star} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StarContentsTable;
