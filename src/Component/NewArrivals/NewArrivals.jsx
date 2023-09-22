import React, { useEffect, useState } from 'react';
import NewArrivalsCar from './NewArrivalsCar';
import Tittle from '../Shared/Tittle/Tittle';
import '../Button/Button'

const NewArrivals = () => {
    const [cars, setCars] = useState([]);
    const [visibleCars, setVisibleCars] = useState(8);
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    useEffect(() => {
        fetch('https://asetta-autos-production.up.railway.app/new-arrivals')
            .then(res => res.json())
            .then(data => setCars(data));
    }, []);

    return (
        <div className=' px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24'>
            <Tittle
                topTitle={"New Arrivals"}
                boldblackTitle={"Let's Check Latest"}
                boldredTitle={"Cars"}
            />
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12'>
                {cars.slice(0, showAll ? cars.length : visibleCars).map(car => (
                    <NewArrivalsCar key={car._id} car={car} />
                ))}
            </div>
            {showAll ? (
                <div className='text-center mt-8'>
                    <button onClick={toggleShowAll} className=' button'>Show Less Cars</button>
                </div>
            ) : (
                <div className='text-center mt-8'>
                    <button onClick={toggleShowAll} className='button'>Show All Cars</button>
                </div>
            )}
        </div>
    );
};

export default NewArrivals;
