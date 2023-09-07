import React from 'react';
import specialService from '../../assets/images/Services/special-service.png'
import { BsDot } from 'react-icons/bs';

const SpecialServices = () => {
    return (
        <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4 bg-[#f7f7f7] p-4 md:p-16'>
                <div>
                    <div className='mb-10 text-justify flex gap-2 justify-end flex-row-reverse'>
                        <span className='text-xl w-4 h-4 border rounded-full flex items-center justify-center text-[#ef1721] border-[#ef1721] mt-2'> < BsDot /> </span>
                        <div>
                            <h1 className='font-semibold text-xl mb-2 hover:text-[#ef1721] duration-500 cursor-pointer'>Experience support team</h1>
                            <p className='text-[#535353]'>
                                The experience support team of a car selling website plays a crucial role in ensuring that users have a positive and hassle-free experience when buying or selling cars on the platform.
                            </p>
                        </div>
                    </div>
                    <div className='mb-10 text-justify flex gap-2 justify-end flex-row-reverse'>
                        <span className='text-xl w-4 h-4 border rounded-full flex items-center justify-center text-[#ef1721] border-[#ef1721] mt-2'> < BsDot /> </span>
                        <div>
                            <h1 className='font-semibold text-xl mb-2 hover:text-[#ef1721] duration-500 cursor-pointer'>Handle emergency situations</h1>
                            <p className='text-[#535353]'>
                            Handling emergency situations on a car selling website is critical to ensure the safety and security of users and the smooth operation of the platform.
                            </p>
                        </div>
                    </div>
                    <div className='mb-10 text-justify flex gap-2 justify-end flex-row-reverse'>
                        <span className='text-xl w-4 h-4 border rounded-full flex items-center justify-center text-[#ef1721] border-[#ef1721] mt-2'> < BsDot /> </span>
                        <div>
                            <h1 className='font-semibold text-xl mb-2 hover:text-[#ef1721] duration-500 cursor-pointer'>Insurance Included</h1>
                            <p className='text-[#535353]'>
                                Offering insurance as part of a car selling website can add value to the platform and provide peace of mind to users. 
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={specialService} />
                </div>
                <div>
                    <div className='mb-10 flex gap-2 text-justify'>
                        <span className='text-xl w-4 h-4 border rounded-full flex items-center justify-center text-[#ef1721] border-[#ef1721] mt-2'> < BsDot /> </span>
                        <div>
                            <h1 className='font-semibold text-xl mb-2 hover:text-[#ef1721] duration-500 cursor-pointer'> Hight technology instrument</h1>
                            <p className='text-[#535353]'>
                                High technology instruments and features on a car selling website can greatly enhance the user experience, security, and efficiency of the platform.
                            </p>
                        </div>
                    </div>
                    <div className='mb-10 flex gap-2 text-justify'>
                        <span className='text-xl w-4 h-4 border rounded-full flex items-center justify-center text-[#ef1721] border-[#ef1721] mt-2'> < BsDot /> </span>
                        <div>
                            <h1 className='font-semibold text-xl mb-2 hover:text-[#ef1721] duration-500 cursor-pointer'>Access control system</h1>
                            <p className='text-[#535353]'>
                                Access control systems in a car selling website are essential for ensuring that only authorized individuals or entities can perform specific actions or access certain areas of the platform.
                            </p>
                        </div>
                    </div>
                    <div className='mb-10 flex gap-2 text-justify'>
                        <span className='text-xl w-4 h-4 border rounded-full flex items-center justify-center text-[#ef1721] border-[#ef1721] mt-2'> < BsDot /> </span>
                        <div>
                            <h1 className='font-semibold text-xl mb-2 hover:text-[#ef1721] duration-500 cursor-pointer'>Online 24/7 Available</h1>
                            <p className='text-[#535353]'>
                                Ensuring that a car selling website is available 24/7 is crucial to provide a seamless user experience and maximize the platform's usability. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialServices;