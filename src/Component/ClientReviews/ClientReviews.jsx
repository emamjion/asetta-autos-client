import React, { useEffect, useState } from 'react';
import Tittle from '../Shared/Tittle/Tittle';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import SwiperCard from '../ReviewsCard/SwiperCard';
import { useContext } from 'react';
import { AuthContex } from '../Providers/Authprovider';

// TODO: change the component name --> latest car section - Emam
const ClientReviews = () => {
    
    const [releaseCar, setReleaseCar] = useState([]);
    useEffect(() => {
        fetch('/releaseCar.json')
        .then(res => res.json())
        .then(data => setReleaseCar(data))
    }, [])
    return (
        <>
            <Tittle topTitle={"Car Release"} boldblackTitle={"The latest new car"} boldredTitle={"releases"}></Tittle>
            {/* responsive - mohosin */}
            <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24'>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={1}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                    releaseCar.map(car => <SwiperSlide
                        key={car.id}
                    >
                        <SwiperCard car={car} ></SwiperCard>
                    </SwiperSlide>)
                    }
                    
                </Swiper>
            </div>
        </>
    );
};

export default ClientReviews;