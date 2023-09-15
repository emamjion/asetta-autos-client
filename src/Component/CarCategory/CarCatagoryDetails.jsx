import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const CarCatagoryDetails = () => {
    const { id } = useParams()
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/carbodyType/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={data.img4} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{data.name}</h2>
                <p>{data.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default CarCatagoryDetails;