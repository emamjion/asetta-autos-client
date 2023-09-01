import React, { useEffect, useState } from 'react';
import Tittle from '../Shared/Tittle/Tittle';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import NewsCard from './NewsCard';

const LatestNews = () => {
    const [Blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/our-blogs/')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24'>
            <Tittle topTitle={"Our Blog"} boldblackTitle={"Latest News &"} boldredTitle={"Blog"}></Tittle>
            {/* responsive - mohosin */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10 '>
                
                {
                    Blogs.slice(0,3).map(blogs=><NewsCard key={blogs._id} blogs={blogs}></NewsCard>)
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