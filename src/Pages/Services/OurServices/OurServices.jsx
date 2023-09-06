import React from 'react';
import { FaHandshake, FaKey, FaLock, FaShippingFast } from 'react-icons/fa';
import { RiOilFill } from "react-icons/ri";
import { TbAirConditioning } from "react-icons/tb";
import { MdCarRepair } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const OurServices = () => {
    return (
        <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24'>
            <div className='text-center'>
                <h1 className='text-3xl font-semibold mb-5'>Our Services</h1>
                <hr className='w-28  border-[#ef1721] border mx-auto' />
                <hr className='w-24 mt-1 mb-5 border-[#ef1721] border mx-auto' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='border p-8 flex gap-4 shadow-md rounded hover:bg-[#ef1721] duration-500 hover:text-white custom-hover'>
                    <div className=''>
                        <span className='text-6xl text-[#ef1721] hover-icon'>< FaShippingFast /></span>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold mb-2'>Super Fast</h2>
                        <p className='tex-[#535353]'>
                            A super-fast service in the context of a car-selling website refers to providing exceptionally quick and efficient solutions to users, making the car-buying or selling process as seamless as possible. 
                        </p>
                    </div>
                </div>
                <div className='border p-8 flex gap-4 shadow-md rounded hover:bg-[#ef1721] duration-500 hover:text-white custom-hover'>
                    <span className='text-6xl text-[#ef1721] hover-icon'>< RiOilFill /></span>
                    <div>
                        <h2 className='text-2xl font-semibold mb-2'>Oil Change</h2>
                        <p className='tex-[#535353]'>
                            Oil change services offered on a car selling website typically involve providing information and resources related to vehicle maintenance, including oil changes. 
                        </p>
                    </div>
                </div>
                <div className='border p-8 flex gap-4 shadow-md rounded hover:bg-[#ef1721] duration-500 hover:text-white custom-hover'>
                    <span className='text-6xl text-[#ef1721] hover-icon'>< TbAirConditioning /></span>
                    <div>
                        <h2 className='text-2xl font-semibold mb-2'>Air Conditioning</h2>
                        <p className='tex-[#535353]'>
                            Offering air conditioning (AC) services on a car-selling website can be a valuable addition to enhance the overall user experience and provide comprehensive support to customers.  
                        </p>
                    </div>
                </div>
                <div className='border p-8 flex gap-4 shadow-md rounded hover:bg-[#ef1721] duration-500 hover:text-white custom-hover'>
                    <span className='text-6xl'>< FaKey /></span>
                    <div>
                        <h2 className='text-2xl font-semibold mb-2'>Dealership</h2>
                        <p className='tex-[#535353]'>
                            Dealership services on a car selling website refer to the various offerings and features provided to both car dealerships and individual sellers to facilitate the buying and selling of vehicles through the platform.
                        </p>
                    </div>
                </div>
                <div className='border p-8 flex gap-4 shadow-md rounded hover:bg-[#ef1721] duration-500 hover:text-white custom-hover'>
                    <span className='text-6xl'>< MdCarRepair /></span>
                    <div>
                        <h2 className='text-2xl font-semibold mb-2'>Repairing</h2>
                        <p className='tex-[#535353]'>
                            Repairing services on a car selling website typically refer to the features and options available for customers to access vehicle repair and maintenance services. 
                        </p>
                    </div>
                </div>
                <div className='border p-8 flex gap-4 shadow-md rounded hover:bg-[#ef1721] duration-500 hover:text-white custom-hover'>
                    <span className='text-6xl'>< FaHandshake /></span>
                    <div>
                        <h2 className='text-2xl font-semibold mb-2'>Trusted Agents</h2>
                        <p className='tex-[#535353]'>
                            Trusted agents services on a car selling website typically refer to features or programs that help buyers and sellers connect with reputable and reliable intermediaries or agents who can assist with various aspects of the car buying or selling process. 
                        </p>
                    </div>
                </div>
                <div className='border p-8 flex gap-4 shadow-md rounded hover:bg-[#ef1721] duration-500 hover:text-white custom-hover'>
                    <span className='text-6xl'>< FaLock /></span>
                    <div>
                        <h2 className='text-2xl font-semibold mb-2'>Security</h2>
                        <p className='tex-[#535353]'>
                            Security services on a car selling website are crucial to ensuring a safe and secure environment for both buyers and sellers when conducting transactions related to vehicle purchases.
                        </p>
                    </div>
                </div>
                <div className='border p-8 flex gap-4 shadow-md rounded hover:bg-[#ef1721] hover:text-white duration-500 custom-hover'>
                    <span className='text-6xl'>< BiSupport /></span>
                    <div>
                        <h2 className='text-2xl font-semibold mb-2'>Free Support</h2>
                        <p className='tex-[#535353]'>
                            Free support services on a car selling website are designed to assist users, both buyers and sellers, with various aspects of the vehicle purchasing process without incurring additional costs. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;