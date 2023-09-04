import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
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
        <div className='flex items-start m-10 gap-10 rounded-lg px-5 py-5 bg-white shadow-2xl hover:text-[#ef1721] duration-500 hover:-translate-y-2'>
            <div>
                <img className='w-[500px] h-[200px] rounded-lg' src={image} alt="" />
            </div>
            <div>
                <h1 className='text-3xl font-bold mb-5'>{title}</h1>
                <p className='my-5'>{content.slice(0, 350)}...</p>
                <Link to={`/our-blogs/${_id}`}>
                    <Button button={'read more'} />
                </Link>
            </div>
        </div>
    );
};

export default BlogCardLatest;