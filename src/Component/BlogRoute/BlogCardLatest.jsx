import React from 'react';
import { FaArrowRight, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useContext } from 'react';
import { AuthContex } from '../Providers/Authprovider';


const BlogCardLatest = ({ blogs }) => {
    const { theme } = useContext(AuthContex);
    const { image, author, title, _id, content, date, authorImage, blog } = blogs;
    // console.log(blogs)
    return (

        <div className={`card w-full h-full bg-base-100 mainbloghover border border-base-300 bg ${theme} text ${theme} rounded-sm hover:border hover:border-red-400 duration-500`}>
            <div className='relative'>
                <figure className="px-10 pt-10 imagehover">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className='bg-[#ef1721] text-white font-bold w-16 h-16 p-3 text-xl flex justify-center text-center rounded-2xl items-center absolute top-1 mt-6 ms-6'>
                    <p>{date}</p>
                </div>
            </div>
            <div className="card-body text-start items-start">
                <p className='uppercase text-xl font-semibold'>by : {author}</p>
                <h2 className="card-title text-2xl font-bold cursor-pointer hover:text-[#ef1721]">{title}</h2>
                <p className='text-xl'>{content.slice(0, 150)}...</p>
                <div className='flex justify-between items-center relative w-full '>
                    <div className='card-actions justify-start mt-3 hover:text-[#ef1721]'>
                        <Link to={`/our-blogs/${_id}`}>
                            <h1 className='text-2xl uppercase font-bold flex items-center gap-1'>Read More <FaArrowRight></FaArrowRight></h1>
                        </Link>
                    </div>
                    <div className='flex gap-3 mt-3 text-3xl cursor-pointer opacity-0 hover:opacity-100 duration-500 bloghover'>
                        <span className='hover:text-black duration-500'> < FaFacebook /> </span>
                        <span className='hover:text-black duration-500'> < FaInstagram /> </span>
                        <span className='hover:text-black duration-500'> < FaLinkedin /> </span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BlogCardLatest;