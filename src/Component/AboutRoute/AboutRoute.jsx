import React from 'react';
import RouteBanner from '../Shared/RouteBanner/RouteBanner';
// import AboutUs from '../AboutUs/AboutUs';
import Testimonials from '../Testimonials/Testimonials';
import MeetOurTeam from '../MeetOurTeam/MeetOurTeam';
import PopularBrand from '../PopularBrand/PopularBrand';
import About from '../../Pages/About/About';
import CompanyInfo from '../../Pages/About/CompanyInfo';

const AboutRoute = () => {
    return (
        <div>
            <RouteBanner SectionTitle={'About Us'} smallTitle={'About Us'}></RouteBanner>
            {/* <AboutUs></AboutUs> */}
            {/* Welcome to asetta auto's about section - Emam */}
            <About/>

            {/* About our company Info section - Emam */}
            <CompanyInfo/>

            <Testimonials></Testimonials>
            <MeetOurTeam></MeetOurTeam>
            <PopularBrand></PopularBrand>
        </div>
    );
};

export default AboutRoute;