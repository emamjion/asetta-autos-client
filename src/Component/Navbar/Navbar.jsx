import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt, FaClock, FaArrowRight, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav>
            {/* Navbar first part */}
            <div className='flex bg-[#111] text-white items-center justify-evenly h-14'>
                {/* Info part */}
                <div className='flex items-center justify-center gap-6'>
                    <p className='flex items-center gap-2 text-lg'>
                        <span className='text-[#ef1721]'> < FaEnvelope /> </span>
                        <span>info@example.com</span>
                    </p>
                    <p className='flex items-center gap-2 text-lg'>
                        <span className='text-[#ef1721]'> < FaPhoneAlt /> </span>
                        <span>+2 123 456 789</span>
                    </p>
                    <p className='flex items-center gap-2 text-lg'>
                        <span className='text-[#ef1721]'> < FaClock /> </span>
                        <span>Sun - Fri(08AM - 10PM)</span>
                    </p>
                </div>
                {/* Login and social media part */}
                <div className='flex items-center justify-center gap-6'>
                    {/* Login part */}
                    <Link to='/login' className='flex items-center gap-2 text-lg hover:text-[#ef1721] duration-300'> <span> < FaArrowRight /> </span> Login</Link>
                    {/* social icon part */}
                    <div className='flex items-center justify-center gap-4 ml-6'>
                        <p>Follow Us: </p>
                        <span className='text-lg hover:text-[#ef1721] duration-300 cursor-pointer'> < FaFacebookF /> </span>
                        <span className='text-lg hover:text-[#ef1721] duration-300 cursor-pointer'> < FaTwitter /> </span>
                        <span className='text-lg hover:text-[#ef1721] duration-300 cursor-pointer'>< FaInstagram /></span>
                        <span className='text-lg hover:text-[#ef1721] duration-300 cursor-pointer'> < FaLinkedinIn /> </span>
                    </div>
                </div>
            </div>
            {/* Navbar second part */}
            <div>

            </div>
        </nav>
    );
};

export default Navbar;