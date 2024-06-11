"use client";

import React, { useState } from "react";
import TableCell from "../../../_components/table/TableCell";
import TableButton from "../../../_components/table/TableButton";
import dayjs from "dayjs";

interface AdminTableRowProps {
  adminUser: AdminUser;
}

function AdminTableRow({ adminUser }: AdminTableRowProps) {
  const [isClickedButton, setisClickedButton] = useState(false);
  const handleClickButton = () => {
    setisClickedButton(!isClickedButton);
  };

  const createdDate = dayjs(adminUser.create_date);
  const formattedCreatedDate = createdDate.format("YYYY-MM-DD");

  return (
    <tr>
      <TableCell>{adminUser.admins_id}</TableCell>
      <TableCell>{adminUser.email}</TableCell>
      <TableCell>{adminUser.admin_user}</TableCell>
      <TableCell>{adminUser.cell_num}</TableCell>
      <TableCell>{formattedCreatedDate}</TableCell>
      {/* <TableCell>
        <TableButton
          onClick={handleClickButton}
          isClickedButton={isClickedButton}
        >
          {isClickedButton ? "저장" : "수정"}
        </TableButton>
      </TableCell> */}
    </tr>
  );
}

export default AdminTableRow;
