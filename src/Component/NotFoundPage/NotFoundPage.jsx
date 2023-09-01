import React from 'react';
import RouteBanner from '../Shared/RouteBanner/RouteBanner';
import image from '../../assets/images/Banner/404.png';
import Button from '../Button/Button';
import { AiFillHome } from 'react-icons/Ai';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <>
            <RouteBanner SectionTitle={"404 Error"} smallTitle={"404 Error"}></RouteBanner>
            <div className='my-32'>
                <img className='w-[650px] mx-auto' src={image} alt="" />
                <div className='text-center'>
                    <h1 className='text-4xl mt-10 text-black font-bold'>Opos... Page Not Found!</h1>
                    <p className='mt-5'>The page you looking for not found may be it not exist or removed.</p>
                </div>
                <Link to='/'><button className="btn mx-auto py-4 btn-sm md:btn-md mt-5 bg-red-600  flex justify-center items-center  text-white  hover:bg-black">
                    Go Back Home  <AiFillHome />{" "}
                </button></Link>
            </div>
        </>
    );
};

export default NotFoundPage;