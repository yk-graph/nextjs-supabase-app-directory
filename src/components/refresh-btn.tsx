'use client'

import { useRouter } from 'next/navigation'

export const RefreshBtn = () => {
  const router = useRouter()

  return (
    <button className="bg-gray-800 px-4 py-2 text-white rounded-md" onClick={() => router.refresh()}>
      Refresh
    </button>
  )
}
