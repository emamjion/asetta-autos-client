import React from 'react';
import img1 from "../../assets/images/Banner/latestnews01.jpeg";
import img2 from "../../assets/images/Banner/latestnews02.webp";
import img3 from "../../assets/images/Banner/latestnews04.jpeg";
import { BsArrowRight, BsPersonCircle } from 'react-icons/bs';
import { BiSolidCalendar } from "react-icons/bi";
import Tittle from '../Shared/Tittle/Tittle';

const LatestNews = () => {
    return (
        <>
          <Tittle topTitle={"Our Blog"} boldblackTitle={"Latest News &"} boldredTitle={"Blog"}></Tittle>
            <div className='grid md:grid-cols-3 gap-8 mx-[70px] my-20'>
                <div className="card card-compact text-black w-full font-bold bg-white shadow-xl">
                    <figure className="px-4 pt-5">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <div className='flex mt-2 justify-around'>
                            <p className=' flex items-center gap-2 hover:text-[#ef1721] cursor-pointer'> <BsPersonCircle className='text-[#ef1721]'></BsPersonCircle> By Alicia Davis</p>
                            <p className='flex items-center gap-2 hover:text-[#ef1721] cursor-pointer'><BiSolidCalendar className='text-[#ef1721]'></BiSolidCalendar> January 29, 2023</p>
                        </div>
                        <hr className='my-2' />
                        <h2 className="card-title hover:text-[#ef1721] cursor-pointer">There are many variations of passage available.</h2>

                        <div className="card-actions justify-start">
                            <button className="btn my-2 text-white border-none  bg-[#ef1721]">Read More <BsArrowRight className='text-white text-xl font-bold'></BsArrowRight></button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact text-black w-full font-bold bg-white shadow-xl">
                    <figure className="px-4 pt-5">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <div className='flex mt-2 justify-around'>
                            <p className=' flex items-center gap-2 hover:text-[#ef1721] cursor-pointer'> <BsPersonCircle className='text-[#ef1721]'></BsPersonCircle> By Alicia Davis</p>
                            <p className='flex items-center gap-2 hover:text-[#ef1721] cursor-pointer'><BiSolidCalendar className='text-[#ef1721]'></BiSolidCalendar> January 29, 2023</p>
                        </div>
                        <hr className='my-2' />
                        <h2 className="card-title hover:text-[#ef1721] cursor-pointer">There are many variations of passage available.</h2>

                        <div className="card-actions justify-start">
                            <button className="btn my-2 text-white border-none  bg-[#ef1721]">Read More <BsArrowRight className='text-white text-xl font-bold'></BsArrowRight></button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact text-black w-full font-bold bg-white shadow-xl">
                    <figure className="px-4 pt-5">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <div className='flex mt-2 justify-around'>
                            <p className=' flex items-center gap-2 hover:text-[#ef1721] cursor-pointer'> <BsPersonCircle className='text-[#ef1721]'></BsPersonCircle> By Alicia Davis</p>
                            <p className='flex items-center gap-2 hover:text-[#ef1721] cursor-pointer'><BiSolidCalendar className='text-[#ef1721]'></BiSolidCalendar> January 29, 2023</p>
                        </div>
                        <hr className='my-2' />
                        <h2 className="card-title hover:text-[#ef1721] cursor-pointer">There are many variations of passage available.</h2>

                        <div className="card-actions justify-start">
                            <button className="btn text-white border-none my-2  bg-[#ef1721]">Read More <BsArrowRight className='text-white text-xl font-bold'></BsArrowRight></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LatestNews;