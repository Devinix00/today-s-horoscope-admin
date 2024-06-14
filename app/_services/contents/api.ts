import BASE_API_URL from "../../_constants/base.api.url";
import tokenManager from "../../_utils/tokenManager";

const contentsAPI = {
  getContents: async function (category: Category, date: number) {
    const { accessToken } = tokenManager();
    const response = await fetch(`${BASE_API_URL}/admin/${category}/${date}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();
    return { data, response };
  },

  editContents: async function ({ id, value }) {
    const { accessToken } = tokenManager();
    const response = await fetch(`${BASE_API_URL}/admin/msg/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        msg_id: id,
        luck_msg: value,
      }),
    });

    const data = await response.json();
    return { data, response };
  },

  getDashboard: async () => {
    const { accessToken } = tokenManager();
    const response = await fetch(`${BASE_API_URL}/admin/dashboard/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();
    return { data, response };
  },
};

export default contentsAPI;
