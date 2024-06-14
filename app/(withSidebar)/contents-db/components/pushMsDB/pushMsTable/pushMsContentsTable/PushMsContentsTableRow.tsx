import React, { ChangeEvent, useRef, useState } from "react";
import TableCell from "../../../../../../_components/table/TableCell";
import TableButton from "../../../../../../_components/table/TableButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import contentsAPI from "../../../../../../_services/contents/api";
import { QUERY_KEYS } from "../../../../../../_constants/queryKey";
import tokenManager from "../../../../../../_utils/tokenManager";

interface ContentsTableRowProps {
  content: Contents;
  index: number;
}

function PushMsContentsTableRow({ content, index }: ContentsTableRowProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState(content?.luck_msg);
  const [isClickedButton, setIsClickedButton] = useState(false);
  const queryClient = useQueryClient();
  const { accessToken } = tokenManager();

  const { mutate: editContents } = useMutation({
    mutationFn: ({ id, value }: { id: number; value: string }) =>
      contentsAPI.editContents({ id, value, accessToken }),
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.contents.categoryAll("today"),
      });
    },
  });

  const handleClickButton = (id: number, value: string) => {
    setIsClickedButton(!isClickedButton);

    if (isClickedButton) {
      editContents({ id, value });
    } else {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  };

  return (
    <tr>
      <TableCell size="sm">{index + 1}</TableCell>
      <TableCell textLeft>
        {isClickedButton ? (
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
            className="w-full px-2 py-1"
          />
        ) : (
          content?.luck_msg
        )}
      </TableCell>
      <TableCell size="sm">
        <TableButton
          isClickedButton={isClickedButton}
          onClick={() => handleClickButton(content.msg_id, inputValue)}
        >
          {isClickedButton ? "저장" : "수정"}
        </TableButton>
      </TableCell>
    </tr>
  );
}

export default PushMsContentsTableRow;
