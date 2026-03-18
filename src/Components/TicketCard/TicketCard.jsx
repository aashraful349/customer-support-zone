import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar,faCircle } from '@fortawesome/free-solid-svg-icons'
const TicketCard = ({ ticket }) => {
    return (
        <div className="bg-white border-1 shadow-xl border-gray-100 rounded-xl p-2 mx-4 max-w-[32rem] mt-2">
                <div className="flex justify-between">
                    <h2 className='font-bold'>{ticket.title}</h2>
                    <p><FontAwesomeIcon icon={faCircle} /> {ticket.status}</p>
                </div>
                <div className="text-gray-400">
                    <p>{ticket.description}</p>
                <div className="flex justify-between gap-4">
                    <p>{ticket.id}</p>
                    <p>{ticket.priority}</p>
                    <p>{ticket.customerName}</p>
                    <p><FontAwesomeIcon icon={faCalendar} />{ticket.createdAt}</p>
                </div>
                </div>
            </div>
    );
};

export default TicketCard;