import { create } from "zustand";

interface useResultsStore {
  isOpen: boolean;
  results: any;
  setResults: (results: any) => void;
  onOpen: () => void;
  onClose: () => void;
}

const useResultsModal = create<useResultsStore>((set) => ({
  isOpen: false,
  results: '',
  setResults: (results) => {
    set({ results: results });
  },
  onOpen: () => set({ isOpen: true }),
  onClose: () => {
    set({ isOpen: false });
  },
}));

export default useResultsModal;
