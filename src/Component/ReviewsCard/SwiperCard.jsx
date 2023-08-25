import React from 'react';
import { Rating } from '@smastrom/react-rating';

const SwiperCard = ({ image, name, reviews, rating }) => {
    return (
        <div>
            <div className="card card-compact font-bold md:px-7 md:pb-5 mx-2 relative bg-white text-black shadow-xl">
            <figure><img className='rounded-full w-16 h-16 md:w-20 md:h-20  -ml-24 object-cover ' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className=" text-black text-xl md:text-4xl ">{name}</h2>
                    <p className='text-[#ef1721]'>Customer</p>
                    <p className='text-xs md:text-sm'>{reviews}</p>
                    <div className='flex items-center justify-start gap-2 mt-2'>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={rating}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SwiperCard;