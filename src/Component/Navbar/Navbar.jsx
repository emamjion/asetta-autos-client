import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt, FaClock, FaArrowRight, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaSearch, FaCartPlus } from "react-icons/fa";
import logo from '../../assets/images/logo/logo.png';
import { AuthContex } from '../Providers/Authprovider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContex)

    const handleLogOut = () => {
        logOut()
            .then()
    }

    return (
        <nav>
            {/* Navbar first part */}
            <div className='flex bg-[#111] text-white items-center justify-between px-[240px] h-14'>
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
                    {user ? <>
                        <Link onClick={handleLogOut} className='flex items-center gap-2 text-lg hover:text-[#ef1721] duration-300'> <span> < FaArrowRight /> </span> Logout</Link>
                    </> :
                        <>
                            <Link to='/login' className='flex items-center gap-2 text-lg hover:text-[#ef1721] duration-300'> <span> < FaArrowRight /> </span> Login</Link>
                        </>

                    }
                    {/* social icon part */}
                    <div className='flex items-center justify-center gap-4 ml-6'>
                        <p>Follow Us: </p>
                        <span className='text-lg hover:text-[#ef1721] duration-500 cursor-pointer'> < FaFacebookF /> </span>
                        <span className='text-lg hover:text-[#ef1721] duration-500 cursor-pointer'> < FaTwitter /> </span>
                        <span className='text-lg hover:text-[#ef1721] duration-500 cursor-pointer'>< FaInstagram /></span>
                        <span className='text-lg hover:text-[#ef1721] duration-500 cursor-pointer'> < FaLinkedinIn /> </span>
                    </div>
                </div>
            </div>
            {/* Navbar second part */}
            <div className='flex items-center justify-between mx-[240px]'>
                <div className='flex items-center justify-center'>
                    <img src={logo} className='h-32 w-32' />
                    <h2 className='text-2xl text-[#111] font-semibold -ml-4'>Asetta Auto&apos;s</h2>
                </div>
                <ul className='flex items-center justify-center gap-10 text-lg font-medium text-[#111]'>
                    <li>
                        <NavLink className='hover:text-[#ef1721] duration-500' to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='hover:text-[#ef1721] duration-500' to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink className='hover:text-[#ef1721] duration-500' to='/services'>Services</NavLink>
                    </li>
                    <li>
                        <NavLink className='hover:text-[#ef1721] duration-500' to='/blog'>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink className='hover:text-[#ef1721] duration-500' to='/contact'>Contact</NavLink>
                    </li>
                </ul>
                <div className='flex items-center justify-center gap-4 text-lg'>
                    <span className='text-[#111] hover:text-[#ef1721] cursor-pointer duration-500'> < FaCartPlus /> </span>
                    <span className='text-[#111] hover:text-[#ef1721] cursor-pointer duration-500'> < FaSearch /> </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;