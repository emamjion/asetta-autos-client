import { Rating } from '@smastrom/react-rating';
import React from 'react';
import '@smastrom/react-rating/style.css'
import { FaCar, FaGasPump } from "react-icons/fa";

const NewArrivalsCar = ({car}) => {
    const {image, name, price, rating, reviews, enginetype, perlitre, model} = car;
    
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='flex items-center justify-start'>
                    <p className='w-[60px]'>
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={rating}
                        readOnly
                    />
                    </p>
                    <p className='font-medium'>{reviews}K <span>Reviews</span></p>
                </div>
                <p className=''><span>Mileage: </span><span>{perlitre}km</span> / 1-litre</p>
                <div className='flex items-center justify-center'>
                    <p className='flex items-center gap-2'><span className='text-[#ef1721]'> < FaCar /> </span> Model: <span>{model}</span></p>
                    <p className='flex items-center justify-start gap-2'><span className='text-[#ef1721]'> < FaGasPump /> </span> <span>{enginetype}</span></p>
                </div>
                <div className="card-actions justify-end">
                <button className="btn bg-[#ef1721] text-white font-medium hover:bg-[#111] duration-500">Details</button>
                </div>
            </div>
        </div>
    );
};

export default NewArrivalsCar;