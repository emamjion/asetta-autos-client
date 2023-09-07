import React from 'react';
import { FaArrowRight, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';


const BlogCardLatest = ({ blogs }) => {
    const { image, author, title, _id, content, date, authorImage, blog } = blogs;
    console.log(blogs)
    return (
        // <div className="card w-full my-10 font-bold h-full lg:card-side bg-base-100 shadow-xl">
        //     <figure><img src={image} alt="Album" /></figure>
        //     <div className="card-body w-2/3">
        //         <h2 className="card-title text-3xl">{title}</h2>
        //         <h2 className='text-xl'>Author:  {author}</h2>
        //         <p className='font-normal'>{content.slice(0,150)}</p>
        //         <div className="card-actions justify-start">
        //             <Link to={`/our-blogs/${_id}`}>
        //                 <Button button={'read more'} />
        //             </Link>
        //         </div>
        //     </div>
        // </div>
        // <div className='flex items-start m-10 gap-10 rounded-lg px-5 py-5 bg-white shadow-2xl hover:text-[#ef1721] duration-500 hover:-translate-y-2'>
        //     <div>
        //         <img className='w-[500px] h-[200px] rounded-lg' src={image} alt="" />
        //     </div>
        //     <div>
        //         <h1 className='text-3xl font-bold mb-5'>{title}</h1>
        //         <p className='my-5'>{content.slice(0, 350)}...</p>
        //         <Link to={`/our-blogs/${_id}`}>
        //             <Button button={'read more'} />
        //         </Link>
        //     </div>
        // </div>

        <div className="card w-full h-full bg-base-100 border border-base-300 rounded-sm">
            <div className='relative'>
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className='bg-[#ef1721] text-white font-bold w-24 h-24 text-xl flex justify-center text-center rounded-2xl items-center absolute top-1 mt-12 ms-14'>
                    <p>{date}</p>
                </div>
            </div>
            <div className="card-body text-start items-start">
                <p className='uppercase text-xl font-semibold'>by : {author}</p>
                <h2 className="card-title text-2xl font-bold cursor-pointer hover:text-[#ef1721]">{title}</h2>
                <p className='text-xl'>{content.slice(0, 150)}...</p>
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