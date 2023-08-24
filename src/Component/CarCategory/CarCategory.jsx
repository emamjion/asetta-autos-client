import React from 'react';
import { FaCarSide } from 'react-icons/fa';
import type1 from '../../assets/images/car_category/type-1.png'
import type2 from '../../assets/images/car_category/type-2.png'
import type3 from '../../assets/images/car_category/type-3.png'
import type4 from '../../assets/images/car_category/type-4.png'
import type5 from '../../assets/images/car_category/type-5.png'
import type6 from '../../assets/images/car_category/type-6.png'
import type7 from '../../assets/images/car_category/type-7.png'
import type8 from '../../assets/images/car_category/type-8.png'
import type9 from '../../assets/images/car_category/type-9.png'
import type10 from '../../assets/images/car_category/type-10.png'
import type11 from '../../assets/images/car_category/type-11.png'
import type12 from '../../assets/images/car_category/type-12.png'
import Tittle from '../Shared/Tittle/Tittle';

const CarCategory = () => {
    return (
        // responsive - mohosin
        <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-24'>
            <Tittle
                topTitle={"Car Category"} 
                boldblackTitle={"Car By Body"} 
                boldredTitle={"Types"}
            />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-12'>
                <div className='shadow-2xl flex items-center justify-center flex-col rounded-2xl p-4  hover:text-[#ef1721] duration-500 hover:-translate-y-2 cursor-pointer'>
                    <img src={type1}  className='w-[120px] h-[120px]'/>
                    <h4 className='text-lg font-medium mt-2'>Sedan</h4>
                </div>
                <div className='shadow-2xl flex items-center justify-center flex-col rounded-2xl p-4 hover:text-[#ef1721] duration-500 hover:-translate-y-2 cursor-pointer'>
                    <img src={type2}  className='w-[120px] h-[120px]'/>
                    <h4 className='text-lg font-medium mt-2'>Compact</h4>
                </div>
                <div className='shadow-2xl flex items-center justify-center flex-col rounded-2xl p-4 hover:text-[#ef1721] duration-500 hover:-translate-y-2 cursor-pointer'>
                    <img src={type3}  className='w-[120px] h-[120px]'/>
                    <h4 className='text-lg font-medium mt-2'>Convertible</h4>
                </div>
                <div className='shadow-2xl flex items-center justify-center flex-col rounded-2xl p-4 hover:text-[#ef1721] duration-500 hover:-translate-y-2 cursor-pointer'>
                    <img src={type4}  className='w-[120px] h-[120px]'/>
                    <h4 className='text-lg font-medium mt-2'>SUV</h4>
                </div>
                <div className='shadow-2xl flex items-center justify-center flex-col rounded-2xl p-4 hover:text-[#ef1721] duration-500 hover:-translate-y-2 cursor-pointer'>
                    <img src={type5}  className='w-[120px] h-[120px]'/>
                    <h4 className='text-lg font-medium mt-2'>Crossover</h4>
                </div>
                <div className='shadow-2xl flex items-center justify-center flex-col rounded-2xl p-4 hover:text-[#ef1721] duration-500 hover:-translate-y-2 cursor-pointer'>
                    <img src={type6}  className='w-[120px] h-[120px]'/>
                    <h4 className='text-lg font-medium mt-2'>Wagon</h4>
                </div>
                <div className='shadow-2xl flex items-center justify-center flex-col rounded-2xl p-4 hover:text-[#ef1721] duration-500 hover:-translate-y-2 cursor-pointer'>
                    <img src={type7}  className='w-[120px] h-[120px]'/>
                    <h4 className='text-lg font-medium mt-2'>Sports</h4>
                </div>
                <div className='shadow-2xl flex items-center justify-center flex-col rounded-2xl p-4 hover:text-[#ef1721] duration-500 hover:-translate-y-2 cursor-pointer'>
                    <img src={type8}  className='w-[120px] h-[120px]'/>
                    <h4 className='text-lg font-medium mt-2'>Pickup</h4>
                </div>
                <div className='shadow-2xl flex items-center justify-center flex-col rounded-2xl p-4 hover:text-[#ef1721] duration-500 hover:-translate-y-2 cursor-pointer'>
                    <img src={type9}  className='w-[120px] h-[120px]'/>
                    <h4 className='text-lg font-medium mt-2'>Family MPV</h4>
                </div>
                <div className='shadow-2xl flex items-center justify-center flex-col rounded-2xl p-4 hover:text-[#ef1721] duration-500 hover:-translate-y-2 cursor-pointer'>
                    <img src={type10} className='w-[120px] h-[120px]' />
                    <h4 className='text-lg font-medium mt-2'>Coupe</h4>
                </div>
                <div className='shadow-2xl flex items-center justify-center flex-col rounded-2xl p-4 hover:text-[#ef1721] duration-500 hover:-translate-y-2 cursor-pointer'>
                    <img src={type11} className='w-[120px] h-[120px]' />
                    <h4 className='text-lg font-medium mt-2'>Electric</h4>
                </div>
                <div className='shadow-2xl flex items-center justify-center flex-col rounded-2xl p-4 hover:text-[#ef1721] duration-500 hover:-translate-y-2 cursor-pointer'>
                    <img src={type12} className='w-[120px] h-[120px]' />
                    <h4 className='text-lg font-medium mt-2'>Luxury</h4>
                </div>
            </div>
        </div>
    );
};

export default CarCategory;