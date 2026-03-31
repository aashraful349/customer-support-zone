import { toast } from 'react-toastify';

const Task = ({ inProgress = [], resolved = [], onCompleteTask }) => {
    const handleCompleteClick = (ticket) => {
        onCompleteTask(ticket);
        toast.success(`${ticket.title} marked as resolved!`);
    };

    return (
        <div className='mx-4 mt-6 w-[90%] lg:w-[20%]'>

            <div className="mb-8">
                <h2 className='font-semibold text-2xl text-[#34485A] mb-4'>Task Status</h2>
                <div className="space-y-3">
                    {inProgress.length === 0 ? (
                        <p className="text-gray-400">Select a ticket to add to Task Status</p>
                    ) : (
                        inProgress.map(ticket => (
                            <div key={ticket.id} className="bg-white border border-gray-100 rounded-lg p-4 shadow-md">
                                <div className="flex mb-3 flex-col">
                                    <h3 className='font-semibold text-gray-800'>{ticket.title}</h3>
                                    <button
                                        onClick={() => handleCompleteClick(ticket)}
                                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md flex items-center gap-2 transition-colors w-full h-[35px] justify-center"
                                    >
                                        Complete
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>


            <div>
                <h2 className='font-semibold text-2xl text-[#34485A] mb-4'>Resolved Task</h2>
                <div className="space-y-3">
                    {resolved.length === 0 ? (
                        <p className="text-gray-400">No resolved tasks yet.</p>
                    ) : (
                        resolved.map(ticket => (
                            <div key={ticket.id} className="bg-[#E0E7FF] border border-green-200 rounded-lg p-4 shadow-md">
                                <div className="flex justify-between items-start">
                                    <h3 className='font-semibold text-gray-800'>{ticket.title}</h3>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Task;