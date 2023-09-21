import React from 'react';
import { BiDownArrow } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';
import { PiHeart } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import ContactWithDealer from '../ContactWithDealer/ContactWithDealer';
import TestDriveBook from '../TestDriveBook/TestDriveBook';
import { FaShareAlt } from 'react-icons/fa';

const CarContent = ({cars}) => { 
    return (
        <div>
            {
                cars.map(car => <div className='mb-8 border-b pb-10'>
                    <div
                    key={car?._id}
                    className='grid md:grid-cols-2 gap-4 p-4'
                >
                    <div>
                        <img src={car.image} className='' />
                    </div>
                    <div>
                        <div className='flex items-center justify-between mb-4'>
                            <h1 className='font-medium text-xl'>{car.make} {car.model}</h1>
                            <div className='flex items-center'>
                                <span className='text-2xl cursor-pointer'>< PiHeart /></span>
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
                            
                            <ul>
                            {
                                car?.features?.map((f, idx)=>{
                                   return <li key={idx} className='text-sm my-1 text-[#757575] flex items-center gap-1'><span className='text-[#ef1721] text-2xl'> < BsDot /> </span>{f.description}</li>
                                })
                            }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center px-5'>
          <div className='flex justify-center items-center gap-4  '>
            <Link to={`/arrivals-details/${car?._id}`}>
              <Button button={"Vehicle Details"}></Button>
            </Link>
            <button className="button" onClick={() => document.getElementById(`my_modal_2/${car?._id}`).showModal()}>Contact Dealer</button>
            <ContactWithDealer car={car}></ContactWithDealer>
          <button className="button" onClick={() => document.getElementById(`my_modal_1/${car?._id}`).showModal()}>Test Drive</button>
            <TestDriveBook car={car}></TestDriveBook>
          </div>
          <div>
            <p><FaShareAlt className='text-4xl'></FaShareAlt></p>
          </div>
        </div>
                </div>)
            }
        </div>
    );
};

export default CarContent;