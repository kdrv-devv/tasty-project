import { create } from "zustand";

interface ModalStoreType{
    authModal:boolean,
    setAuthModalVisiblity:() => void
}


export const useModalStore  = create<ModalStoreType>((set , get ) => ({
    authModal:false,
    setAuthModalVisiblity:() => set({ authModal:!get().authModal })
}))