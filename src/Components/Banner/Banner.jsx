import React from 'react';
import vector1 from '../../assets/vector1.png';

const Banner = ({ inProgressCount = 0, resolvedCount = 0 }) => {
    return (
        <div className="mt-4 flex flex-col lg:flex-row justify-between gap-4 px-4">
            <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-full lg:max-w-[44.25rem] h-[10rem] sm:h-[12rem] lg:h-[15rem] rounded-lg flex justify-center items-center relative overflow-hidden">
                <img src={vector1} alt="" className="absolute left-0 top-0 h-full opacity-40" />
                <div className="relative text-white flex flex-col items-center">
                    <p className="text-sm sm:text-base">In Progress</p>
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold">{inProgressCount}</span>
                </div>
                <img src={vector1} alt="" className="absolute right-0 top-0 h-full scale-x-[-1] opacity-40" />
            </div>
            <div className="bg-gradient-to-r from-[#54CF68] to-[#00827A] w-full lg:max-w-[44.25rem] h-[10rem] sm:h-[12rem] lg:h-[15rem] rounded-lg flex justify-center items-center relative overflow-hidden">
                <img src={vector1} alt="" className="absolute left-0 top-0 h-full opacity-40" />
                <div className="relative text-white flex flex-col items-center">
                    <p className="text-sm sm:text-base">Resolved</p>
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold">{resolvedCount}</span>
                </div>
                <img src={vector1} alt="" className="absolute right-0 top-0 h-full scale-x-[-1] opacity-40" />
            </div>
        </div>
    );
};

export default Banner;