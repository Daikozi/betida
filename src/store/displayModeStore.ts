import { create } from 'zustand'

type DisplayMode = {
  displayMode: 'sports' | 'casino' | null
  setDisplayMode: (displayMode: 'sports' | 'casino' | null) => void
}

export const useDisplayMode = create<DisplayMode>((set: (state: Partial<DisplayMode>) => void) => ({
  displayMode: null,
  setDisplayMode: (displayMode: 'sports' | 'casino' | null) => set({ displayMode }),
}))
