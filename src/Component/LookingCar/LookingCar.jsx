import React from 'react';
import './LookingCar.css';

const LookingCar = () => {
    return (
        <div className='my-24 flex h-[400px]'>
            <div className='w-1/2 bg-left-side flex items-center justify-center text-white'>
                <div>
                    <h1 className='font-semibold text-3xl mb-5'>ARE YOU LOOKING FOR A CAR?</h1>
                    <p className='mb-6'>Search your car in our Inventory and request a quote <br /> on the vehicle of your choosing.</p>
                    <button className='px-8 py-4 text-lg bg-[#111] text-white font-medium hover:text-black hover:bg-white duration-500'>View More</button>
                </div>
            </div>
            <div className='w-1/2 bg-right-side flex items-center justify-start pl-16 text-white'>
                <div>
                    <h1 className='font-semibold text-3xl mb-5'>DO YOU WANT TO SELL YOUR CAR?</h1>
                    <p className='mb-6'>
                        Search your car in our Inventory and request a quote on the <br /> vehicle of your choosing.
                    </p>
                    <button className='px-8 py-4 text-lg bg-[#fff] text-black font-medium hover:text-white hover:bg-[#111] duration-500'>Register Now</button>
                </div>
            </div>
        </div>
    );
};

export default LookingCar;