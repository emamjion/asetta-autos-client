import React, { useEffect, useState } from 'react';
import { FaCarSide } from 'react-icons/fa';
import NewArrivalsCar from './NewArrivalsCar';

const NewArrivals = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('new_arrivals.json')
        .then(res => res.json())
        .then(data => setCars(data))
    }, [])
    return (
        <div className='mx-[240px] my-24'>
            <div className='flex items-center justify-center flex-col'>
                <h4 className='flex items-center justify-center gap-2 text-xl font-medium uppercase text-[#ef1721] mb-2'> <span > < FaCarSide /> </span> <span>New Arrivals</span></h4>
                <h1 className='text-5xl font-semibold '>Let's Check Latest Cars</h1>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12'>
                {
                    cars.map(car => <NewArrivalsCar
                        key={car.id}
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