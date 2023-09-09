import React, { useEffect, useState } from 'react';
import RouteBanner from '../Shared/RouteBanner/RouteBanner';
import LatestNews from '../LatestNews/LatestNews';
import Tittle from '../Shared/Tittle/Tittle';
import NewsCard from '../LatestNews/NewsCard';
import BlogCardLatest from './BlogCardLatest';
import Search from '../Search/Search';


const BlogRoute = () => {
    const [Blogs, setBlogs] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetch('https://asetta-autos-production.up.railway.app/our-blogs/')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    useEffect(() => {

        const filtered = Blogs.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
    }, [query, Blogs]);

    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
    };


    return (
        <>
            <RouteBanner SectionTitle={'Our Blogs'} smallTitle={'Our Blogs'}></RouteBanner>
            <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24'>
                <Tittle topTitle={"Our Blog"} boldblackTitle={"Latest News &"} boldredTitle={"Blog"}></Tittle>
                <div className="flex flex-wrap items-center space-x-2 justify-center text-xl my-10">
                    <Search onSearch={handleSearch}></Search>
                </div>



                {/* <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10 '>
                    {
                        Blogs.map(blog => <NewsCard key={blog._id} blog={blog}></NewsCard>)
                    }
                </div> */}
                <div className='grid sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-14 mb-10'>
                    {
                        filteredData.map(blogs => <BlogCardLatest key={blogs._id} blogs={blogs}></BlogCardLatest>)
                    }
                </div>
            </div>
        </>
    );
};

export default BlogRoute;