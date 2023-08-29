import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ServiceSectionCard = ({ service }) => {
    const { _id, service_name, photos,equpement, blog1, bolg2 } = service;
    // console.log(feature[1])
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photos} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{service_name}</h2>
                <p>{equpement}</p>

                <Link to={`/services/${_id}`} > <button className="btn btn-primary border-none mt-5 bg-[#ef1721] hover:bg-black duration-500 rounded-lg ">Read More <FaArrowRight></FaArrowRight></button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceSectionCard;