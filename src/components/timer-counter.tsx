'use client'

import React, { useEffect, useState } from 'react'

export const TimerCounter = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCounter((prev) => prev + 1), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <button onClick={() => setCounter(0)} className="bg-gray-800 px-4 py-2 rounded-md text-white">
      <strong className="mr-4">{counter}</strong>
      Reset
    </button>
  )
}
