import { Rating } from '@smastrom/react-rating';
import React from 'react';
import '@smastrom/react-rating/style.css'
import { FaCar, FaDollarSign, FaGasPump } from "react-icons/fa";

const NewArrivalsCar = ({car}) => {
    const {image, name, price, rating, reviews, enginetype, perlitre, model} = car;
    
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={image} className='hover:scale-110 duration-500' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='flex items-center justify-start gap-6'>
                    <div className='flex items-center justify-start gap-2'>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                    />
                    {rating}
                    </div>
                    <div className='font-medium'>{reviews}K <span>Reviews</span></div>
                </div>
                <div className=''><span>Mileage: </span><span>{perlitre}km</span> / 1-litre</div>
                <div className='flex items-center justify-start gap-6'>
                    <div className='flex items-center justify-center gap-2'><span className='text-[#ef1721]'> < FaCar /> </span> Model: <span>{model}</span></div>
                    <div className='flex items-center justify-start gap-2'><span className='text-[#ef1721]'> < FaGasPump /> </span> <span>{enginetype}</span></div>
                </div>
                <div className='border my-3'></div>
                <div className="card-actions justify-between items-center">
                    <div className='text-[#ef1721] font-bold text-xl flex items-center justify-start'>
                        <span> < FaDollarSign /> </span>
                        {price}
                    </div>
                    <button className="btn bg-[#ef1721] text-white font-medium hover:bg-[#111] duration-500">Details</button>
                </div>
            </div>
        </div>
    );
};

export default NewArrivalsCar;