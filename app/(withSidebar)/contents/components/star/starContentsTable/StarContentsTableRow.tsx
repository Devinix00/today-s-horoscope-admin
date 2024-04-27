import React, { ChangeEvent, useRef, useState } from "react";
import TableCell from "../../../../../_components/table/TableCell";
import { StarData } from "./fakeData";
import TableButton from "../../../../../_components/table/TableButton";

interface StarContentsTableRowProps {
  star: StarData;
}

function StarContentsTableRow({ star }: StarContentsTableRowProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [inputValue, setInputValue] = useState(star.contents);
  const [isClickedButton, setisClickedButton] = useState(false);
  const handleClickButton = () => {
    setisClickedButton(!isClickedButton);
    setTimeout(() => {
      textareaRef.current?.focus();
    }, 0);
  };

  return (
    <tr>
      <TableCell size="sm">{star.star}</TableCell>
      <TableCell>{star.period}</TableCell>
      <TableCell textLeft>
        {isClickedButton ? (
          <textarea
            ref={textareaRef}
            value={inputValue}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setInputValue(e.target.value)
            }
            className="w-full h-[80px] px-2 py-1 resize-none"
          />
        ) : (
          star.contents
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
