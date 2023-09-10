import React, { useContext } from 'react';
import { FaBriefcase, FaCar, FaHandshake } from 'react-icons/fa';
import knowMorePic from '../../assets/images/about/know-more.png'
import { AuthContex } from '../Providers/Authprovider';

const KnowMore = () => {
    const { theme } = useContext(AuthContex)
    return (
        <div className={`px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24 mode ${theme}`}>
            <div>
                <h1 className='font-semibold text-4xl'>Welcome to Asetta Auto's</h1>
                <p className={`mt-2 text-[#535353] mode ${theme}`}>
                    Where Car Dreams Become Reality
                </p>
                <hr className='w-24 border border-[#ef1721] mt-3' />
                <hr className='w-20 border border-[#ef1721] mt-1' />
            </div>
            <div className='mt-12 flex items-center justify-center'>
                <div className='w-2/6'>
                    <h2 className='text-lg'>We are a Trusted Name in Auto Industry</h2>
                    <h5 className={`mt-1 mb-4 text-[#181818] text-3xl font-semibold mode ${theme}`}>Visited by Million of Car Buyers Every Month!</h5>
                    <p className={`mt-6 text-[#535353] mode ${theme}`}>
                        Asetta Auto's is aliquip exd ea consequat duis lorem ipsum dolor sit amet consectetur dipis icing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
                    </p>
                    <p className={`mt-5 text-[#535353] mode ${theme}`}>
                        Slamco laboris nisi ut aliquip ex ea comdo consequat uis aute irure dolor raeprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
                <div className='w-2/6'>
                    <img src={knowMorePic} className='mx-auto' />
                </div>
                <div className='w-2/6'>
                    <div className='flex gap-3'>
                        <span className='text-4xl text-[#ef1721]'>< FaBriefcase /></span>
                        <div>
                            <h4 className='text-xl font-semibold mb-1'>10 Years in Business</h4>
                            <p className={`text-[#757575] mode ${theme}`}>
                                Asetta Auto's is nisi aliquip ea consequat duis velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat.
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-3 mt-12'>
                        <span className='text-4xl text-[#ef1721]'> < FaHandshake /> </span>
                        <div>
                            <h4 className='text-xl font-semibold mb-1'>Trusted by Auto Buyers</h4>
                            <p className={`text-[#757575] mode ${theme}`}>
                                Asetta Auto's is nisi aliquip ea consequat duis velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat.
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-3 mt-12'>
                        <span className='text-4xl text-[#ef1721]'> < FaCar /> </span>
                        <div>
                            <h4 className='text-xl font-semibold mb-1'>Affordable Auto Prices</h4>
                            <p className={`text-[#757575] mode ${theme}`}>
                                Asetta Auto's is nisi aliquip ea consequat duis velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KnowMore;