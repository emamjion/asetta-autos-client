import React from 'react';
import { BsCarFront } from "react-icons/bs";

const Tittle = ({topTitle, boldblackTitle, boldredTitle}) => {
    return (
        <div className="mx-auto text-black text-center lg:w-4/12 my-8 px-4">
            <p className="text-[#ef1721] uppercase font-bold flex justify-center "><BsCarFront className='mt-1 mr-2'></BsCarFront> {topTitle}</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl uppercase py-4 font-bold">{boldblackTitle} <span className='text-[#ef1721]'>{boldredTitle}</span></h1>
            <hr className='w-1/3 border-2 border-[#ef1721] mx-auto'/>
        </div>
    );
};

export default Tittle;