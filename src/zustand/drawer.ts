import { create } from "zustand";

interface DrawerType {
  isOpen: boolean;
  drawerToggle: () => void;
}


export const useDrawerStore = create<DrawerType>((set, get) => ({
  isOpen: false,
  drawerToggle: () => set({ isOpen: !get().isOpen }),
}))


