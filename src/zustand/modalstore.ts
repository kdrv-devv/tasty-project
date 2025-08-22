import { create } from "zustand";

interface ModalStoreType {
  authModal: boolean;
  profileModal: boolean;
  setAuthModalVisiblity: () => void;
  setProfileModalVisiblity: () => void;
}

export const useModalStore = create<ModalStoreType>((set, get) => ({
  authModal: false,
  profileModal: false,
  setAuthModalVisiblity: () => {
    console.log("IShladi");
    return set({ authModal: !get().authModal });
  },
  setProfileModalVisiblity: () => set({ profileModal: !get().profileModal }),
}));
