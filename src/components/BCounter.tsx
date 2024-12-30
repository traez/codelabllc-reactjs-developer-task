"use client";
import { useCounter } from "@/lib/BProviderCounter";

export default function Home() {
  const { count, increment, decrement } = useCounter((state) => state);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">Nextjs Count: {count}</h1>
      <div className="space-x-4">
        <button
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
