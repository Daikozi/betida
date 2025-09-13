import { create } from "zustand";

interface DrawerState {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useDrawerStore = create<DrawerState>(
  (set: (state: Partial<DrawerState>) => void) => ({
    open: false,
    setOpen: (open: boolean) => set({ open }),
  })
);
