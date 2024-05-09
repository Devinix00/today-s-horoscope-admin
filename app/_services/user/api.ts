import BASE_API_URL from "../../_constants/base.api.url";

const userAPI = {
  getUserInfoAPI: async function () {
    const response = await fetch(`${BASE_API_URL}/admin`, {
      method: "GET",
    });

    const data = await response.json();
    return { data, response };
  },

  loginAPI: async function (LoginInputValues: LoginInputValues) {
    const response = await fetch(`${BASE_API_URL}/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(LoginInputValues),
    });

    const data = await response.json();
    return { data, response };
  },
};

export default userAPI;
