import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const WhatWeOfferDetails = () => {
    const { id } = useParams()
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://asetta-autos-production.up.railway.app/WhatWeOffer/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    const {image,serviceName,mainDesc,subDesc1,subDesc2,subDesc3} =data
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>{mainDesc}</p>
                <p>{subDesc1}</p>
                <p>{subDesc2}</p>
                <p>{subDesc3}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default WhatWeOfferDetails;