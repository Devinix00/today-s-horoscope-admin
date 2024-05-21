import React, { ChangeEvent, useRef, useState } from "react";
import TableCell from "../../../../../_components/table/TableCell";
import TableButton from "../../../../../_components/table/TableButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import contentsAPI from "../../../../../_services/contents/api";
import { QUERY_KEYS } from "../../../../../_constants/queryKey";

interface StarContentsTableRowProps {
  star: Contents;
}

function StarContentsTableRow({ star }: StarContentsTableRowProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState(star?.luck_msg);
  const [isClickedButton, setIsClickedButton] = useState(false);
  const queryClient = useQueryClient();

  const { mutate: editContents } = useMutation({
    mutationFn: ({ id, value }: { id: number; value: string }) =>
      contentsAPI.editContents({ id, value }),
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.contents.categoryAll("star"),
      });
    },
  });

  const handleClickButton = (id: number, value: string) => {
    setIsClickedButton(!isClickedButton);

    if (isClickedButton) {
      editContents({ id, value });
    } else {
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 0);
    }
  };

  return (
    <tr>
      <TableCell size="sm">{star?.attribute1}</TableCell>
      <TableCell size="sm">{star?.luck_date}</TableCell>
      <TableCell textLeft>
        {isClickedButton ? (
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setValue(e.target.value)
            }
            className="w-full h-[80px] px-2 py-1 resize-none"
          />
        ) : (
          star?.luck_msg
        )}
      </TableCell>
      <TableCell size="sm">
        <TableButton
          isClickedButton={isClickedButton}
          onClick={() => handleClickButton(star.msg_id, value)}
        >
          {isClickedButton ? "저장" : "수정"}
        </TableButton>
      </TableCell>
    </tr>
  );
}

export default StarContentsTableRow;
