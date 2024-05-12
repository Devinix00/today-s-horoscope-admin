import BASE_API_URL from "../../_constants/base.api.url";

const contentsAPI = {
  getContents: async function (category: Category, date: number) {
    const response = await fetch(`${BASE_API_URL}/admin/${category}/${date}/`);

    const data = await response.json();
    return { data, response };
  },
};

export default contentsAPI;
