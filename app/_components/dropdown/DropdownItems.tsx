import React from "react";
import DropdownItem from "./DropdownItem";

interface DropdownItemsProps {
  type: "hour" | "minute" | "date";
}

function DropdownItems({ type }: DropdownItemsProps) {
  const hourArray = Array(24)
    .fill(null)
    .map((_, i) => i);

  const minuteArray = Array(60)
    .fill(null)
    .map((_, i) => i);

  const dateArray = Array(6)
    .fill(null)
    .map((_, i) => (i + 1) * 30);

  return (
    <React.Fragment>
      {type === "hour" &&
        hourArray.map((hour) => (
          <DropdownItem type="hour" time={hour} key={hour}>
            {hour}시
          </DropdownItem>
        ))}

      {type === "minute" &&
        minuteArray.map((minute) => (
          <DropdownItem type="minute" time={minute} key={minute}>
            {minute}분
          </DropdownItem>
        ))}

      {type === "date" &&
        dateArray.map((date) => (
          <DropdownItem type="date" time={date} key={date}>
            {date}일 후
          </DropdownItem>
        ))}
    </React.Fragment>
  );
}

export default DropdownItems;
