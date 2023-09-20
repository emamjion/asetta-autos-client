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
        <div className="px-4 xl:px-[140px] 2xl:px-[240px] my-10">
            <div className='flex items-center gap-6'>
                <img src={data.img4} />
                <div>
                    <h1 className='text-3xl font-semibold capitalize mb-4'>{data.name}</h1>
                    <p className='text-[#757575]'>
                        {data.description}
                    </p>
                </div>
            </div>
            <div>
                <div className='text-center mt-16 mb-8'>
                    <h1 className='text-2xl font-semibold mb-2'>Car Gallery</h1>
                    <p className='text-[#757575]'>
                        We are providing a beautiful car gallery. So that our customer can easily know about {data.name}
                    </p>
                </div>
                <div className='flex items-center justify-center gap-3 mb-24'>
                    <img src={data.img1} className='rounded-lg' />
                    <img src={data.img2} className='rounded-lg' />
                    <img src={data.img3} className='rounded-lg' />
                </div>
            </div>
        </div>
    );
};

export default CarCatagoryDetails;