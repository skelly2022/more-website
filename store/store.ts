 import {create} from "zustand";

type Store = {
  bears: number;
};

type Actions = {
  increasePopulation: () => void;
};

export const useStore = create<Store & Actions>((set) => ({
  bears: 3,
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
}));
