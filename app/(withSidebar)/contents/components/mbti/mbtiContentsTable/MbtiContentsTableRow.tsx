import React, { ChangeEvent, useRef, useState } from "react";
import TableCell from "../../../../../_components/table/TableCell";
import { Mbti } from "./fakeData";
import TableButton from "../../../../../_components/table/TableButton";

interface MbtiContentsTableRowProps {
  mbti: Mbti;
}

function MbtiContentsTableRow({ mbti }: MbtiContentsTableRowProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState(mbti.contents);
  const [isClickedButton, setIsClickedButton] = useState(false);

  const handleClickButton = () => {
    setIsClickedButton(!isClickedButton);
    setTimeout(() => {
      textareaRef.current?.focus();
    }, 0);
  };

  return (
    <tr>
      <TableCell>{mbti.mbti}</TableCell>
      <TableCell textLeft>
        {isClickedButton ? (
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setValue(e.target.value)
            }
            className="w-full h-[60px] px-2 py-1 resize-none"
          />
        ) : (
          mbti.contents
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

export default MbtiContentsTableRow;
