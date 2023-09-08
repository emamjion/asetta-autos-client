import React from 'react';
import { FaArrowRight, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';


const BlogCardLatest = ({ blogs }) => {
    const { image, author, title, _id, content, date, authorImage, blog } = blogs;
    console.log(blogs)
    return (

        <div className="card w-full h-full bg-base-100 border border-base-300 rounded-sm">
            <div className='relative'>
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className='bg-[#ef1721] text-white font-semibold py-1 px-2 md:py-4 md:px-5 text-xl flex justify-center text-center rounded-2xl items-center absolute top-1 mt-12 ms-14'>
                    <p className='text-xs md:text-lg'>{date}</p>
                </div>
            </div>
            <div className="card-body text-start items-start">
                <p className='uppercase text-xl font-semibold'>by : {author}</p>
                <h2 className="card-title text-2xl font-semibold text-gray-900 cursor-pointer hover:text-[#ef1721]">{title.slice(0, 50)}...</h2>
                <p className='text-xl'>{content.slice(0, 100)}...</p>
                <div className='card-actions justify-start mt-3 hover:text-[#ef1721]'>
                    <Link to={`/our-blogs/${_id}`}>
                        <h1 className='text-2xl uppercase font-bold flex items-center gap-1'>Read More <FaArrowRight></FaArrowRight></h1>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default BlogCardLatest;