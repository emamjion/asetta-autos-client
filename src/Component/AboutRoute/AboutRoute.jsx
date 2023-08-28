import React from 'react';
import RouteBanner from '../Shared/RouteBanner/RouteBanner';
import AboutUs from '../AboutUs/AboutUs';
import Testimonials from '../Testimonials/Testimonials';
import MeetOurTeam from '../MeetOurTeam/MeetOurTeam';
import PopularBrand from '../PopularBrand/PopularBrand';

const AboutRoute = () => {
    return (
        <div>
            <RouteBanner SectionTitle={'About Us'} smallTitle={'About Us'}></RouteBanner>
            <AboutUs></AboutUs>
            <Testimonials></Testimonials>
            <MeetOurTeam></MeetOurTeam>
            <PopularBrand></PopularBrand>
        </div>
    );
};

export default AboutRoute;