import { format } from 'date-fns'

import { type Database } from '../../database.types'
import { sleep } from '@/utils'

type Note = Database['public']['Tables']['notes']['Row']

async function fetchNotes(): Promise<Note[]> {
  await sleep(500)

  const res = await fetch(`${process.env.url}/notes?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string,
    }),
    cache: 'no-store',
    // next: { revalidate: 10 },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch notes in server')
  }

  const notes: Note[] = await res.json()
  return notes
}

export const NotesList = async () => {
  const notes = await fetchNotes()

  return (
    <div>
      <p className="my-4 pb-3 text-xl font-medium underline underline-offset-4">Notes</p>
      <ul className="m-3">
        {notes.map((note) => (
          <li key={note.id} className="border-b border-gray-100 py-2">
            <p>{note.title}</p>
            <p>
              <strong className="mr-3">Created at:</strong>
              {note && format(new Date(note.created_at), 'yyyy-MM-dd HH:mm:ss')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
