import { create } from "zustand";

export interface UserDataType {
  firstName: string;
  id: string;
  lastName: string;
  phoneNumber: string;
  username: string;
}

interface ModalStoreType {
  user: object | null;
  setUserData: (data: any) => void;
  signOut: () => void;
}

export const useAuthStore = create<ModalStoreType>((set) => ({
  user: JSON.parse(localStorage.getItem("user") as string) || null,
  setUserData: (data) => {
    return set({ user:{...data}  });
  },
  signOut: () => set({ user: null }),
}));

