import React from 'react';
import RouteBanner from '../Shared/RouteBanner/RouteBanner';
import ServiceSection from '../ServiceSection/ServiceSection';
import TheMarket from '../../Pages/Services/TheMarket/TheMarket';
import WhatWeOffer from '../../Pages/Services/WhatWeOffer/WhatWeOffer';
import OurServices from '../../Pages/Services/OurServices/OurServices';

const ServiceRoute = () => {
    return (
        <div>
            <RouteBanner SectionTitle={'Our Service'} smallTitle={'Our Service'}></RouteBanner>
                {/* <ServiceSection></ServiceSection> */}

                {/* A Partner ... the market section */}
                <TheMarket/>

                {/* What We Offer section */}
                <WhatWeOffer/>

                {/* Our Services Section */}
                <OurServices/>
        </div>
    );
};

export default ServiceRoute;