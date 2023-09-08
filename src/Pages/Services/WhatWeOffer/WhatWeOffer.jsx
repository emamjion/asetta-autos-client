import React, { useEffect, useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';


const WhatWeOffer = () => {
    const [offers, setOffers] = useState([]);
    useEffect(() => {
        fetch('/WhatWeOffer.json')
        .then(res => res.json())
        .then(data => setOffers(data))
    }, [])
    return (
        <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24'>
            <div className='flex items-center flex-col'>
                <h1 className='text-3xl font-semibold mb-5'>What We Offer</h1>
                <hr className='w-28  border-[#ef1721] border' />
                <hr className='w-24 mt-1 mb-5 border-[#ef1721] border' />
            </div>
            <div className='md:flex items-center gap-4 mt-6 space-y-5 md:space-y-0'>
                {
                    offers.map(offer => <div
                        key={offer.id}
                    >
                        <div className='border shadow-sm h-full pb-2 md:h-96 relative'>
                            <img src={offer.image} />
                            <div className='p-4 relative'>
                                <h1 className='text-xl font-semibold mb-3'>{offer.serviceName}</h1>
                                <p className='text-[#535353] mb-6'>
                                    {offer.mainDesc}
                                </p>
                                {/* TODO: change the arrow position - button ti bottom 0 te hobe.  */}
                                <button className='text-[#ef1721] w-8 h-8 flex items-center justify-center rounded-full border-[#ef1721] mt-2 border absolute bottom-0 right-5'> < BsArrowRightShort /> </button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default WhatWeOffer;