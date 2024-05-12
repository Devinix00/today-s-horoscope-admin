export const QUERY_KEYS = {
  user: {
    all: () => ["user"],
    detail: (userId: number) => ["user", userId],
  },
};
