import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "../../getQueryClient";
import { QUERY_KEYS } from "../../../_constants/queryKey";
import promptAPI from "../../../_services/prompt/api";
import Star from "../../../(withSidebar)/contents/components/star/Star";

export default async function HydratedStarPrompt() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: QUERY_KEYS.prompt.star.all(),
    queryFn: () => promptAPI.getPrompt("star"),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Star />
    </Hydrate>
  );
}
