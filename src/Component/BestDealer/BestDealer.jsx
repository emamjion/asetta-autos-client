import React, { useEffect, useState } from 'react';
import Tittle from '../Shared/Tittle/Tittle';
import BestDealerCard from './BestDealerCard';

const BestDealer = () => {
    const [Dealers, setDealers] = useState([]);
    useEffect(() => {
        fetch('BestDealer.json')
            .then(res => res.json())
            .then(data => setDealers(data))
    }, [])
    return (
        <>
            <Tittle topTitle={"Car Dealers"} boldblackTitle={"Best Dealers In"} boldredTitle={"Your City"}></Tittle>
            {/* todo - mohosin */}
            <div className='mx-[240px] py-20 hidden'>
                <div className=' grid md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-1 gap-8 m-8'>
                    {
                        Dealers.map(Dealer => <BestDealerCard key={Dealer._id} Dealer={Dealer}></BestDealerCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default BestDealer;