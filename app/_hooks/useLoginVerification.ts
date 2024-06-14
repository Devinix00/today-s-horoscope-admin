import { useRouter } from "next/navigation";
import routes from "../_constants/routes";
import { useEffect } from "react";
import useLoggedInStore from "../_stores/useLoggedInStore";

export default function useLoginVerification(response) {
  const { setLoggedIn } = useLoggedInStore();
  const router = useRouter();
  useEffect(() => {
    if (response?.status === 401) {
      alert("토큰이 만료되었습니다. 다시 로그인 해 주세요.");
      setLoggedIn(false);
      router.push(routes.LOGIN);
    }
  }, [response, router, setLoggedIn]);
}
