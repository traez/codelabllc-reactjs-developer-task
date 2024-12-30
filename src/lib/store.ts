import { createStore} from 'zustand/vanilla'
import { createCounterSlice, SliceCounterType } from '@/lib/sliceCounter'
import { createUserSlice, SliceUserType } from '@/lib/sliceUser'

export type BoundStore = SliceCounterType & SliceUserType

export const createBoundStore = () => {
  const store = createStore<BoundStore>()((set, get, store) => ({
    ...createCounterSlice(set, get, store),
    ...createUserSlice(set, get, store)
  }))
  return store
}