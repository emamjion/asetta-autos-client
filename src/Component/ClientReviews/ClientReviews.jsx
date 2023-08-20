import React from 'react';
import Tittle from '../Shared/Tittle/Tittle';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import SwiperCard from '../ReviewsCard/SwiperCard';

import ima1 from "../../assets/images/Banner/02.jpg"
import ima2 from "../../assets/images/Banner/03.jpg"
import ima3 from "../../assets/images/Banner/04.jpg"
import ima4 from "../../assets/images/Banner/05.jpg"

const ClientReviews = () => {
    return (
        <>
            <Tittle topTitle={"Testimonials"} boldblackTitle={"What Our Client"} boldredTitle={"Say's"}></Tittle>
            <div className='mx-[240px] py-20'>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={2}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper py-10"
                >
                    <SwiperSlide>
                        <SwiperCard image={ima1} name={"Herlui Nez"} reviews={"There are many variations of passages are available but the majority have suffered to the alternation to some injection"} rating={'4.5'}></SwiperCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCard image={ima2} name={"Herlui Nez"} reviews={"There are many variations of passages are available but the majority have suffered to the alternation to some injection"} rating={'4.5'}></SwiperCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCard image={ima3} name={"Herlui Nez"} reviews={"There are many variations of passages are available but the majority have suffered to the alternation to some injection"} rating={'4.5'}></SwiperCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCard image={ima4} name={"Herlui Nez"} reviews={"There are many variations of passages are available but the majority have suffered to the alternation to some injection"} rating={'4.5'}></SwiperCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCard image={ima1} name={"Herlui Nez"} reviews={"There are many variations of passages are available but the majority have suffered to the alternation to some injection"} rating={'4.5'}></SwiperCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCard image={ima2} name={"Herlui Nez"} reviews={"There are many variations of passages are available but the majority have suffered to the alternation to some injection"} rating={'4.5'}></SwiperCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCard image={ima3} name={"Herlui Nez"} reviews={"There are many variations of passages are available but the majority have suffered to the alternation to some injection"} rating={'4.5'}></SwiperCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCard image={ima4} name={"Herlui Nez"} reviews={"There are many variations of passages are available but the majority have suffered to the alternation to some injection"} rating={'4.5'}></SwiperCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCard image={ima1} name={"Herlui Nez"} reviews={"There are many variations of passages are available but the majority have suffered to the alternation to some injection"} rating={'4.5'}></SwiperCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCard image={ima2} name={"Herlui Nez"} reviews={"There are many variations of passages are available but the majority have suffered to the alternation to some injection"} rating={'4.5'}></SwiperCard>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </>
    );
};

export default ClientReviews;