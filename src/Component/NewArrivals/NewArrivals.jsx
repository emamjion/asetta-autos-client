import React, { useEffect, useState } from 'react';
import { FaCarSide } from 'react-icons/fa';
import NewArrivalsCar from './NewArrivalsCar';
import Tittle from '../Shared/Tittle/Tittle';

const NewArrivals = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/new-arrivals')
        .then(res => res.json())
        .then(data => setCars(data))
    }, [])
    return (
        // responsive - mohosin
        <div className=' px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24'>
            <Tittle
                topTitle={"New Arrivals"} 
                boldblackTitle={"Let's Check Latest"} 
                boldredTitle={"Cars"}
            />
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12'>
                {
                    cars.map(car => <NewArrivalsCar
                        key={car._id}
                        car={car}
                    />)
                }
            </div>
            <div className='text-center mt-6'>
                <button className="btn bg-[#ef1721] text-white font-medium hover:bg-[#111] duration-500">Load More</button>
            </div>
        </div>
    );
};

export default NewArrivals;