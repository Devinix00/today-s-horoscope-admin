"use client";

import TableCell from "../../../_components/table/TableCell";
import TableButton from "../../table/TableButton";
import React from "react";

interface PromptHistoryTableRowProps {
  history: PromptMessage;
}

function PromptHistoryTableRow({ history }: PromptHistoryTableRowProps) {
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("히스토리가 복사되었습니다.");
    } catch (e) {
      alert("복사에 실패했습니다.");
    }
  };

  return (
    <React.Fragment>
      <tr>
        <TableCell size="sm">{history?.create_date}</TableCell>
        <TableCell textLeft size="xl">
          {history?.prompt_msg}
        </TableCell>
        <TableCell size="sm">
          <TableButton
            blue
            onClick={() => handleCopyClipBoard(history?.prompt_msg)}
          >
            복사
          </TableButton>
        </TableCell>
      </tr>
    </React.Fragment>
  );
}

export default PromptHistoryTableRow;
