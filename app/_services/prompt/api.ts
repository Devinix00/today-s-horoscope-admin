import BASE_API_URL from "../../_constants/base.api.url";
import tokenManager from "../../_utils/tokenManager";

const promptAPI = {
  getPrompt: async function (category: Category) {
    const { accessToken } = tokenManager();
    const response = await fetch(`${BASE_API_URL}/prompt/${category}/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();
    return { data, response };
  },

  addPrompt: async function (category: Category, promptMessage: string) {
    const { accessToken } = tokenManager();
    const response = await fetch(`${BASE_API_URL}/prompt/${category}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ prompt_msg: promptMessage }),
    });

    const data = await response.json();
    return { data, response };
  },

  getHistory: async function (category: Category, page: number) {
    const { accessToken } = tokenManager();
    const response = await fetch(
      `${BASE_API_URL}/prompt/${category}/history/${page}/`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const data = await response.json();
    return { data, response };
  },
};

export default promptAPI;
