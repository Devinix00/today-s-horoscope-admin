import BASE_API_URL from "../../_constants/base.api.url";

const admsAPI = {
  getAdms: async (type: "push" | "terms", accessToken: string) => {
    const response = await fetch(`${BASE_API_URL}/adms/${type}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();
    return { data, response };
  },
};

export default admsAPI;
