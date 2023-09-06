import React from 'react';
import RouteBanner from '../Shared/RouteBanner/RouteBanner';
// import AboutUs from '../AboutUs/AboutUs';
import Testimonials from '../Testimonials/Testimonials';
import MeetOurTeam from '../MeetOurTeam/MeetOurTeam';
import PopularBrand from '../PopularBrand/PopularBrand';
import About from '../../Pages/About/About';
import CompanyInfo from '../../Pages/About/CompanyInfo';
import WhyWeBest from '../../Pages/About/WhyWeBest';
import AchievementHistory from '../../Pages/About/AchievementHistory';
import ReasonsToBuy from '../../Pages/About/ReasonsToBuy/ReasonsToBuy';
import OurStuff from '../../Pages/About/OurStuff';


const AboutRoute = () => {
    return (
        <div>
            <RouteBanner SectionTitle={'About Us'} smallTitle={'About Us'}></RouteBanner>
            {/* <AboutUs></AboutUs> */}
            {/* Welcome to asetta auto's about section - Emam */}
            <About/>

            {/* About our company Info section - Emam */}
            <CompanyInfo/>

            {/* Why we are the best section - Emam */}
            <WhyWeBest/>

            {/* Achievement History */}
            <AchievementHistory/>

            {/* Reasons to Buy section */}
            <ReasonsToBuy/>

            {/* Meet Our stuff section */}
            <OurStuff/>

            {/* <Testimonials></Testimonials> */}
            <MeetOurTeam></MeetOurTeam>
            {/* <PopularBrand></PopularBrand> */}
        </div>
    );
};

export default AboutRoute;