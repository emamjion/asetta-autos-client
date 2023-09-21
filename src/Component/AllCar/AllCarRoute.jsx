import React from 'react';
import CarLeftSidebar from './CarLeftSidebar';
import CarContent from './CarContent';
import CarRightSidebar from './CarRightSidebar';
import { useContext } from 'react';
import { AuthContex } from '../Providers/Authprovider';

const AllCarRoute = () => {
    const { theme } = useContext(AuthContex)
    return (
        <div className={`flex items-center my-12 px-4 xl:px-[140px] 2xl:px-[240px] mode ${theme} my-14 md:my-24`}>
            <div className='h-screen w-[25%]'>
                <CarLeftSidebar/>
            </div>
            <div className='border h-screen w-[50%]'>
                <CarContent/>
            </div>
            <div className='border h-screen w-[25%]'>
                <CarRightSidebar/>
            </div>
        </div>
    );
};

export default AllCarRoute;