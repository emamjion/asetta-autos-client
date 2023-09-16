import React, { useEffect, useState } from 'react';
import Tittle from '../Shared/Tittle/Tittle';
import BestDealerCard from './BestDealerCard';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const BestDealer = () => {
    const [Dealers, setDealers] = useState([]);
    console.log(Dealers);
    useEffect(() => {
        fetch('https://asetta-autos-production.up.railway.app/best-dealers/')
            .then(res => res.json())
            .then(data => setDealers(data))
    }, [])
    return (
        <>
            <Tittle topTitle={"Car Dealers"} boldblackTitle={"Best Dealers In"} boldredTitle={"Your City"}></Tittle>
            {/* responsive - mohosin */}
            <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24'>
                <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    {
                        Dealers.slice(0,3).map(Dealer => <BestDealerCard key={Dealer._id} Dealer={Dealer}></BestDealerCard>)
                    }
                </div>
                <div className='mt-6 text-center'>
                    <Link to='/our-dealer'>
                        <Button button={'Show All Dealers'} />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default BestDealer;