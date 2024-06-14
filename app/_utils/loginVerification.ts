import { useRouter } from "next/router";
import routes from "../_constants/routes";

export default function useLoginVerification(response) {
  // const router = useRouter();
  if (response.status === 401) {
    alert("토큰이 만료되었습니다. 다시 로그인 해 주 세요.");
    // return router.push(routes.LOGIN);
  }
}
