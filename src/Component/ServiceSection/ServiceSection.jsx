import React, { useEffect, useState } from 'react';
import Tittle from '../Shared/Tittle/Tittle';
import ServiceSectionCard from './ServiceSectionCard';

const ServiceSection = () => {
    const [services , setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <Tittle topTitle={"services"} boldblackTitle={"What We"} boldredTitle={"Offer"}></Tittle>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8  px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24'>
                {
                    services.map(service=><ServiceSectionCard key={service._id} service={service}></ServiceSectionCard>)
                }
            </div>
        </div>
    );
};

export default ServiceSection;