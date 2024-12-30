'use client'
import { useAppStore } from "@/lib/Provider"

export default function UserProfile() {
  const { name, email, setName, setEmail } = useAppStore((state) => state)

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-bold">User Profile</h2>
      <div className="space-y-4">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            className="px-4 py-2 border rounded"
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="px-4 py-2 border rounded"
          />
        </div>
      </div>
      <div className="mt-4">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  )
}