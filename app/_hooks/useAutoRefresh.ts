import { useEffect } from "react";
import tokenManager from "../_utils/tokenManager";
import userAPI from "../_services/user/api";

export default function useAutoRefresh() {
  const { refreshToken, setAccessToken } = tokenManager();

  useEffect(() => {
    const NINE_MINUTE = 1000 * 60 * 9;

    const refresh = async () => {
      const response = await userAPI.refreshAPI(refreshToken);
      setAccessToken(response.data.access);
    };

    refresh();

    const interval = setInterval(() => {
      refresh();
    }, NINE_MINUTE);

    return () => clearInterval(interval);
  }, [refreshToken, setAccessToken]);
}
