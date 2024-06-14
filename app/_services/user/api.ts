import BASE_API_URL from "../../_constants/base.api.url";
import tokenManager from "../../_utils/tokenManager";

const userAPI = {
  getUserInfoAPI: async function () {
    const { accessToken } = tokenManager();

    const response = await fetch(`${BASE_API_URL}/admin/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();
    return { data, response };
  },

  loginAPI: async function (loginInputValues: LoginInputValues) {
    const response = await fetch(`${BASE_API_URL}/admin/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: loginInputValues.admin_id,
        password: loginInputValues.admin_pw,
      }),
    });

    const data = await response.json();
    return { data, response };
  },

  refreshAPI: async function (refreshToken: string) {
    const response = await fetch(`${BASE_API_URL}/admin/refresh/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: refreshToken,
      }),
    });

    const data = await response.json();
    return { data, response };
  },
};

export default userAPI;
