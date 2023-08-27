import React from 'react';
import RouteBanner from '../Shared/RouteBanner/RouteBanner';
import AboutUs from '../AboutUs/AboutUs';

const AboutRoute = () => {
    return (
        <div>
            <RouteBanner SectionTitle={'About Us'} smallTitle={'About Us'}></RouteBanner>
            <AboutUs></AboutUs>
        </div>
    );
};

export default AboutRoute;