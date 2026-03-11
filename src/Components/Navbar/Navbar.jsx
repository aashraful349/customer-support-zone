import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl font-bold">CS — Ticket System</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Changelog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                        <li><button className='text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'><FontAwesomeIcon icon={faPlus} /> New Ticket</button></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;