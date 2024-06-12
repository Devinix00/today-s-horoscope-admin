import BASE_API_URL from "../../_constants/base.api.url";

const promptAPI = {
  getPrompt: async function (category: Category, accessToken: string) {
    const response = await fetch(`${BASE_API_URL}/prompt/${category}/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();
    return { data, response };
  },

  addPrompt: async function (
    category: Category,
    promptMessage: string,
    accessToken: string
  ) {
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

  getHistory: async function (
    category: Category,
    page: number,
    accessToken: string
  ) {
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
