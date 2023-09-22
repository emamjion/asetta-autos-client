import React from 'react';
import { useContext } from 'react';
import { AuthContex } from '../Providers/Authprovider';
// import { Rating } from '@smastrom/react-rating';

const SwiperCard = ({car}) => {
    const { theme } = useContext(AuthContex);
    const { img, name, review, description } = car;
    return (
        <div className={`border mr-4 p-4 bg ${theme}`}>
            <img src={img} />
            <div className='mt-4'>
                <h2 className={`font-semibold text-2xl text ${theme}`}>{name}</h2>
                <p className={`text-[#757575] mb-1 text ${theme}`}>{description}</p>
                <p className={`text ${theme}`}>{review}</p>
            </div>
        </div>
    );
};

export default SwiperCard;