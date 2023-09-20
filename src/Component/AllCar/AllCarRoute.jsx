import React from 'react';
import CarLeftSidebar from './CarLeftSidebar';
import CarContent from './CarContent';
import CarRightSidebar from './CarRightSidebar';

const AllCarRoute = () => {
    return (
        <div className='flex items-center my-12'>
            <div className='border h-screen w-[20%]'>
                <CarLeftSidebar/>
            </div>
            <div className='border h-96 w-[60%]'>
                <CarContent/>
            </div>
            <div className='border h-96 w-[20%]'>
                <CarRightSidebar/>
            </div>
        </div>
    );
};

export default AllCarRoute;