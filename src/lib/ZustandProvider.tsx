'use client'
import { ReactNode, createContext, useContext, useRef } from 'react'
import { useStore } from 'zustand'
import { createBoundStore, BoundStoreType } from './store'

const StoreContext = createContext<ReturnType<typeof createBoundStore> | undefined>(undefined)

export function ZustandProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<ReturnType<typeof createBoundStore> | null>(null)
  if (!storeRef.current) {
    storeRef.current = createBoundStore()
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  )
}

export function useAppStore<T>(selector: (store: BoundStoreType) => T) {
  const store = useContext(StoreContext)
  if (!store) throw new Error('useAppStore must be used within Provider')
  return useStore(store, selector)
}

/* 
Import Statements
The code begins with essential imports to establish the foundation for the application. It imports ReactNode, createContext, useContext, and useRef from React, as well as the useStore hook from zustand. Additionally, it brings in createBoundStore and BoundStoreType from a local module named store. These imports are necessary to set up the context, manage state, and provide typed access to the store created by Zustand.

Context Creation
The StoreContext is defined using React's createContext with a default value of undefined. Its type is inferred from the return type of the createBoundStore function. This ensures the context is appropriately typed to hold the Zustand store, but initially, it remains uninitialized.

ZustandProvider Component
The ZustandProvider component is a wrapper that initializes and provides the Zustand store to its children components. Inside, a useRef hook is used to hold a reference to the store, ensuring it remains stable across renders. The createBoundStore function is called only if the storeRef.current is null, preventing unnecessary re-creation of the store. The StoreContext.Provider component wraps the children, passing the store reference as the context value to make it available throughout the component tree.

useAppStore Hook
The useAppStore hook is a custom hook designed to provide easy access to the Zustand store. It accepts a selector function, allowing fine-grained selection of the required state. The hook retrieves the store from StoreContext using useContext. If the context is undefined (indicating the provider is missing), it throws an error to enforce correct usage. Finally, it leverages the Zustand useStore hook to apply the selector to the store and return the desired state.
*/