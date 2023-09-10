import React from 'react';
import theMarketPic from '../../../assets/images/Services/the-market.png'
import { useContext } from 'react';
import { AuthContex } from '../../../Component/Providers/Authprovider';

const TheMarket = () => {
    const { theme } = useContext(AuthContex)
    return (
        <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24'>
            <div className={`md:flex items-center gap-6 mode ${theme}`}>
                <div className='w-full background-custom'>
                    <img src={theMarketPic} className='' />
                </div>
                <div className='w-full p-5'>
                    <h1 className='text-5xl font-semibold mb-5'>A partner That Keeps Up <br /> With <span className='text-[#ef1721]'>the Market</span></h1>
                    <hr className='w-28  border-[#ef1721] border' />
                    <hr className='w-24 mt-1 mb-5 border-[#ef1721] border' />
                    <p className={`my-6 text-[#535353] mode ${theme}`}>
                        Get your vehicle the TLC it deserves with a trip to our award-winning service <br /> department. Our dedicated team of experts bring decades of combined <br /> experience to the table and can help with anything your vehicle might need. <br /> From major repair projects to routine maintenance, our ASE-certified master <br /> service technicians are here to help. We work on all vehicle makes and <br /> models, even if you didn't purchase your vehicle from us.
                    </p>
                    <p className={`text-[#535353] mode ${theme}`}>
                        Best of all, we offer a wide range of services, including detailing and spray-in <br /> bedliners. Our team is here to get your vehicle road-ready with any parts and <br /> accessories you might like.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TheMarket;