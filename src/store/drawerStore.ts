import { create } from 'zustand'

type DrawerState = {
  open: boolean
  setOpen: (open: boolean) => void
}

export const useDrawerStore = create<DrawerState>((set: (state: Partial<DrawerState>) => void) => ({
  open: true,
  setOpen: (open: boolean) => set({ open }),
}))
