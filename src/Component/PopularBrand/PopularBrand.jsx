import React from 'react';
import Tittle from '../Shared/Tittle/Tittle';
import popular3 from '../../assets/images/popular_brands/popular-3.png'
import popular5 from '../../assets/images/popular_brands/popular-5.png'
import popular6 from '../../assets/images/popular_brands/popular-6.png'
import popular7 from '../../assets/images/popular_brands/popular-7.png'
import popular8 from '../../assets/images/popular_brands/popular-8.png'
import popular9 from '../../assets/images/popular_brands/popular-9.png'

const PopularBrand = () => {
    return (
        // responsive - mohosin
        <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24'>
            <Tittle
                topTitle={"Popular Brands"} 
                boldblackTitle={"Our Top quality"} 
                boldredTitle={"Brands"}
            />
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12'>
                <div className='shadow-2xl flex items-center justify-center flex-col rounded-2xl p-4 hover:text-[#ef1721] duration-500 hover:-translate-y-2 cursor-pointer'>
                    <img src={popular3} className='w-[120px] h-[120px] rounded-xl' />
                    <h4 className='text-lg font-medium mt-4'>Honda</h4>
                </div>
                <div className='shadow-2xl flex items-center justify-center flex-col rounded-2xl p-4 hover:text-[#ef1721] duration-500 hover:-translate-y-2 cursor-pointer'>
                    <img src={popular5} className='w-[120px] h-[120px] rounded-xl' />
                    <h4 className='text-lg font-medium mt-4'>Toyota</h4>
                </div>
                <div className='shadow-2xl flex items-center justify-center flex-col rounded-2xl p-4 hover:text-[#ef1721] duration-500 hover:-translate-y-2 cursor-pointer'>
                    <img src={popular6} className='w-[120px] h-[120px] rounded-xl' />
                    <h4 className='text-lg font-medium mt-4'>Audi</h4>
                </div>
                <div className='shadow-2xl flex items-center justify-center flex-col rounded-2xl p-4 hover:text-[#ef1721] duration-500 hover:-translate-y-2 cursor-pointer'>
                    <img src={popular7} className='w-[120px] h-[120px] rounded-xl' />
                    <h4 className='text-lg font-medium mt-4'>BMW</h4>
                </div>
                <div className='shadow-2xl flex items-center justify-center flex-col rounded-2xl p-4 hover:text-[#ef1721] duration-500 hover:-translate-y-2 cursor-pointer'>
                    <img src={popular8} className='w-[120px] h-[120px] rounded-xl' />
                    <h4 className='text-lg font-medium mt-4'>Ferrari</h4>
                </div>
                <div className='shadow-2xl flex items-center justify-center flex-col rounded-2xl p-4 hover:text-[#ef1721] duration-500 hover:-translate-y-2 cursor-pointer'>
                    <img src={popular9} className='w-[120px] h-[120px] rounded-xl' />
                    <h4 className='text-lg font-medium mt-2'>Mercedes Benz</h4>
                </div>
            </div>
        </div>
    );
};

export default PopularBrand;