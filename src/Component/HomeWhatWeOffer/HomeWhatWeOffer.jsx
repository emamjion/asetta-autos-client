import React from 'react';
import weoffer1 from '../../assets/images/weoffer/weoffer1.jpg'
import weoffer2 from '../../assets/images/weoffer/weoffer2.png'
import weoffer3 from '../../assets/images/weoffer/weoffer3.png'
import { useContext } from 'react';
import { AuthContex } from '../Providers/Authprovider';

const HomeWhatWeOffer = () => {
    const { theme } = useContext(AuthContex);
    return (
        <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24'>
            <div className='flex items-center justify-center flex-col'>
                <h3 className='bg-[#ef1721] p-1 rounded font-semibold text-white'>Customer Are Important For Us</h3>
                <h1 className='font-bold text-2xl mt-2'>WHAT WE OFFERS</h1>
            </div>
            <div className='md:flex items-center justify-center gap-5 mt-8'>
                <div className={`w-full bg ${theme}`}>
                    <img src={weoffer1} className='rounded w-full' />
                    <div className='mt-5'>
                        <h5 className='text-[#757575] text-xs mb-1'>WE OFFER</h5>
                        <h2 className='font-medium text-lg'>Low Prices, No Haggling</h2>
                        <hr className='border my-3' />
                        <p className='mt-2 text-[#757575]'>
                            Curabitur libero. Donec facilisis velit eu est. Phasellus <br /> cons quat. Aenean vitae quam. Vivamus et nunc.
                        </p>
                    </div>
                </div>
                <div className={`w-full bg ${theme}`}>
                    <img src={weoffer2} className='rounded w-full' />
                    <div className='mt-5'>
                        <h5 className='text-[#757575] text-xs mb-1'>WE ARE THE</h5>
                        <h2 className='font-medium text-lg'>Largest Car Dealership</h2>
                        <hr className='border my-3' />
                        <p className='mt-2 text-[#757575]'>
                            Curabitur libero. Donec facilisis velit eu est. Phasellus <br /> cons quat. Aenean vitae quam. Vivamus et nunc.
                        </p>
                    </div>
                </div>
                <div className={`w-full bg ${theme}`}>
                    <img src={weoffer3} className='rounded w-full' />
                    <div className='mt-5'>
                        <h5 className='text-[#757575] text-xs mb-1'>OUR CUSTOMERS GET</h5>
                        <h2 className='font-medium text-lg'>Multipoint Safety Check</h2>
                        <hr className='border my-3' />
                        <p className='mt-2 text-[#757575]'>
                            Curabitur libero. Donec facilisis velit eu est. Phasellus <br /> cons quat. Aenean vitae quam. Vivamus et nunc.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeWhatWeOffer;