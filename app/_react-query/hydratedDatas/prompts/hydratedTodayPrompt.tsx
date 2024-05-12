import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "../../getQueryClient";
import { QUERY_KEYS } from "../../../_constants/queryKey";
import PushMsDB from "../../../(withSidebar)/push-message/components/pushMsDB/PushMsDB";
import promptAPI from "../../../_services/prompt/api";

export default async function HydratedTodayPrompt() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: QUERY_KEYS.prompt.today.all(),
    queryFn: () => promptAPI.today.getPrompt(),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <PushMsDB />
    </Hydrate>
  );
}
