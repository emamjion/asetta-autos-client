import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import RouteBanner from '../Shared/RouteBanner/RouteBanner';
import { FaArrowRight } from 'react-icons/fa';

const ServiceSectionDetails = () => {
    const { id } = useParams();
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch(`https://asetta-autos-production.up.railway.app/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    console.log(service)

    const { _id, service_name, photos, photos1, photos2, blog1, bolg2, skilled, equpement, approch, pricing, accessment, diagnostic, plan, execution, quality_check } = service;


    return (
        <>
            <RouteBanner SectionTitle={'Single Service'} smallTitle={'Single Service'}></RouteBanner>
            <div className='flex md:flex-row sm:flex-row font-bold px-4 xl:px-[140px] 2xl:px-[240px] mb-4 m-3'>
                <div className='w-1/3 '>
                    <div className="card w-96 bg-base-100 shadow-xl relative">
                        <div className="card-body">
                            <h2 className="card-title text-3xl">All SERVICE</h2>
                            <hr className='w-1/3 border-2 border-[#ef1721] ' />
                            <Link>
                                <div className='flex items-center my-4 text-black transition-transform transform translate-x-0  hover:translate-x-4 duration-700'>
                                    <FaArrowRight className='mx-2 text-red-600'></FaArrowRight> <p>Auto Electric</p>
                                </div>
                            </Link>
                            <hr />
                            <Link>
                                <div className='flex items-center my-4 transition-transform transform translate-x-0  hover:translate-x-4 duration-700'>
                                    <FaArrowRight className='mx-2 text-red-600'></FaArrowRight> <p>Heating & AC Repairs</p>
                                </div>
                            </Link>
                            <hr />
                            <Link>
                                <div className='flex items-center my-4 transition-transform transform translate-x-0  hover:translate-x-4 duration-700'>
                                    <FaArrowRight className='mx-2 text-red-600'></FaArrowRight> <p>Brake & Repair Service</p>
                                </div>
                            </Link>
                            <hr />
                            <Link>
                                <div className='flex items-center my-4 transition-transform transform translate-x-0  hover:translate-x-4 duration-700'>
                                    <FaArrowRight className='mx-2 text-red-600'></FaArrowRight> <p>Engine & Transmission</p>
                                </div>
                            </Link>
                            <hr />
                            <Link>
                                <div className='flex items-center my-4 transition-transform transform translate-x-0  hover:translate-x-4 duration-700'>
                                    <FaArrowRight className='mx-2 text-red-600'></FaArrowRight> <p>Engine Upgrades</p>
                                </div>
                            </Link>
                            <hr />
                            <Link>
                                <div className='flex items-center my-4 transition-transform transform translate-x-0  hover:translate-x-4 duration-700'>
                                    <FaArrowRight className='mx-2 text-red-600'></FaArrowRight> <p>Auto Electric</p>
                                </div>
                            </Link>

                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl mt-8">
                        <div className="card-body my-8">
                            <h2 className="card-title text-3xl">All SERVICE</h2>
                            <hr className='w-1/3 border-2 border-[#ef1721] ' />
                            <button className="btn btn-outline btn-secondary border-red-600 hover:bg-red-600 my-3 mt-5"> Download Brochure</button>
                            <button className="btn btn-outline btn-secondary my-1">Download Application</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-2/3 mx-auto bg-base-100 shadow-xl">
                    <figure><img className='w-full' src={photos} alt="Shoes" /></figure>
                    <div className="card-body font-bold">
                        <h2 className=" text-3xl">{service_name}</h2>
                        <p className='text-xl'>{blog1}</p>
                        <img src={photos2} alt="Shoes" />
                        <p className='text-xl'>{bolg2}</p>
                        <h1 className='text-3xl text-start my-4'>Our Work Proccess</h1>
                        <p className='text-xl'>1. {plan}</p>
                        <p className='text-xl'>2. {diagnostic}</p>
                        <p className='text-xl'>3. {execution}</p>
                        <p className='text-xl'>4. {quality_check}</p>
                        <h1 className='text-3xl text-start my-4'>Our Features</h1>
                        <p className='text-xl'>1. {skilled}</p>
                        <p className='text-xl'>2. {equpement}</p>
                        <p className='text-xl'>3. {approch}</p>
                        <p className='text-xl'>4. {pricing}</p>
                        <p className='text-xl'>4. {accessment}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceSectionDetails;