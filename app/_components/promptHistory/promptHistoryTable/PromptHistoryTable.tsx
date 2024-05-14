import React, { Dispatch, SetStateAction } from "react";
import PromptHistoryTableRow from "./PromptHistoryTableRow";
import PromptHistoryTableHeader from "./PromptHistoryTableHeader";

interface PromptHistoryTableProps {
  setIsClickedHistoryButton: Dispatch<SetStateAction<boolean>>;
  history: History[];
}

function PromptHistoryTable({
  setIsClickedHistoryButton,
  history,
}: PromptHistoryTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full leading-normal">
        <PromptHistoryTableHeader
          setIsClickedHistoryButton={setIsClickedHistoryButton}
        />
        <tbody>
          {history?.map((history, i) => (
            <PromptHistoryTableRow key={i} history={history} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PromptHistoryTable;
