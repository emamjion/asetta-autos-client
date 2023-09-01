import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const BlogCardLatest = ({ blogs }) => {
    const { image, author, title, _id, content, date, authorImage, blog } = blogs;
    console.log(blogs)
    return (
        <div className="card w-full my-10 font-bold h-full lg:card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Album" /></figure>
            <div className="card-body w-2/3">
                <h2 className="card-title text-3xl">{title}</h2>
                <h2 className='text-2xl'>Author:  {author}</h2>
                <p>{content}</p>
                <div className="card-actions justify-start">
                    <Link to={`/our-blogs/${_id}`}>
                        <Button button={'read more'} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCardLatest;