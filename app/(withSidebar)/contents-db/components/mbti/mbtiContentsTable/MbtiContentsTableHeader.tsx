import React from "react";
import TableHeader from "../../../../../_components/table/TableHeader";

function MbtiContentsTableHeader() {
  return (
    <thead>
      <tr>
        <TableHeader content="MBTI" />
        <TableHeader content="내용" />
        <TableHeader content="" />
      </tr>
    </thead>
  );
}

export default MbtiContentsTableHeader;
