import BASE_API_URL from "../../_constants/base.api.url";

const admsAPI = {
  getAdms: async (type: "push" | "terms", accessToken: string) => {
    const response = await fetch(`${BASE_API_URL}/adms/${type}/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();
    return { data, response };
  },

  addAdmsPush: async (push_time: string, accessToken: string) => {
    const response = await fetch(`${BASE_API_URL}/adms/push/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        push_time: push_time,
      }),
    });

    const data = await response.json();
    return { data, response };
  },

  addAdmsSpecificdate: async (date: string, accessToken: string) => {
    const response = await fetch(`${BASE_API_URL}/gpt/luck/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        date: date,
      }),
    });

    const data = await response.json();
    return { data, response };
  },
};

export default admsAPI;
