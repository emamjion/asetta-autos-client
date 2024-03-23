import React, { useContext, useEffect, useState } from 'react';
import Tittle from '../Shared/Tittle/Tittle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import { FaQuoteRight } from 'react-icons/fa';
import '@smastrom/react-rating/style.css'
import { AuthContex } from './../Providers/Authprovider';


const Testimonials = () => {
    const { theme } = useContext(AuthContex);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://asetta-autos-server-gules.vercel.app/client-review')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        // responsive - mohosin
        <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24'>
            <Tittle
                topTitle={"Testimonials"} 
                boldblackTitle={"What our client"} 
                boldredTitle={"say's"}
            />
            <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                            className='py-16 mt-6'
                        >
                            <div className={`mx-auto  bg ${theme} p-8 w-9/12 md:w-[600px] shadow-2xl rounded-lg`}>
                                <img src={review.image} className='rounded-full w-16 md:w-[100px] md:h-[100px] border-4 border-[#ef1721] md:mb-2 mx-auto absolute top-10 md:top-1' />
                                <div className='flex items-start justify-start gap-4 my-4 w-[400px]'>
                                    <div>
                                        <h1 className='text-sm md:text-xl text-[#181818] font-bold'>{review.name}</h1>
                                        <h4 className='text-[#ef1721] text-xs md:text-sm font-medium'>{review.type}</h4>
                                    </div>
                                    <span className='text-2xl md:text-5xl ml-5 opacity-20'> < FaQuoteRight /> </span>
                                </div>
                                <p className='text-[#757575] text-xs md:text-sm mb-3 text-justify'>{review.speach}</p>
                                <Rating
                                    style={{ maxWidth: 120 }}
                                    value={review.rating}
                                    readOnly                                
                                />
                            </div>
                        </SwiperSlide>)
                    }
                    
                    
            </Swiper>
        </div>
    );
};

export default Testimonials;