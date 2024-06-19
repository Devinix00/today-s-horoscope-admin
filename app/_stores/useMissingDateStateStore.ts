import { create } from "zustand";

interface useMissingDateStateStore {
  missingDateState: boolean;
  setMissingDateState: (state: boolean) => void;
}

const useMissingDateStateStore = create<useMissingDateStateStore>((set) => ({
  missingDateState: false,
  setMissingDateState: (state: boolean) =>
    set(() => ({ missingDateState: state })),
}));

export default useMissingDateStateStore;
