import { create } from 'zustand'

type DisplayMode = {
  displayMode: 'sports' | 'casino' | null
  setDisplayMode: (displayMode: 'sports' | 'casino') => void
}

export const useDisplayMode = create<DisplayMode>((set: (state: Partial<DisplayMode>) => void) => ({
  displayMode: null,
  setDisplayMode: (displayMode: 'sports' | 'casino') => set({ displayMode }),
}))
