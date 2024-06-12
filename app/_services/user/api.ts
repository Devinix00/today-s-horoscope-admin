import BASE_API_URL from "../../_constants/base.api.url";

const userAPI = {
  getUserInfoAPI: async function (accessToken: string) {
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
};

export default userAPI;
