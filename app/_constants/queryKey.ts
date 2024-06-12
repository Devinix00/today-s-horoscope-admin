export const QUERY_KEYS = {
  user: {
    all: () => ["user"],
    detail: (id: number) => ["user", id],
  },

  prompt: {
    history: {
      all: (category: Category) => ["history", category],
      detail: (category: Category, id: number) => ["history", category, id],
    },

    today: {
      all: () => ["today-prompt"],
      detail: (id: number) => ["today-prompt", id],
    },

    zodiac: {
      all: () => ["zodiac-prompt"],
      detail: (id: number) => ["zodiac-prompt", id],
    },

    star: {
      all: () => ["star-prompt"],
      detail: (id: number) => ["star-prompt", id],
    },

    mbti: {
      all: () => ["mbti-prompt"],
      detail: (id: number) => ["mbti-prompt", id],
    },
  },

  contents: {
    categoryAll: (category: Category) => [category],
    categoryDetail: (category: Category, id: number) => [category, id],
  },

  adms: {
    push: () => ["push"],
    terms: () => ["terms"],
  },
};
