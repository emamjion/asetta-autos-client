import React from 'react';
import { FaCarSide } from 'react-icons/fa';

const CarLeftSidebar = () => {
    return (
        <div>
            <div className='flex items-center gap-x-2 justify-center bg-[#181818] text-white p-4 text-xl'>
                <span>< FaCarSide /></span>
                <h1>Search Your Favourite Car</h1>
            </div>
            <div>
                <div>
                    <select className="select select-bordered w-full">
                        <option disabled selected className=''>Car Condition</option>
                        <option>Used Car</option>
                        <option>Brand New Car</option>
                        <option>Recondition</option>
                    </select>
                </div>
                <div className='mt-1'>
                    <select className="select select-bordered w-full">
                        <option disabled selected className=''>Year</option>
                        <option>2023</option>
                        <option>2022</option>
                        <option>2021</option>
                    </select>
                </div>
                <div className='mt-1'>
                    <input type="text" placeholder='Brands' className='border border-[#535353] p-2 w-full rounded-md' />
                </div>
                <div className='mt-1'>
                    <input type="text" placeholder='Model' className='border border-[#535353] p-2 w-full rounded-md' />
                </div>
                <div className='mt-1'>
                    <input type="text" placeholder='Body Type' className='border border-[#535353] p-2 w-full rounded-md' />
                </div>
                <div className='mt-1'>
                    <input type="text" placeholder='Max Mileage' className='border border-[#535353] p-2 w-full rounded-md' />
                </div>
                <div className='mt-1'>
                    <input type="text" placeholder='Transmission' className='border border-[#535353] p-2 w-full rounded-md' />
                </div>
                <div className='mt-1'>
                    <input type="text" placeholder='Ext Color' className='border border-[#535353] p-2 w-full rounded-md' />
                </div>
                <div className='mt-1'>
                    <input type="text" placeholder='Int Color' className='border border-[#535353] p-2 w-full rounded-md' />
                </div>
            </div>
        </div>
    );
};

export default CarLeftSidebar;