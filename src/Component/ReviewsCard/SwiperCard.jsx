import React from 'react';
// import { Rating } from '@smastrom/react-rating';

const SwiperCard = ({car}) => {
    const { img, name, review, description } = car;
    return (
        <div className='border mr-4 p-4'>
            <img src={img} />
            <div className='mt-4'>
                <h2 className='font-semibold text-2xl'>{name}</h2>
                <p className='text-[#757575] mb-1'>{description}</p>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default SwiperCard;