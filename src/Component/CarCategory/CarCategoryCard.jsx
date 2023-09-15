import React, { useContext } from 'react';
import { AuthContex } from '../Providers/Authprovider';
import { Link } from 'react-router-dom';

const CarCategoryCard = ({ cars }) => {
    const { theme } = useContext(AuthContex);
    const {_id, name, img1, img4 } = cars;
    return (
        <Link to={`/carbodyType/${_id}`}> <div className={`shadow-md border flex items-center justify-center flex-col rounded-2xl p-4 bg ${theme} text ${theme} hover:text-[#ef1721] duration-500 hover:-translate-y-2 cursor-pointer`}>
            <img src={img4} className='w-[120px] h-[120px]' />
            <h4 className='text-lg font-medium mt-2'>{name}</h4>
        </div></Link>
    );
};

export default CarCategoryCard;