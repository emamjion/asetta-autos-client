import React, { useEffect, useState } from 'react';
import Tittle from '../Shared/Tittle/Tittle';
import BestDealerCard from './BestDealerCard';

const BestDealer = () => {
    const [Dealers, setDealers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/best-dealers/')
            .then(res => res.json())
            .then(data => setDealers(data))
    }, [])
    return (
        <>
            <Tittle topTitle={"Car Dealers"} boldblackTitle={"Best Dealers In"} boldredTitle={"Your City"}></Tittle>
            {/* responsive - mohosin */}
            <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24'>
                <div className=' grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 m-8'>
                    {
                        Dealers.map(Dealer => <BestDealerCard key={Dealer._id} Dealer={Dealer}></BestDealerCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default BestDealer;