import React from 'react';
// import { Rating } from '@smastrom/react-rating';

const SwiperCard = ({car}) => {
    const { img, name, review, description } = car;
    return (
        <div>
            <div className="card card-compact font-bold h-full md:px-7 md:pb-5 mx-2 relative bg-white text-black shadow-xl">
                <figure className='w-full'><img className='w-full md:w-full md:h-full  object-cover ' src={img} /></figure>
                <div className="card-body">
                    <h2 className=" text-black text-sm md:text-4xl ">{name}</h2>
                    <p className='text-xs md:text-sm'>{review}</p>
                    <div className='flex items-center justify-start gap-2 mt-2'>
                    <p className='text-[#ef1721] text-xs'>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SwiperCard;