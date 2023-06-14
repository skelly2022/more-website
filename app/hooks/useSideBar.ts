import { create } from "zustand";

interface SideBarStore {
  isOpen: boolean;
  page: string;
  changePage: (page: string) => void;
  toggleSideBar: (isOpen: boolean) => void;
  sideBarOff: () => void;
}

const useSideBar = create<SideBarStore>((set) => ({
  isOpen: false,
  page: "Dashboard",
  changePage: (page) => set({ page: page }),
  toggleSideBar: (isOpen) => {
    set({ isOpen: !isOpen });
  },
  sideBarOff: () => {
    set({ isOpen: false });
  },
}));

export default useSideBar;
