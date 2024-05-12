import BASE_API_URL from "../../../_constants/base.api.url";

const todayPromptAPI = {
  getTodayPromptAPI: async function () {
    const response = await fetch(`${BASE_API_URL}/prompt/today/`);

    const data = await response.json();
    return { data, response };
  },
};

export default todayPromptAPI;
