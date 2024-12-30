'use client'
import { useCounterStore } from '@/lib/AstoreCounter'

export default function ACounter() {
  const { count, increment, decrement } = useCounterStore()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl mb-4">Counter: {count}</h1>
      <div className="space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

