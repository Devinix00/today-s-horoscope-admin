import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "./getQueryClient";
import { QUERY_KEYS } from "../_constants/queryKey";
import userAPI from "../_services/user/api";
import AdminTable from "../(withSidebar)/admin/components/AdminTable";

export default async function HydratedUserInfo() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: QUERY_KEYS.user.all(),
    queryFn: () => userAPI.getUserInfoAPI(),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <AdminTable />
    </Hydrate>
  );
}
