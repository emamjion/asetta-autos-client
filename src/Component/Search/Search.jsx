import React from 'react';
import { useState } from 'react';
import Button from '../Button/Button';

const Search = ({ onSearch }) => {

    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        onSearch(newQuery);
    };


    return (
        <div className='flex flex-wrap items-center '>
            <input
                type="text"
                placeholder="Search"
                className=" py-2 px-4 rounded-l-md focus:outline-none focus:ring focus:border-blue-500 w-full  mb-2 md:mb-0 md:w-96 sm:w-96   border border-red-400"
                value={query}
                onChange={handleInputChange}
            />
            {/* <button
                id="searchButton"
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-r-md focus:outline-none"
            >
                Search
            </button> */}
            <Button id="searchButton" className='border-black' button={'Search'} />
        </div>
    );
};

export default Search;