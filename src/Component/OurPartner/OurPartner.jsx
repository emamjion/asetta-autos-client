import React from 'react';
import partner1 from '../../assets/images/our-partner/partner1.png'
import partner2 from '../../assets/images/our-partner/partner2.png'
import partner3 from '../../assets/images/our-partner/partner3.png'
import partner4 from '../../assets/images/our-partner/partner4.png'
import { useContext } from 'react';
import { AuthContex } from '../Providers/Authprovider';

const OurPartner = () => {
    const { theme } = useContext(AuthContex);
    return (
        <div className={`my-12 md:my-24 px-4 bg ${theme} text ${theme} xl:px-[140px] 2xl:px-[240px]`}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl uppercase py-4 font-bold text-center">Our <span className='text-[#ef1721]'>Partners</span></h1>
            <hr className='w-24 border-2 border-[#ef1721] mx-auto'/>
            <p className='text-center mt-6'>
                We&apos;d like to share with you their top quality products and services that you will enjoy.
            </p>
            <div className='mt-4 md:flex items-center justify-center'>
                <img src={partner1} className='w-full h-full' />
                <img src={partner2} className='w-full h-full'/>
                <img src={partner3} className='w-full h-full'/>
                <img src={partner4} className='w-full h-full'/>
            </div>
        </div>
    );
};

export default OurPartner;