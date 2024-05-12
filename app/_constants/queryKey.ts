export const QUERY_KEYS = {
  user: {
    all: () => ["user"],
    detail: (id: number) => ["user", id],
  },

  prompt: {
    history: {
      all: () => ["history"],
      detail: (category: string) => ["history", category],
    },

    today: {
      all: () => ["today-prompt"],
      detail: (id: number) => ["today-prompt", id],
    },
  },
};