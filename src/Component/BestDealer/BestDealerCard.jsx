import React from 'react';
import { FaPhone, FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import img from "../../assets/images/Banner/06.png"

const BestDealerCard = ({ Dealer }) => {
    const {_id, dealerName, image, location,rating, phone,listing } = Dealer;
    return (
        <Link to={`dealer-details/${_id}`}>
            <div className="card mx-auto font-bold w-full relative bg-white text-black shadow-md px-1 py-3  hover: duration-500 hover:-translate-y-2 cursor-pointer">
                <figure>
                    <img src={image} className=" rounded-lg bg-red-50 mx-auto px-5 w-full" />
                </figure>
                <div>
                    <p className='bg-[#ef1721] -ml-4 mt-1 px-3 absolute top-0 left-0 text-white rounded-lg py-2 text-xs md:text-sm lg:text-lg'>Rating {rating}</p>
                </div>
                <div className="card-body px-auto">
                    <h2 className="font-semibold text-xl mb-2 hover:text-[#ef1721] duration-500">{dealerName}</h2>
                    <p className=' about-us-paragraph'><FaLocationArrow className='text-[#ef1721] w-4 h-4  md:w-6  md:h-6 '></FaLocationArrow>{location}</p>
                    <p className=' about-us-paragraph hover:text-[#ef1721]'><FaPhone className='text-[#ef1721] w-4 h-4  md:w-6  md:h-6 '></FaPhone>{phone}</p>
                </div>
            </div>
        </Link>
    );
};

export default BestDealerCard;