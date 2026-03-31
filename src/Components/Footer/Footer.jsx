import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faLinkedin,faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
       <div className="bg-black lg:w-full sm:w-[90%] ">
         <div className='px-4 lg:px-0 mt-15 pt-10 pb-10 flex flex-col lg:flex-row justify-between text-white border-b-1 border-[#E5E7EB] max-w-[100rem] mx-auto gap-4'>
            <div className="lg:w-[20rem] w-[90%]">
                <h1 className='text-2xl'>CS — Ticket System</h1>
                <p className='mt-[10px] text-[#A1A1AA] text-[1rem]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="">
                <h2 className='text-[20px]'>Company</h2>
                <ul className='text-[#A1A1AA] text-[16px]'>
                    <li>About Us</li>
                    <li>Our Misson</li>
                    <li>Contact Saled</li>
                </ul>
            </div>
            <div className="">
                <h2 className='text-[20px]'>Services</h2>
                <ul className='text-[#A1A1AA] text-[16px]'>
                    <li>Products & Services</li>
                    <li>Customer Stories</li>
                    <li>Customer Stories</li>
                </ul>
            </div>
             <div className="">
                <h2 className='text-[20px]'>Information</h2>
                <ul className='text-[#A1A1AA] text-[16px]'>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Join Us</li>
                </ul>
            </div>
            <div className="">
                <h2 className='text-[20px]'>Social Links</h2>
                <ul className='text-[#A1A1AA] text-[16px]'>
                    <li ><FontAwesomeIcon icon={faXTwitter} className='bg-white border rounded-full' /> @CS — Ticket System</li>
                    <li><FontAwesomeIcon icon={faLinkedin} /> @CS — Ticket System</li>
                    <li><FontAwesomeIcon icon={faFacebook} />@CS — Ticket System</li>
                    <li><FontAwesomeIcon icon={faEnvelope} />support@cst.com</li>
                </ul>
            </div>
            
        </div>
        <div className="text-center text-[#FAFAFA] text-[16px] py-4">
            <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
       </div>
    );
};

export default Footer;