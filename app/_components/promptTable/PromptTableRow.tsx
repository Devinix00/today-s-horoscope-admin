import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import TableCell from "../table/TableCell";
import TableButton from "../table/TableButton";
import dayjs from "dayjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import promptAPI from "../../_services/prompt/api";
import { QUERY_KEYS } from "../../_constants/queryKey";

interface PromptTableRowProps {
  setIsClickedHistoryButton: Dispatch<SetStateAction<boolean>>;
  promptData: Prompt;
  category: Category;
}

function PromptTableRow({
  setIsClickedHistoryButton,
  promptData,
  category,
}: PromptTableRowProps) {
  const queryClient = useQueryClient();
  const { mutate: addPrompt } = useMutation({
    mutationFn: (promptMessage: string) =>
      promptAPI.addPrompt(category, promptMessage),
    onSuccess: () => {
      switch (category) {
        case "today":
          queryClient.invalidateQueries(QUERY_KEYS.prompt.today.all());
          break;

        case "mbti":
          queryClient.invalidateQueries(QUERY_KEYS.prompt.mbti.all());
          break;

        case "star":
          queryClient.invalidateQueries(QUERY_KEYS.prompt.star.all());
          break;

        case "zodiac":
          queryClient.invalidateQueries(QUERY_KEYS.prompt.zodiac.all());
          break;

        default:
          break;
      }
    },
  });

  const editTextareaRef = useRef<HTMLTextAreaElement>(null);
  const [isClickedEditButton, setIsClickedEditButton] = useState(false);
  const [editTextareaValue, setEditTextareaValue] = useState("");

  useEffect(() => {
    setEditTextareaValue(promptData?.prompt_msg);
  }, [promptData]);
  const formattedDate = dayjs(promptData?.last_date).format("MM/DD");

  const handleClickEditButton = () => {
    setIsClickedEditButton(true);
    setTimeout(() => {
      editTextareaRef.current?.focus();
    }, 0);
  };

  const handleAddPrompt = (promptMessage: string) => {
    addPrompt(promptMessage);
    setIsClickedEditButton(false);
  };

  return (
    <React.Fragment>
      <tr>
        <TableCell size="sm">{formattedDate}</TableCell>
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
            onClick={() => {
              if (isClickedEditButton) {
                handleAddPrompt(editTextareaValue);
              } else {
                handleClickEditButton();
              }
            }}
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
