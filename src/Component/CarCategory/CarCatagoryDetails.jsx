import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const CarCatagoryDetails = () => {
    const { id } = useParams()
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://asetta-autos-production.up.railway.app/carbodyType/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl px-4 xl:px-[140px] 2xl:px-[240px] my-10">
            <img className='w-full hover:scale-110 duration-500' src={data.img4} alt="Album" />
            <div className="card-body">
                <h2 className="card-title text-3xl md:text-5xl uppercase mb-3">{data.name}</h2>
                <p className='text-sm tracking-wider text-justify'>{data.description}</p>
            </div>
        </div>
    );
};

export default CarCatagoryDetails;