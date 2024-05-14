import BASE_API_URL from "../../_constants/base.api.url";

const promptAPI = {
  getPrompt: async function (category: Category) {
    const response = await fetch(`${BASE_API_URL}/prompt/${category}/`);

    const data = await response.json();
    return { data, response };
  },

  getHistory: async function (category: Category, page: number) {
    const response = await fetch(
      `${BASE_API_URL}/prompt/${category}/history/${page}/`
    );

    const data = await response.json();
    return { data, response };
  },
};

export default promptAPI;
