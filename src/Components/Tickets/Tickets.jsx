import React, { use, useEffect } from 'react';
import TicketCard from '../TicketCard/TicketCard';

const Tickets = ({ ticketsPromise, availableTickets, setAvailableTickets, onAddToTask }) => {
    const tickets = use(ticketsPromise)
    
    useEffect(() => {
        if (tickets && availableTickets.length === 0) {
            setAvailableTickets(tickets)
        }
    }, [tickets, availableTickets.length, setAvailableTickets])

    return (
        <div className="mx-4 mt-6 flex flex-col lg:flex-row justify-center w-[90%] lg:w-[80%]">
            <div className="w-full">
                <h2 className='font-bold text-xl'>Customer Tickets</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
                    {availableTickets.map(ticket => (
                        <TicketCard 
                            key={ticket.id}
                            ticket={ticket} 
                            onAddToTask={onAddToTask}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tickets;