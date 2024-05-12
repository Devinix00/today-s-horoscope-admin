import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "../../getQueryClient";
import { QUERY_KEYS } from "../../../_constants/queryKey";
import promptAPI from "../../../_services/prompt/api";
import PushMsDB from "../../../(withSidebar)/push-message/components/pushMsDB/PushMsDB";

export default async function HydratedTodayHistory() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: QUERY_KEYS.prompt.history.all("today"),
    queryFn: () => promptAPI.getHistory("today"),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <PushMsDB />
    </Hydrate>
  );
}
