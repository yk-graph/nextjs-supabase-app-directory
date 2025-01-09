'use client'

import { useEffect, useState } from 'react'

export default function Error({ error }: { error: Error }) {
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    setErrorMessage(error.message)
  }, [error])

  return (
    <div className="h-full w-full flex justify-center items-center">
      <h2 className="text-red-500">{errorMessage}</h2>
    </div>
  )
}
