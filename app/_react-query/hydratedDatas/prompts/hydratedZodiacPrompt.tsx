import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "../../getQueryClient";
import { QUERY_KEYS } from "../../../_constants/queryKey";
import promptAPI from "../../../_services/prompt/api";
import Zodiac from "../../../(withSidebar)/contents/components/zodiac/Zodiac";

export default async function HydratedZodiacPrompt() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: QUERY_KEYS.prompt.zodiac.all(),
    queryFn: () => promptAPI.getPrompt("zodiac"),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Zodiac />
    </Hydrate>
  );
}
