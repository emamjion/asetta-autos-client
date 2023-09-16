import React, { useEffect, useState } from 'react';
import BestDealer from './BestDealer';
import BestDealerCard from './BestDealerCard';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const OurDealer = () => {
    const [dealers, setDealers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/best-dealers')
        .then(res => res.json())
        .then(data => setDealers(data))
    }, [])
    
    return (
        <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24'>
            <div className='text-center'>
                <h1 className='text-3xl font-medium mb-2'>Our Dealers</h1>
                <hr className='w-20 border border-[#ef1721] mx-auto' />
                <p className='mt-5 text-[#535353]'>
                A dealer is a person or entity that engages in buying and selling goods  or assets for profit. <br /> Dealers can be found in various industries  and contexts, and their <br /> specific roles and responsibilities can vary widely.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                {
                        dealers.map(dealer => <BestDealerCard key={dealer._id} Dealer={dealer} />)
                }
            </div>

        </div>
    );
};

export default OurDealer;

