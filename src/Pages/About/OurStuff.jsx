import React, { useEffect, useState } from 'react';
import demoPic from '../../assets/images/about/about-1.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaEnvelope, FaMobile } from 'react-icons/fa';

const OurStuff = () => {
    const [stuffs, setStuffs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/ourStuf')
        .then(res => res.json())
        .then(data => setStuffs(data))
    }, [])
    
    return (
        <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24 bg-[#f7f7f7] p-8 md:p-20'>
            <div className='flex  flex-col md:flex-row  justify-center'>
                <div className='md:w-1/3 p-6'>
                    <h1 className='font-semibold text-5xl mb-6'>Meet Our Stuff</h1>
                    <hr className='w-28 mt-2 border-[#ef1721] border' />
                    <hr className='w-20 mt-2 border-[#ef1721] border' />
                    <p className='mt-10 text-[#827a8e]'>
                        We are so excited to brag about our staff! Our <br /> community is where we share expertise and diverse <br /> perspectives. You'll find a group of committed <br /> automotive professionals, each one ready to put in <br /> the time and effort to ensure your satisfaction.
                    </p>
                    <p className='mt-7 text-[#827a8e]'>
                        We would love to get to know you in turn, so be sure <br /> to come see us in person!
                    </p>
                </div>
                <div className='md:w-2/4'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        stuffs.map(stuff => <SwiperSlide
                            key={stuff.id}
                        >
                            <div className='flex items-center flex-col'>
                                <img src={stuff.image} className='rounded border-8 border-[#fff]' />
                                <div className='bg-[#fff] md:w-[50%] -ml-7 md:h-48 -mt-12 p-6 rounded'>
                                    <h1 className='text-xl font-bold text-[#ef1721]'>{stuff.name}</h1>
                                    <h5 className='mb-4 text-[#827a8e] font-medium'>{stuff.position}</h5>
                                    <div className='flex items-center gap-2 mb-2 font-medium'>
                                        <span> < FaMobile /> </span>
                                        <span>{stuff.phone}</span>
                                    </div>
                                    <div className='flex items-center gap-2 font-medium'>
                                        <span> < FaEnvelope /> </span>
                                        <span>{stuff.email}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
                    {/* <img src={demoPic} /> */}
                </div>
            </div>
        </div>
    );
};

export default OurStuff;

