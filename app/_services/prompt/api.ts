import BASE_API_URL from "../../_constants/base.api.url";

const promptAPI = {
  today: {
    getPrompt: async function () {
      const response = await fetch(`${BASE_API_URL}/prompt/today/`);

      const data = await response.json();
      return { data, response };
    },
  },

  getHistory: async function (category: Category) {
    const response = await fetch(`${BASE_API_URL}/prompt/${category}/history/`);

    const data = await response.json();
    return { data, response };
  },
};

export default promptAPI;
