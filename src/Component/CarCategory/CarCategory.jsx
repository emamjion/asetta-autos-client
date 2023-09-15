import React, { useEffect, useState } from 'react';
import { FaCarSide } from 'react-icons/fa';
import type1 from '../../assets/images/car_category/type-1.png'
import type2 from '../../assets/images/car_category/type-2.png'
import type3 from '../../assets/images/car_category/type-3.png'
import type4 from '../../assets/images/car_category/type-4.png'
import type5 from '../../assets/images/car_category/type-5.png'
import type6 from '../../assets/images/car_category/type-6.png'
import type7 from '../../assets/images/car_category/type-7.png'
import type8 from '../../assets/images/car_category/type-8.png'
import type9 from '../../assets/images/car_category/type-9.png'
import type10 from '../../assets/images/car_category/type-10.png'
import type11 from '../../assets/images/car_category/type-11.png'
import type12 from '../../assets/images/car_category/type-12.png'
import Tittle from '../Shared/Tittle/Tittle';
import { useContext } from 'react';
import { AuthContex } from '../Providers/Authprovider';
import CarCategoryCard from './CarCategoryCard';

const CarCategory = () => {
    const { theme } = useContext(AuthContex);
    const [catagory, setCatagory]=useState([]);
    useEffect(()=>{
        fetch("https://asetta-autos-production.up.railway.app/carbodyType")
        .then(res=>res.json())
        .then(data=>setCatagory(data))
    },[])
    return (
        // responsive - mohosin
        <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24'>
            <Tittle
                topTitle={"Car Category"} 
                boldblackTitle={"Car By Body"} 
                boldredTitle={"Types"}
            />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-12'>
                {
                    catagory.map(cars=> <CarCategoryCard key={cars._id} cars={cars}></CarCategoryCard>)
                }
            </div>
        </div>
    );
};

export default CarCategory;