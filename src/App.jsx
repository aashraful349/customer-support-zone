import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Tickets from './Components/Tickets/Tickets'
import Task from './Components/Task/Task'

const fetchTicket = async () => {
  const res = await fetch('/tickets.json')
  return res.json()
}
const ticketsPromise = fetchTicket()
function App() {


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="flex flex-col lg:flex-row md:flex-row">
        <Suspense fallback={<div>Loading...</div>}>
          <Tickets ticketsPromise={ticketsPromise}></Tickets>
        </Suspense>
        <Task></Task>
      </div>

    </>
  )
}

export default App
