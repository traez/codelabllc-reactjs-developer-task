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

  /* 
  Imports and Dependencies
The code begins by importing the necessary modules and types. The createStore function is imported from zustand/vanilla, which enables the creation of a vanilla Zustand store without React dependency. Additionally, the code imports createProductSlice and createCartSlice along with their respective types (SliceProductType and SliceCartType) from the specified library paths. These imports provide the modular slices of state management logic, which will be combined into a single store.

BoundStoreType Definition
The BoundStoreType type is defined as a combination of SliceProductType and SliceCartType. This approach ensures type safety by specifying that the resulting store will include all the properties and methods defined in both slices. It also allows developers to leverage TypeScript’s type-checking and IntelliSense to avoid errors and improve code readability.

createBoundStore Function
The createBoundStore function encapsulates the logic for creating a Zustand store. Inside the function, createStore is invoked with a generic type parameter of BoundStoreType. The function argument (set, get, store) represents Zustand's core methods: set for updating state, get for accessing current state, and store for interacting with the store instance itself. Using the spread operator, the createProductSlice and createCartSlice functions are called and their returned state and actions are merged into a single object. This effectively combines the state and logic of both slices into a unified store.

Return Statement
The createBoundStore function concludes by returning the newly created store. This store integrates the functionality of both product and cart slices, enabling modular and scalable state management. The separation of slices promotes code reusability and clarity, while the unified store makes it convenient to manage related states in a single place.

This structure ensures that the code is modular, extensible, and easy to maintain while leveraging Zustand's powerful and minimalistic state management capabilities.
  */