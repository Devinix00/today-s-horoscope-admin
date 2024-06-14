export default function tokenManager() {
  const accessToken = localStorage.getItem("access_token");
  const refreshToken = localStorage.getItem("refresh_token");

  const setAccessToken = (accessToken: string) => {
    localStorage.setItem("access_token", accessToken);
  };
  const setRefreshToken = (refreshToken: string) => {
    localStorage.setItem("refresh_token", refreshToken);
  };

  const removeAccessToken = () => {
    localStorage.removeItem("access_token");
  };
  const removeRefreshToken = () => {
    localStorage.removeItem("refresh_token");
  };

  return {
    accessToken,
    refreshToken,
    setAccessToken,
    setRefreshToken,
    removeAccessToken,
    removeRefreshToken,
  };
}
