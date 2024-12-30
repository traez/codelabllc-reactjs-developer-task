'use client'
import { ReactNode, createContext, useContext, useRef } from 'react'
import { useStore } from 'zustand'
import { createCounterStore, CounterStoreType } from '@/lib/BstoreCounter'

const CounterContext = createContext<ReturnType<typeof createCounterStore> | undefined>(undefined)

export function ProviderCounter({ children }: { children: ReactNode }) {
  //const storeRef = useRef<ReturnType<typeof createCounterStore>>()
  const storeRef = useRef<ReturnType<typeof createCounterStore> | null>(null)
  if (!storeRef.current) {
    storeRef.current = createCounterStore()
  }

  return (
    <CounterContext.Provider value={storeRef.current}>
      {children}
    </CounterContext.Provider>
  )
}

export function useCounter<T>(selector: (store: CounterStoreType) => T) {
  const store = useContext(CounterContext)
  if (!store) throw new Error('useCounter must be used within CounterProvider')
  return useStore(store, selector)
}