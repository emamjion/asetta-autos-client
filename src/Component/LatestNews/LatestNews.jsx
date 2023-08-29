import React, { useEffect, useState } from 'react';
import { BsArrowRight, BsPersonCircle } from 'react-icons/bs';
import { BiSolidCalendar } from "react-icons/bi";
import Tittle from '../Shared/Tittle/Tittle';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const LatestNews = () => {
    const [Blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/our-blogs/')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    console.log(Blogs);
    return (
        <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24'>
            <Tittle topTitle={"Our Blog"} boldblackTitle={"Latest News &"} boldredTitle={"Blog"}></Tittle>
            {/* responsive - mohosin */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10 '>
                
                {
                    Blogs.slice(0,3).map(blog=><div key={blog._id} className=" card card-compact text-black w-full font-bold bg-white shadow-xl">
                    <figure className="px-4 pt-5">
                        <img src={blog?.image} alt="Shoes" className="rounded-xl hover:transition-transform transform origin-center hover:scale-105 duration-500" />
                    </figure>
                    <div className="card-body">
                        <div className='flex mt-2 text-[16px] justify-around'>
                            <p className=' flex items-center gap-2 hover:text-[#ef1721] cursor-pointer'> <BsPersonCircle className='text-[#ef1721]'></BsPersonCircle>{blog?.author}</p>
                            <p className='flex items-center gap-2 hover:text-[#ef1721] cursor-pointer'><BiSolidCalendar className='text-[#ef1721]'></BiSolidCalendar> {blog?.date}</p>
                        </div>
                        <hr className='my-2' />
                        <h2 className="card-title text-xl md:text-3xl hover:text-[#ef1721] cursor-pointer">{blog?.title}</h2>

                        <div className="card-actions justify-start">
                            <Link to={`/our-blogs/${blog?._id}`}>
                        <Button button={'read more'} />
                    </Link>
                        </div>
                    </div>
                </div>)
                }
            </div>
            <div className='text-center'>
            <Link to={`/blog`}>
                        <Button button={'Show All Blogs'} />
                    </Link>
            </div>
        </div>
    );
};

export default LatestNews;