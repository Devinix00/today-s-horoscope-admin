"use client";

import React from "react";
import AdminTableRow from "./AdminTableRow";
import AdminTableHeader from "./AdminTableHeader";

import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../_constants/queryKey";
import userAPI from "../../../_services/user/api";
import tokenManager from "../../../_utils/tokenManager";

function AdminTable() {
  const { accessToken } = tokenManager();
  const { data } = useQuery({
    queryKey: QUERY_KEYS.user.all(),
    queryFn: () => userAPI.getUserInfoAPI(accessToken),
  });

  const adminUsers = data?.data;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full leading-normal">
        <AdminTableHeader />
        <tbody>
          {adminUsers?.map((user) => (
            <AdminTableRow key={user.admins_id} adminUser={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTable;
