import { create } from "zustand";

interface useResultsStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useResultsModal = create<useResultsStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => {
    set({ isOpen: false });
  },
}));

export default useResultsModal;
