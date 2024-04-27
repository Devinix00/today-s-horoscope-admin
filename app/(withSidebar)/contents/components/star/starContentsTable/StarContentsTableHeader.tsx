import React from "react";
import TableHeader from "../../../../../_components/table/TableHeader";

function StarContentsTableHeader() {
  return (
    <thead>
      <tr>
        <TableHeader content="별자리" />
        <TableHeader content="기간" />
        <TableHeader content="내용" />
        <TableHeader content="" />
      </tr>
    </thead>
  );
}

export default StarContentsTableHeader;
