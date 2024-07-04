import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UseLoggedInStore {
  loggedIn: boolean;
  setLoggedIn: (authState: boolean) => void;
}

const useLoggedInStore = create(
  persist<UseLoggedInStore>(
    (set, _get) => ({
      loggedIn: false,
      setLoggedIn: (authState: boolean) => set(() => ({ loggedIn: authState })),
    }),
    {
      name: "login-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useLoggedInStore;
