import { useEffect } from "react";
import tokenManager from "../_utils/tokenManager";
import userAPI from "../_services/user/api";

export default function useAutoRefresh() {
  const { accessToken, refreshToken, setAccessToken } = tokenManager();

  const NINE_MINUTE = 1000 * 60 * 9;

  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await userAPI.refreshAPI(accessToken, refreshToken);

      setAccessToken(response.data.access);
    }, NINE_MINUTE);

    return () => clearInterval(interval);
  }, [NINE_MINUTE, accessToken, refreshToken, setAccessToken]);
}
