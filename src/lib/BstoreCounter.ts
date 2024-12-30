import { createStore } from 'zustand/vanilla'

export type CounterStoreType = {
  count: number
  increment: () => void
  decrement: () => void
}

export const createCounterStore = () => {
  return createStore<CounterStoreType>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 }))
  }))
}