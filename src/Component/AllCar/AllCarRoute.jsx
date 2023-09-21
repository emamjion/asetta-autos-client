import React from 'react';
import CarLeftSidebar from './CarLeftSidebar';
import { BiFilterAlt } from 'react-icons/bi';
import { FaCarSide } from 'react-icons/fa';
import CarContent from './CarContent';
import CarRightSidebar from './CarRightSidebar';
import { useContext } from 'react';
import { AuthContex } from '../Providers/Authprovider';
import { useState } from 'react';
import { useEffect } from 'react';

const AllCarRoute = () => {
    const { theme } = useContext(AuthContex);
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/new-arrivals')
            .then(res => res.json())
            .then(data => setCars(data))

    }, [])

    return (
        <div className={`flex items-center gap-2 my-12 px-4 xl:px-[140px] 2xl:px-[240px] mode ${theme} my-14 md:my-24`}>
            <div className='h-screen w-[20%]'>
                <CarLeftSidebar cars={cars} setCars={setCars} />
            </div>
            <div className='h-screen w-[60%]'>
                <CarContent cars={cars} setCars={setCars} />
            </div>
            <div className='h-screen w-[20%]'>
                <CarRightSidebar cars={cars} setCars={setCars} />
            </div>
        </div>
    );
};

export default AllCarRoute;