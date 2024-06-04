import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "../../getQueryClient";
import { QUERY_KEYS } from "../../../_constants/queryKey";
import promptAPI from "../../../_services/prompt/api";
import Mbti from "../../../(withSidebar)/contents-db/components/mbti/Mbti";

export default async function HydratedMbtiPrompt() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: QUERY_KEYS.prompt.mbti.all(),
    queryFn: () => promptAPI.getPrompt("mbti"),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Mbti />
    </Hydrate>
  );
}
