import React from 'react';
import bestLargest from '../../../assets/images/about/bestLarest.png'

const BestLargest = () => {
    return (
        <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24 bg-[#f7f7f7] p-24'>
            <div className='flex items-center justify-center'>
                <div className='w-1/2'>
                    <h3 className='font-bold text-xl text-[#ef1721]'>Best & Larget</h3>
                    <hr className='w-20 border border-[#ef1721] mt-2 mb-4' />
                    <h1 className='text-3xl font-medium'>The Best & the Largest Auto Dealer</h1>
                    <p className='mt-6 text-[#535353]'>
                        The Best and Largest auto dealer can be subjective and may vary depending <br /> on various factors, including geographical location, the criteria used for <br /> evaluation, and the specific segment of the automotive industry
                    </p>
                    <p className='mt-8 text-[#535353]'>
                        When evaluating the Best auto dealer, it's essential to consider factors such <br /> as customer reviews, customer service, pricing, the range of available vehicles, <br /> and after-sales service. Additionally, the Largest auto dealer can vary by region <br /> and can change over time as mergers, acquisitions, and expansions occur <br /> within the automotive industry.
                    </p>
                </div>
                <div>
                    <img src={bestLargest} className='shadow-xl rounded' />
                </div>
            </div>
        </div>
    );
};

export default BestLargest;