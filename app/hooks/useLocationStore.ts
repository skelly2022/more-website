import { create } from "zustand";

interface LocationStore {
  location: any;
  setLocation: (location: any) => void;
}

const useLocation = create<LocationStore>((set) => ({
  location: "",
  setLocation: (location) => {
    set({ location: location });
  },
}));

export default useLocation;
