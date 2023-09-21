import React, { useState } from 'react';
import { BiFilterAlt } from 'react-icons/bi';
import { FaCarSide } from 'react-icons/fa';

const CarLeftSidebar = () => {
const [rangeValue, setRangeValue] = useState(2500);

    // Function to handle changes in the range input
    const handleRangeChange = (event) => {
        setRangeValue(Number(event.target.value));
    };
    
    return (
        <div className='shadow-xl p-3 rounded'>
            <div className='flex items-center gap-x-2 justify-center bg-[#181818] text-white p-4 text-lg rounded'>
                <span>< FaCarSide /></span>
                <h1>Filter Options</h1>
            </div>
            <div className='space-y-6 px-4'>
                <div className='mt-4' defaultValue={'Car Condition'}>
                    <select className="select-bordered border p-3 px-2 w-full rounded-md cursor-text border-[#535353]">
                        <option className=''>Car Condition</option>
                        <option>Used Car</option>
                        <option>Brand New Car</option>
                        <option>Recondition</option>
                    </select>
                </div>
                <div className='' defaultValue={'Year'}>
                    <select className="border p-3 select-bordered w-full rounded-md cursor-text border-[#535353]">
                        <option className=''>Year</option>
                        <option>2023</option>
                        <option>2022</option>
                        <option>2021</option>
                    </select>
                </div>
                <div className=''>
                    <input type="text" placeholder='Brands' className='border border-[#535353] w-full rounded-md p-3' />
                </div>
                <div className=''>
                    <input type="text" placeholder='Model' className='border border-[#535353] p-3 w-full rounded-md' />
                </div>
                <div className=''>
                    <input type="text" placeholder='Body Type' className='border border-[#535353] p-3 w-full rounded-md' />
                </div>
                <div className=''>
                    <input type="text" placeholder='Max Mileage' className='border border-[#535353] p-3 w-full rounded-md' />
                </div>
                <div className=''>
                    <input type="text" placeholder='Transmission' className='border border-[#535353] p-3 w-full rounded-md' />
                </div>
                <div className=''>
                    <input type="text" placeholder='Ext Color' className='border border-[#535353] p-3 w-full rounded-md' />
                </div>
                <div className='mt-1'>
                    <input type="text" placeholder='Int Color' className='border border-[#535353] p-3 w-full rounded-md' />
                </div>
                <div className='mt-1'>
                    <h1 className='text-lg font-medium mb-1'>Price</h1>
                    <div>
                        <input
                            type="range"
                            min={1000}
                            max={10000}
                            value={rangeValue} // Use the state variable for the value
                            className="range"
                            step={1}
                            onChange={handleRangeChange} // Handle changes
                        />
                        {/* <div className="w-full flex justify-between text-xs px-2">
                                {Array.from({ length: (100 / 1) + 1 }, (_, index) => (
                                <span key={index} className={index * 1 <= rangeValue ? 'active' : ''}>|</span>
                            ))}
                        </div> */}
                        <div className='flex items-center justify-center mt-1 gap-3'>
                            <button className='bg-[#f7f7f7] flex-1 p-3'>1000</button>
                            <button className='bg-[#f7f7f7] flex-1 p-3'>{rangeValue}</button>
                        </div>        
                        <div className='flex items-center flex-col mt-4 gap-3'>
                            <button className='button w-full'>Reset Filters</button>
                            <button className='button2 w-full flex items-center justify-center gap-1'>
                                <span className=''>< BiFilterAlt /></span>
                                <span>Filter</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarLeftSidebar;