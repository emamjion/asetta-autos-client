import React, { useEffect, useState } from 'react';
import RouteBanner from '../Shared/RouteBanner/RouteBanner';
import Tittle from '../Shared/Tittle/Tittle';
import BlogCardLatest from './BlogCardLatest';
import Search from '../Search/Search';
import './BlogRoute.css'
import { useGetblogsQuery } from '../Redux/feature/api/baseapi';



const BlogRoute = () => {
  // const [blogs, setBlogs] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of blogs to display per page
  const {data: blogs, isLoading} = useGetblogsQuery();
 
  // useEffect(() => {
  //   fetch('https://asetta-autos-production.up.railway.app/our-blogs/')
  //     .then((res) => res.json())
  //     .then((data) => setBlogs(data));
  // }, []);

  useEffect(() => {
    const filtered = blogs?.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  }, [query, blogs]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setCurrentPage(1); // Reset to the first page when searching
  };

  // Calculate the starting and ending indices for the current page.
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the filtered data to display only the items for the current page.
  const blogsToDisplay = filteredData?.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredData?.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <RouteBanner SectionTitle={'Our Blogs'} smallTitle={'Our Blogs'}></RouteBanner>
      <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24'>
        <Tittle topTitle={"Our Blog"} boldblackTitle={"Latest News &"} boldredTitle={"Blog"}></Tittle>
        <div className="flex flex-wrap items-center space-x-2 justify-center text-xl my-10">
          <Search onSearch={handleSearch}></Search>
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-14 mb-10'>
          {blogsToDisplay?.map((blog) => (
            <BlogCardLatest key={blog._id} blogs={blog} pageNumber={currentPage}></BlogCardLatest>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="pagination-container">
    <button
      className='button'
      onClick={() => handlePageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      Previous
    </button>
    <div className="pagination-buttons">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`pagination-button ml-4 button ${
            currentPage === index + 1 ? 'active' : ''
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
    <button
      className='button ml-4'
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Next
    </button>
  </div>







      </div>
    </>
  );
};

export default BlogRoute;
