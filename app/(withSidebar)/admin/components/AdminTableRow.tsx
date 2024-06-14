"use client";

import TableCell from "../../../_components/table/TableCell";

import dayjs from "dayjs";

interface AdminTableRowProps {
  adminUser: AdminUser;
}

function AdminTableRow({ adminUser }: AdminTableRowProps) {
  const createdDate = dayjs(adminUser.create_date);
  const formattedCreatedDate = createdDate.format("YYYY-MM-DD");

  return (
    <tr>
      <TableCell>{adminUser.admins_id}</TableCell>
      <TableCell>{adminUser.email}</TableCell>
      <TableCell>{adminUser.username}</TableCell>
      <TableCell>{adminUser.cell_num}</TableCell>
      <TableCell>{formattedCreatedDate}</TableCell>
    </tr>
  );
}

export default AdminTableRow;
