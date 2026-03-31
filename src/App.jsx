import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Tickets from './Components/Tickets/Tickets'
import Task from './Components/Task/Task'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const fetchTicket = async () => {
  const res = await fetch('/tickets.json')
  return res.json()
}

const ticketsPromise = fetchTicket()
function App() {
  const [inProgress, setInProgress] = useState([])
  const [resolved, setResolved] = useState([])
  const [availableTickets, setAvailableTickets] = useState([])


  const handleAddToTask = (ticket) => {
    setInProgress([...inProgress, ticket])
    setAvailableTickets(availableTickets.filter(t => t.id !== ticket.id))
  }

  const handleCompleteTask = (ticket) => {
    setInProgress(inProgress.filter(t => t.id !== ticket.id))
    setResolved([...resolved, ticket])
    setAvailableTickets(availableTickets.filter(t => t.id !== ticket.id))
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar></Navbar>
      <Banner inProgressCount={inProgress.length} resolvedCount={resolved.length}></Banner>
      <div className="flex flex-col lg:flex-row md:flex-row">
        <Suspense fallback={<div>Loading...</div>}>
          <Tickets ticketsPromise={ticketsPromise} availableTickets={availableTickets} setAvailableTickets={setAvailableTickets} onAddToTask={handleAddToTask}></Tickets>
        </Suspense>
        <Task inProgress={inProgress} resolved={resolved} onCompleteTask={handleCompleteTask}></Task>
      </div>

    </>
  )
}

export default App
