import React, { use } from 'react';
import TicketCard from '../TicketCard/TicketCard';

const Tickets = ({ ticketsPromise }) => {
    const tickets = use(ticketsPromise)
    return (
        <div className="mx-4 mt-6 flex flex-col lg:flex-row justify-center">
            <div className="">
                <h2 className='font-bold text-xl'>Customer Tickets</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
                    {tickets.map(ticket => <TicketCard ticket={ticket}></TicketCard>)}
                </div>
            </div>
        </div>
    );
};

export default Tickets;