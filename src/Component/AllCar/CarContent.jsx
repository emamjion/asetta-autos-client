import React from 'react';
import { BiDownArrow } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';
import { PiHeart } from 'react-icons/pi';

const CarContent = ({cars}) => { 
    return (
        <div>
            {
                cars.slice(0,2).map(car => <div>
                    <div
                    key={car._id}
                    className='grid md:grid-cols-2 gap-4 p-4'
                >
                    <div>
                        <img src={car.image} className='' />
                    </div>
                    <div>
                        <div className='flex items-center justify-between mb-4'>
                            <h1 className='font-medium text-xl'>{car.make} {car.model}</h1>
                            <div className='flex items-center'>
                                <span className=''>< PiHeart /></span>
                                <button className='mx-3 bg-[#ef1721] p-1 text-white rounded font-semibold'>$ <span>{car.price}</span></button>
                            </div>
                        </div>
                        <p className='text-[#757575] mt-6'>
                            {car?.engine?.description}
                        </p>
                        <div className='mt-6'>
                            <div className='flex items-center gap-1'>
                                <span>< BiDownArrow /></span>
                                <h1 className='text-sm font-medium'>HIGHLIGHTS</h1>
                            </div>
                            <div className='flex items-center gap-1 mt-2'>
                                <div className='border p-2 rounded text-[#757575]'>{car?.mileage}</div>
                                <div className='border p-2 rounded text-[#757575]'>Model: {car?.year}</div>
                                <div className='border p-2 rounded text-[#757575]'>{car?.engine?.horsepower} hp</div>
                                <div className='border p-2 rounded text-[#757575]'>{car?.transmission}</div>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <div className='flex items-center gap-1'>
                                <span>< BiDownArrow /></span>
                                <h1 className='text-sm font-medium'>SPECIFICATIONS</h1>
                            </div>
                            <ul className='mt-2'>
                                <li className='text-sm my-1 text-[#757575] flex items-center gap-1'><span className='text-[#ef1721] text-2xl'> < BsDot /> </span> Engine DOHC 24-valve V-6</li>
                                <li className='text-sm my-1 text-[#757575] flex items-center gap-1'><span className='text-[#ef1721] text-2xl'> < BsDot /> </span> Audio Controls on Steering Wheel</li>
                                <li className='text-sm my-1 text-[#757575] flex items-center gap-1'><span className='text-[#ef1721] text-2xl'> < BsDot /> </span> Power Windows</li>
                                <li className='text-sm my-1 text-[#757575] flex items-center gap-1'><span className='text-[#ef1721] text-2xl'> < BsDot /> </span> Daytime Running Lights</li>
                                <li className='text-sm my-1 text-[#757575] flex items-center gap-1'><span className='text-[#ef1721] text-2xl'> < BsDot /> </span> Cruise Control, ABS</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className='w-11/12 mx-auto my-3 border'/>
                </div>)
            }
        </div>
    );
};

export default CarContent;