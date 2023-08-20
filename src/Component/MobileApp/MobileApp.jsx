import React from 'react';
import img from "../../assets/images/Banner/01.png";
import { BsCarFront, BsGooglePlay } from "react-icons/bs";
import { FaAppStore } from "react-icons/fa";

const MobileApp = () => {
    return (
        <div className='mx-[240px] bg-white my-24 rounded-2xl flex items-center justify-end px-10'>
            <div className='space-y-4 '>
                <p className='flex items-center font-bold text-2xl mt-8 text-[#ef1721]'><BsCarFront className='mr-2'></BsCarFront> Get Our App </p>
                <h1 className='font-bold text-6xl text-[#111]'>Download <span className='text-[#ef1721]'>Our Asetta-auto's</span> <br /> App For Free</h1>
                <p className='text-slate-800 font-bold'>There are many variations of passages available but the majority have <br /> suffered in some form going to use a passage by injected humour. </p>
                <div className='flex items-center space-x-3 '>
                    <div className='mb-8'>
                        <button className='bg-[#ef1721] font-bold text-white px-6 py-3 rounded-2xl hover:bg-[#111] duration-500'>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <BsGooglePlay className='w-10 h-10'></BsGooglePlay>
                                </div>
                                <div>
                                    <p className='-ml-4'>Get it on</p>
                                    <p className='ml-1'>Google play</p>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className='mb-8'>
                        <button className='bg-[#111] font-bold text-white px-6 py-3 rounded-2xl hover:bg-[#ef1721] duration-500'>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <FaAppStore className='w-10 h-10'></FaAppStore>
                                </div>
                                <div>
                                    <p className='ml-4'>Get it on</p>
                                    <p className='ml-3'>App play</p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="card p-0">

                <figure><img src={img} alt="" className='-mb-36' /></figure>
            </div>
        </div>
    );
};

export default MobileApp;