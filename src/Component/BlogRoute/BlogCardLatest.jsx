import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const BlogCardLatest = ({ blog }) => {
    const { image, author, title, _id, content, date } = blog;
    console.log(blog)
    return (
        <div className='w-2/3'>
            <div className="card w-full md:w-[850px] bg-base-100 shadow-xl mt-8">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">{title}</h2>
                    <p>{content}</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary border-none mt-5 bg-[#ef1721] hover:bg-black duration-500 rounded-lg ">Read More <FaArrowRight></FaArrowRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCardLatest;