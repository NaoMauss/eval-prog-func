import { useState } from 'react'
import type { Session } from './types/models'
import { mockSessions } from './assets/mock-data'
import './App.css'

function App() {
  const [sessions, setSessions] = useState<Session[]>(mockSessions)

  return (
    <>
      <div>
        <h1>TP REACT PROG FUNC</h1>
      </div>
    </>
  )
}

export default App
