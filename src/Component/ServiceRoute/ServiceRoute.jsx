import React from 'react';
import RouteBanner from '../Shared/RouteBanner/RouteBanner';
import ServiceSection from '../ServiceSection/ServiceSection';

const ServiceRoute = () => {
    return (
        <div>
            <RouteBanner SectionTitle={'Our Service'} smallTitle={'Our Service'}></RouteBanner>
             <ServiceSection></ServiceSection>
        </div>
    );
};

export default ServiceRoute;