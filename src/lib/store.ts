import { createStore} from 'zustand/vanilla'
import { createProductSlice, SliceProductType } from '@/lib/sliceProduct'
import { createCartSlice, SliceCartType } from '@/lib/sliceCart'

export type BoundStoreType = SliceProductType & SliceCartType

export const createBoundStore = () => {
    const store = createStore<BoundStoreType>()((set, get, store) => ({
      ...createProductSlice(set, get, store),
      ...createCartSlice(set, get, store)
    }))
    return store
  }