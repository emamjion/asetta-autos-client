import React, { useEffect, useState } from 'react';
import RouteBanner from '../Shared/RouteBanner/RouteBanner';
import LatestNews from '../LatestNews/LatestNews';
import Tittle from '../Shared/Tittle/Tittle';
import NewsCard from '../LatestNews/NewsCard';
import BlogCardLatest from './BlogCardLatest';


const BlogRoute = () => {
    const [Blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://asetta-autos-production.up.railway.app/our-blogs/')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <>
            <RouteBanner SectionTitle={'Our Blogs'} smallTitle={'Our Blogs'}></RouteBanner>
            <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24'>
                <Tittle topTitle={"Our Blog"} boldblackTitle={"Latest News &"} boldredTitle={"Blog"}></Tittle>
                {/* <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10 '>
                    {
                        Blogs.map(blog => <NewsCard key={blog._id} blog={blog}></NewsCard>)
                    }
                </div> */}
                {
                    Blogs.map(blogs => <BlogCardLatest key={blogs._id} blogs={blogs}></BlogCardLatest>)
                }
            </div>
        </>
    );
};

export default BlogRoute;