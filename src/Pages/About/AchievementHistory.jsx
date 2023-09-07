import React from 'react';
import Button from '../../Component/Button/Button';
import about1 from '../../assets/images/about/about-1.png'
import about2 from '../../assets/images/about/about-2.png'
import about3 from '../../assets/images/about/about-3.png'
import about4 from '../../assets/images/about/about-4.png'
import { Link } from 'react-router-dom';

const AchievementHistory = () => {
    return (
        <div className='px-4 xl:px-[140px] 2xl:px-[240px]  my-12 md:my-32'>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-6'>
                <div>
                    <div className="carousel w-full rounded">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={about1} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a> 
                            <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={about2} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a> 
                            <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={about3} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a> 
                            <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src={about4} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a> 
                            <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                    </div>
                </div>
                </div>
                <div>
                    <div className=''>
                        <span className='text-[#ef1721] text-xl font-medium'>HISTORY</span>
                        <h1 className='font-semibold text-3xl my-2'>Our Previous Achievement History</h1>
                        <hr className='w-16 border-2 border-[#ef1721]'/>
                    </div>
                    <h3 className='text-[#ef1721] font-medium text-xl my-3'>Till 2022</h3>
                    <p className='w-4/5 mt-8'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
                    </p>
                    <div className='mt-8'>
                        <Link to='/know-more'>
                            <Button button={'Know More'} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AchievementHistory;