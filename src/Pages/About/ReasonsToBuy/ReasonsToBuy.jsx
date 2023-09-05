import React from 'react';
import './ReasonsToBuy.css'
import { FaAward, FaCarAlt } from 'react-icons/fa';
import { GiPriceTag } from "react-icons/gi";
import { BiSolidReport } from "react-icons/bi";

const ReasonsToBuy = () => {
    return (
        <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-[240px] reasons-bg'>
            <div className='text-center pt-24'>
                <h1 className='text-white font-semibold text-3xl'>Reasons to Buy From Asetta Auto's</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-12 mt-12'>
                <div className='flex items-center gap-8 hover:translate-x-6 duration-500'>
                    <span className='text-white w-20 h-20 bg-[#ef1721] flex items-center justify-center rounded-full text-3xl'> < FaCarAlt /></span>
                    <div className='text-white'>
                        <h3 className='text-2xl font-bold mb-2'>Certified vehicles that look like new</h3>
                        <p>
                            Each vehicle is detailed and washed to guarantee that you <br /> feel like the first owner.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-8 hover:translate-x-6 duration-500'>
                    <span className='text-white w-20 h-20 bg-[#ef1721] flex items-center justify-center rounded-full text-3xl'>< GiPriceTag /></span>
                    <div className='text-white'>
                        <h3 className='text-2xl font-bold mb-2'>We Start With Our Best Price</h3>
                        <p>
                            Our internet price is posted at or below market level, and <br /> we post a NADA price on windows so you can compare.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-8 hover:translate-x-6 duration-500'>
                    <span className='text-white w-20 h-20 bg-[#ef1721] flex items-center justify-center rounded-full text-3xl'>< BiSolidReport /></span>
                    <div className='text-white'>
                        <h3 className='text-2xl font-bold mb-2'>Free Autocheck Vehicle History Report</h3>
                        <p>
                            We fully disclose the histories of our vehicles, including <br /> accident history, service records, number of prior owners.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-8 hover:translate-x-6 duration-500'>
                    <span className='text-white w-20 h-20 bg-[#ef1721] flex items-center justify-center rounded-full text-3xl'>< FaAward /></span>
                    <div className='text-white'>
                        <h3 className='text-2xl font-bold mb-2'>3-Month or 3,000 Miles Limited Warranty</h3>
                        <p>
                            Every Certified vehicle comes with a 3 month / 3,000 <br /> mile Limited Warranty included in the purchase price.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReasonsToBuy;