import React from 'react';
import { AiFillCar } from "react-icons/ai";
import { FaAward, FaHandshake, FaUserTie } from 'react-icons/fa';

const NumberOfCars = () => {
    return (
        <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24'>
            <div className='flex items-center justify-between gap-10'>
                <div className='flex justify-center gap-4'>
                    <span className='text-3xl w-16 h-16 bg-[#ef1721] flex items-center justify-center rounded-lg text-white'> < AiFillCar /> </span>
                    <div>
                        <span className='text-2xl font-bold'>711</span>
                        <h2 className='text-[#757575] mt-1'>Number of Cars</h2>
                    </div>
                </div>
                <div  className='flex justify-center gap-4'>
                    <span className='text-3xl w-16 h-16 bg-[#ef1721] flex items-center justify-center rounded-2xl text-white'> < FaHandshake /> </span>
                    <div>
                        <span className='text-2xl font-bold'>2556</span>
                        <h2 className='text-[#757575] mt-1'>Vehicle Sold</h2>
                    </div>
                </div>
                <div className='flex justify-center gap-4'>
                    <span className='text-3xl w-16 h-16 bg-[#ef1721] flex items-center justify-center rounded-2xl text-white'> < FaUserTie /> </span>
                    <div>
                        <span className='text-2xl font-bold'>325</span>
                        <h2 className='text-[#757575] mt-1'>Number of Stuff</h2>
                    </div>
                </div>
                <div className='flex justify-center gap-4'>
                    <span className='text-3xl w-16 h-16 bg-[#ef1721] flex items-center justify-center rounded-2xl text-white'> < FaAward /> </span>
                    <div>
                        <span className='text-2xl font-bold'>1250</span>
                        <h2 className='text-[#757575] mt-1'>Award Own</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NumberOfCars;