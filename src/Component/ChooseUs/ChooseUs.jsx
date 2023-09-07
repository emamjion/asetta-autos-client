import React from 'react';
import { FaCar, FaCarAlt, FaMoneyBillAlt, FaUserAstronaut } from "react-icons/fa";
import chooseImg from '../../assets/images/choose_img/quality-1.png'

const ChooseUs = () => {
    return (
        // responsive - mohosin
        <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-24 bg-[#111111] p-16 md:flex items-center justify-center gap-12'>
            <div className='md:w-1/2'>
                <div>
                    <div className='text-white flex items-center justify-start'>
                        <span className='mr-2 text-xl'> < FaCarAlt /> </span>
                        <h2 className='text-xl font-semibold uppercase'>Why Choose us</h2>
                    </div>
                    <h1 className='text-white text-4xl font-bold mt-3 leading-10'>We Are Dedicated <span className='text-[#ef1721]'>To <br /> Provide</span> Quality Service</h1>
                </div>
                <img src={chooseImg} className='mt-16' />
            </div>
            <div className='grid md:grid-cols-2 gap-8 md:gap-16 mt-8 md:mt-0 md:w-1/2'>
                <div className='bg-white  w-full h-full p-8 rounded-xl md:translate-y-10'>
                    <div className='flex items-center justify-between mb-4'>
                        <span className='text-3xl w-16 h-16 bg-[#ef1721] text-white flex items-center justify-center rounded-full'> < FaCar /> </span>
                        <span className='text-3xl font-bold border-x-8 w-16 h-16 border-[#ef1721] flex items-center justify-center rounded-full'>01</span>
                    </div>
                    <h2 className='text-2xl font-semibold mb-3'>Best Quality Cars</h2>
                    <p className='text-[#757575]'>
                        There are many variations of the passages available but the majo have suffered fact that reader will be dist alteration.
                    </p>
                </div>
                <div className='bg-white  w-full h-full p-8 rounded-xl md:-ml-9'>
                    <div className='flex items-center justify-between mb-4'>
                        <span className='text-3xl w-16 h-16 bg-[#ef1721] text-white flex items-center justify-center rounded-full'> < FaUserAstronaut /> </span>
                        <span className='text-3xl font-bold border-x-8 w-16 h-16 border-[#ef1721] flex items-center justify-center rounded-full'>02</span>
                    </div>
                    <h2 className='text-2xl font-semibold mb-3'>Certified Mechanics</h2>
                    <p className='text-[#757575]'>
                        There are many variations of the passages available but the majo have suffered fact that reader will be dist alteration.
                    </p>
                </div>
                <div className='bg-[#fff] w-full  h-full p-8 rounded-xl '>
                    <div className='flex items-center justify-between mb-4'>
                        <span className='text-3xl w-16 h-16 bg-[#ef1721] text-white flex items-center justify-center rounded-full'> < FaCar /> </span>
                        <span className='text-3xl font-bold border-x-8 w-16 h-16 border-[#ef1721] flex items-center justify-center rounded-full'>03</span>
                    </div>
                    <h2 className='text-2xl font-semibold mb-3'>Popular Brands</h2>
                    <p className='text-[#757575]'>
                        There are many variations of the passages available but the majo have suffered fact that reader will be dist alteration.
                    </p>
                </div>
                <div className='bg-[#fff] w-full  h-full p-8 rounded-xl md:-translate-y-10 md:-ml-9'>
                    <div className='flex items-center justify-between mb-4'>
                        <span className='text-3xl w-16 h-16 bg-[#ef1721] text-white flex items-center justify-center rounded-full'> < FaMoneyBillAlt /> </span>
                        <span className='text-3xl font-bold border-x-8 w-16 h-16 border-[#ef1721] flex items-center justify-center rounded-full'>04</span>
                    </div>
                    <h2 className='text-2xl font-semibold mb-3'>Reasonable Price</h2>
                    <p className='text-[#757575]'>
                        There are many variations of the passages available but the majo have suffered fact that reader will be dist alteration.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;