import React, { ChangeEvent, useRef, useState } from "react";
import TableCell from "../../../../../_components/table/TableCell";
import TableButton from "../../../../../_components/table/TableButton";

interface StarContentsTableRowProps {
  star: Contents;
}

function StarContentsTableRow({ star }: StarContentsTableRowProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState(star?.luck_msg);
  const [isClickedButton, setisClickedButton] = useState(false);
  const handleClickButton = () => {
    setisClickedButton(!isClickedButton);
    setTimeout(() => {
      textareaRef.current?.focus();
    }, 0);
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
          onClick={handleClickButton}
        >
          {isClickedButton ? "저장" : "수정"}
        </TableButton>
      </TableCell>
    </tr>
  );
}

export default StarContentsTableRow;
