import { create } from "zustand";

type Store = {
  val: number;
};

type Actions = {
  add: () => void;
};

export const useStore = create<Store & Actions>((set) => ({
  val: 0,
  add: () => set(({ val }) => ({ val: val + 1 })),
}));
