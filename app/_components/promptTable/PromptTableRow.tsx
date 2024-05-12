import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useRef,
  useState,
} from "react";
import TableCell from "../table/TableCell";
import TableButton from "../table/TableButton";
import pushMsPrompt from "../../(withSidebar)/push-message/components/pushMsDB/pushMsTable/pushMsPromptTable/fakeData";

interface PromptTableRowProps {
  setIsClickedHistoryButton: Dispatch<SetStateAction<boolean>>;
  promptData: Prompt;
}

function PromptTableRow({
  setIsClickedHistoryButton,
  promptData,
}: PromptTableRowProps) {
  const editTextareaRef = useRef<HTMLTextAreaElement>(null);
  const [isClickedEditButton, setIsClickedEditButton] = useState(false);
  const [editTextareaValue, setEditTextareaValue] = useState(
    promptData.prompt_msg
  );

  const handleClickEditButton = () => {
    setIsClickedEditButton(!isClickedEditButton);
    setTimeout(() => {
      editTextareaRef.current?.focus();
    }, 0);
  };

  return (
    <React.Fragment>
      <tr>
        <TableCell size="sm">{pushMsPrompt.date}</TableCell>
        <TableCell size="lg" textLeft>
          {isClickedEditButton ? (
            <textarea
              ref={editTextareaRef}
              name="prompt"
              value={editTextareaValue}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setEditTextareaValue(e.target.value)
              }
              className="w-full h-[240px] resize-none"
            />
          ) : (
            promptData?.prompt_msg
          )}
        </TableCell>
        <TableCell size="sm">
          <TableButton
            isClickedButton={isClickedEditButton}
            onClick={handleClickEditButton}
          >
            {isClickedEditButton ? "저장" : "수정"}
          </TableButton>
        </TableCell>
      </tr>
      <tr>
        <TableCell />
        <TableCell />
        <TableCell size="sm">
          <TableButton blue onClick={() => setIsClickedHistoryButton(true)}>
            히스토리
          </TableButton>
        </TableCell>
      </tr>
    </React.Fragment>
  );
}

export default PromptTableRow;
