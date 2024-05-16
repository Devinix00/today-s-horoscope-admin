import { Dispatch, SetStateAction } from "react";
import PromptTableHeader from "./PromptTableHeader";
import PromptTableRow from "./PromptTableRow";

interface PromptTableProps {
  setIsClickedHistoryButton: Dispatch<SetStateAction<boolean>>;
  promptData: Prompt;
  category: Category;
}

function PromptTable({
  setIsClickedHistoryButton,
  promptData,
  category,
}: PromptTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full leading-normal">
        <PromptTableHeader />
        <tbody>
          <PromptTableRow
            category={category}
            setIsClickedHistoryButton={setIsClickedHistoryButton}
            promptData={promptData}
          />
        </tbody>
      </table>
    </div>
  );
}

export default PromptTable;
