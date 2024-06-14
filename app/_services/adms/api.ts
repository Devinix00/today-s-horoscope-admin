import BASE_API_URL from "../../_constants/base.api.url";
import tokenManager from "../../_utils/tokenManager";

const admsAPI = {
  getAdms: async (type: "push" | "terms") => {
    const { accessToken } = tokenManager();
    const response = await fetch(`${BASE_API_URL}/adms/${type}/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();
    return { data, response };
  },

  addAdmsPush: async (push_time: string) => {
    const { accessToken } = tokenManager();
    const response = await fetch(`${BASE_API_URL}/adms/push/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        push_time: push_time,
      }),
    });

    const data = await response.json();
    return { data, response };
  },

  addAdmsSpecificdate: async (date: string) => {
    const { accessToken } = tokenManager();
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

  addAdmsTerms: async (term_date: string, term_time: string) => {
    const { accessToken } = tokenManager();
    const response = await fetch(`${BASE_API_URL}/adms/terms/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        term_date: term_date,
        term_time: term_time,
      }),
    });

    const data = await response.json();
    return { data, response };
  },
};

export default admsAPI;
