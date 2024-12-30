import { StateCreator } from 'zustand'

export type SliceCounterType = {
  count: number
  increment: () => void
  decrement: () => void
}

export const createCounterSlice: StateCreator<SliceCounterType> = (set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 }))
})