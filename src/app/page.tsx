import { Suspense } from 'react'

import { NotesList, RefreshBtn, Spinner, TimerCounter } from '@/components'

export default function Home() {
  return (
    <main>
      <div className="m-10 text-center">
        <h1 className="text-lg font-bold text-center">App Directory</h1>
        <section className="h-80 w-full overflow-y-auto">
          <Suspense fallback={<Spinner textColor={'text-red-500'} />}>
            <NotesList />
          </Suspense>
        </section>
        <section className="flex flex-col gap-y-4">
          <TimerCounter />
          <RefreshBtn />
        </section>
      </div>
    </main>
  )
}
