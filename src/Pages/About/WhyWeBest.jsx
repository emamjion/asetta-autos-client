import React from 'react';

const WhyWeBest = () => {
    return (
        <div className='px-4 xl:px-[140px] 2xl:px-[240px] bg-[#111] my-12 md:my-32 md:h-[600px]'>
            <div className='flex items-center justify-center flex-col pt-20'>
                <span className='text-[#ef1721] text-2xl'>Why</span>
                <h1 className='text-white font-semibold text-4xl my-2'>We are the best</h1>
                <hr className='w-16 border-2 border-[#ef1721]'/>
            </div>
            <div className='flex items-center justify-center mt-4 md:mt-12 flex-wrap'>
                <div className='text-white text-center space-y-4 md:w-1/3 p-8 md:p-20 hover:bg-[#ef1721] duration-700'>
                    <h4 className='text-xl font-medium'>New & Used Car</h4>
                    <p className='text-[#f1f1f1]'>
                        Potenti sociosqu. Eu. Elementum tempor <br /> cum ridiculus neque mus sapien nascetur risus consectetur adipisicing.
                    </p>
                </div>
                <div className='text-white text-center space-y-4 md:w-1/3 md:border-l hover:border-[#ef1721] hover:border-none p-8 md:p-20 hover:bg-[#ef1721] duration-700'>
                    <h4 className='text-xl font-medium'>0% APR Finincing</h4>
                    <p className='text-[#f1f1f1]'>
                        Potenti sociosqu. Eu. Elementum tempor cum ridiculus neque mus sapien nascetur risus consectetur adipisicing.
                    </p>
                </div>
                <div className='text-white text-center space-y-4 md:w-1/3 p-8 md:p-20 hover:bg-[#ef1721] duration-700 md:border-l hover:border-[#ef1721]'>
                    <h4 className='text-xl font-medium'>Maintanence Pakages</h4>
                    <p className='text-[#f1f1f1]'>
                        Potenti sociosqu. Eu. Elementum tempor <br /> cum ridiculus neque mus sapien nascetur <br /> risus consectetur adipisicing.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyWeBest;