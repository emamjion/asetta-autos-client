import React from 'react';
import { BiCheckSquare } from 'react-icons/bi';
import Button from '../../Component/Button/Button';
import driverImg from '../../assets/images/about/car-driver.png'

const CompanyInfo = () => {
    return (
        <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24 py-24'>
            <div className='grid md:grid-cols-2 gap-12'>
                <div>
                    <div>
                        <h1 className='text-3xl font-semibold'>About our company <span className='text-[#ef1721]'>info.</span></h1>
                        <hr className='w-24 mt-2 border-[#ef1721] border' />
                        <hr className='w-20 mt-1 border-[#ef1721] border' />
                    </div>
                    <p className='mt-8 text-[#666]'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                    </p>
                    <div className='mt-8'>
                        <div>
                            <div className="mt-1 grid grid-cols-2 items-center">
                                <h6 className="flex">
                                            {" "}
                                            <span className="text-red-600  mt-1 me-3">
                                                <BiCheckSquare />
                                            </span>{" "}
                                            <span className='text-[#666]'>Expert Drivers</span>
                                </h6>
                                <h6 className="flex">
                                            {" "}
                                            <span className="text-red-600 mt-1 me-3">
                                                <BiCheckSquare />
                                            </span>{" "}
                                            <span className='text-[#666]'>Qucik response and support</span>
                                </h6>
                                <h6 className="flex">
                                            {" "}
                                            <span className="text-red-600 mt-1 me-3">
                                                <BiCheckSquare />
                                            </span>{" "}
                                            <span className='text-[#666]'>Online documentation</span>
                                </h6>
                                <h6 className="flex">
                                            {" "}
                                            <span className="text-red-600 mt-1 me-3">
                                                <BiCheckSquare />
                                            </span>{" "}
                                            <span className='text-[#666]'>Grow your business</span>
                                </h6>
                                <h6 className="flex">
                                            {" "}
                                            <span className="text-red-600 mt-1 me-3">
                                                <BiCheckSquare />
                                            </span>{" "}
                                            <span className='text-[#666]'>Fast booking confirmation</span>
                                </h6>
                                <h6 className="flex">
                                            {" "}
                                            <span className="text-red-600 mt-1 me-3">
                                                <BiCheckSquare />
                                            </span>{" "}
                                            <span className='text-[#666]'>Free Registration</span>
                                </h6>
                                <h6 className="flex">
                                            {" "}
                                            <span className="text-red-600 mt-1 me-3">
                                                <BiCheckSquare />
                                            </span>{" "}
                                            <span className='text-[#666]'>Customer satisfaction</span>
                                </h6>
                                <h6 className="flex">
                                            {" "}
                                            <span className="text-red-600 mt-1 me-3">
                                                <BiCheckSquare />
                                            </span>{" "}
                                            <span className='text-[#666]'>Low Rent Cost</span>
                                </h6>
                            </div>
                            <div className='mt-8'>
                                <Button 
                                    button={'Know More'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img src={driverImg} className='rounded-lg shadow-xl' />
                    <div className='w-48 h-40 flex items-center justify-center flex-col bg-[#ef1721] bg-opacity-60 text-white rounded-lg absolute top-2 left-4'>
                        <span className='text-6xl font-bold tracking-wider'>2998</span>
                        <h5 className='font-medium text-xl mt-2'>Satisfied Customers</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyInfo;
