import React, { ChangeEvent, useRef, useState } from "react";
import TableCell from "../../../../../_components/table/TableCell";
import TableButton from "../../../../../_components/table/TableButton";

interface ZodiacContentsTableRowProps {
  zodiac: ZodiacContents;
}

function ZodiacContentsTableRow({ zodiac }: ZodiacContentsTableRowProps) {
  const [inputValue, setInputValue] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isClickedButtonMap, setIsClickedButtonMap] = useState<{
    [key: number]: boolean;
  }>({});

  const handleClickButton = (index: number, message: string) => {
    const newState = !isClickedButtonMap[index];
    setIsClickedButtonMap((prev) => ({ ...prev, [index]: newState }));

    setInputValue(message);

    if (newState) {
      setEditingIndex(index);
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 0);
    } else {
      setEditingIndex(null);
    }
  };

  return (
    <React.Fragment>
      {zodiac.messages.map((message, i) => (
        <tr key={i}>
          {i === 0 && (
            <TableCell size="sm" rowSpan={zodiac.messages.length}>
              {zodiac.attribute1}
            </TableCell>
          )}
          <TableCell size="sm">{message.attribute2}</TableCell>
          <TableCell textLeft>
            {editingIndex === i ? (
              <textarea
                ref={textareaRef}
                value={inputValue}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setInputValue(e.target.value)
                }
                className="w-full h-[80px] px-2 py-1 resize-none"
              />
            ) : (
              message.luck_msg
            )}
          </TableCell>
          <TableCell size="sm">
            <TableButton
              isClickedButton={!!isClickedButtonMap[i]}
              onClick={() => handleClickButton(i, message.luck_msg)}
            >
              {editingIndex === i && !!isClickedButtonMap[i] ? "저장" : "수정"}
            </TableButton>
          </TableCell>
        </tr>
      ))}
    </React.Fragment>
  );
}

export default ZodiacContentsTableRow;
