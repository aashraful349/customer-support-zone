import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCircle } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify'

const TicketCard = ({ ticket, onAddToTask }) => {
    const handleCardClick = () => {
        onAddToTask(ticket)
        toast.success(`${ticket.title} added to Task Status!`)
    }

    return (
        <div
            onClick={handleCardClick}
            className="bg-white border-1 shadow-xl border-gray-100 rounded-xl p-2 max-w-[32rem] mt-2 cursor-pointer hover:shadow-4xl transition-shadow"
        >
            <div className="flex justify-between">
                <h2 className='font-bold'>{ticket.title}</h2>
                <p><FontAwesomeIcon icon={faCircle} /> {ticket.status}</p>
            </div>
            <div className="text-gray-400">
                <p>{ticket.description}</p>
                <div className="flex justify-between gap-4">
                    <p>{ticket.id}</p>
                    <p>{ticket.priority}</p>
                    <p>{ticket.customer}</p>
                    <p><FontAwesomeIcon icon={faCalendar} /> {ticket.createdAt}</p>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;