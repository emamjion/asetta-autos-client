import React from 'react';
import { BsCalculator } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const CarRightSidebar = ({cars}) => {
    return (
        <div className='shadow-xl p-3 rounded'>
            {/* Social Icons */}
            <div className='mb-8'>
                <h1 className='bg-[#181818] text-white p-4 text-lg rounded text-center'>Social Links</h1>
                <div className='flex items-center gap-2 mt-4'>
                    <span className='w-8 h-8 bg-[#4267B2] cursor-pointer text-white flex items-center justify-center rounded-md'>< FaFacebookF /></span>
                    <span className='w-8 h-8 bg-[#00acee] cursor-pointer text-white flex items-center justify-center rounded-md'>< FaTwitter /></span>
                    <span className='w-8 h-8 bg-[#0072b1] cursor-pointer text-white flex items-center justify-center rounded-md'>< FaLinkedinIn /></span>
                    <span className='w-8 h-8 bg-[#cd486b] cursor-pointer text-white flex items-center justify-center rounded-md'>< FaInstagram /></span>
                </div>
            </div>
            Finance Calculator 
            <hr className='border-b my-3' />
            <div className='my-8'>
                <div className='flex items-center gap-x-2 justify-center bg-[#181818] text-white p-4 text-lg rounded'>
                    <span> < BsCalculator /> </span>
                    <h1>Finance Calculator</h1>
                </div>
                <div className='space-y-4 px-4 mt-6'>
                    <div className='font-medium'>
                        <span>Price</span>
                        <input type="text" placeholder='$24.10' className='border p-3 rounded-md w-full' />
                    </div>
                    <div>
                        <span className='font-medium'>Interest Rate</span>
                        <input type="text" placeholder='15%' className='border p-3 rounded-md w-full' />
                    </div>
                    <div>
                        <span className='font-medium'>Priod In Months</span>
                        <input type="text" placeholder='6 Months' className='border p-3 rounded-md w-full' />
                    </div>
                    <div>
                        <span className='font-medium'>Down Payment</span>
                        <input type="text" placeholder='$32.300' className='border p-3 rounded-md w-full' />
                    </div>
                    <div className='text-center'>
                        <button className='button2'>Calculate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarRightSidebar;