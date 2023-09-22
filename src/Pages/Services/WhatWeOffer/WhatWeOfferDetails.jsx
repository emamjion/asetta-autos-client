import React from 'react';
import { FaMapMarkerAlt, FaMobile, FaPray } from 'react-icons/fa';
import { MdWatchLater } from 'react-icons/md';
import { NavLink, useParams } from 'react-router-dom';
import Button2 from '../../../Component/Button/Button2';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';


const WhatWeOfferDetails = () => {
    const { id } = useParams()
    const [data, setData] = useState([]);
    const formRef = useRef();
    useEffect(() => {
        fetch(`https://asetta-autos-production.up.railway.app/WhatWeOffer/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    const {image,serviceName,mainDesc,subDesc1,subDesc2,subDesc3} =data

    const handleEmailsubmit =(event) =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const text = form.text.value;
        console.log(name,email,text)
        Swal.fire('Your question is send succesfuly')
        form.reset();
    }

    return (
        <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24'>
            <div className='flex w-full gap-6'>
                {/* left side */}
                <div className='w-1/4'>
                    {/* First part */}
                    <div>
                        <NavLink className='block gap-2 bg-[#f7f7f7] p-5 mb-6 text-xl font-semibold'> Test Drive Any Car</NavLink>
                        <NavLink className='block bg-[#f7f7f7] p-5 mb-6 text-xl font-semibold'>Financing</NavLink>
                        <NavLink className='block bg-[#f7f7f7] p-5 mb-6 text-xl font-semibold'>Trade-In Service</NavLink>
                        <NavLink className='block bg-[#f7f7f7] p-5 mb-6 text-xl font-semibold'>Pre-Sale Preparetion</NavLink>
                    </div>
                    {/* Second part */}
                    <div className='p-5 bg-[#fff] shadow-md border'>
                        <h1 className='font-semibold text-xl mb-4'>Contact Info</h1>
                        <div className='flex gap-2 mb-4'>
                            <span className='text-[#ef1721] mt-1'> < FaMapMarkerAlt /> </span>
                            <div>
                                <h3 className='font-medium'>Address:</h3>
                                <p className='text-[#757575]'>3261 Anmoore Road,</p>
                                <p className='text-[#757575]'>Brooklyn, NY 11230</p>
                            </div>
                        </div>
                        <hr className='border my-4'/>
                        <div className='flex gap-2 mb-4'>
                            <span className='text-[#ef1721] mt-1'> < FaMobile /> </span>
                            <div>
                                <h3 className='font-medium'>Phone:</h3>
                                <p className='text-[#757575]'>+0123 456 77898</p>
                            </div>
                        </div>
                        <hr className='border my-4'/>
                        <div className='flex gap-2'>
                            <span className='text-[#ef1721] mt-1'> < MdWatchLater /> </span>
                            <div>
                                <h3 className='font-medium'>Working Time:</h3>
                                <p className='text-[#757575]'>Mon-Sat: 8:00am - 5:00pm</p>
                                <p className='text-[#757575]'>Sunday is closed</p>
                            </div>
                        </div>
                    </div>
                    {/* Third Part */}
                    <div className='mt-14'>
                        <h1 className='bg-[#ef1721] text-white p-4 text-center font-semibold text-2xl'>Book A Test Drive</h1>
                        <h4 className='mt-12 font-medium text-xl'>Ask Question</h4>
                        <form onSubmit={handleEmailsubmit} className="mt-6">
                            <div className="">
                                <input 
                                    type="text" 
                                    placeholder="Your Name*" 
                                    name="name" 
                                    className="w-full h-12 px-3 rounded bg-[#f7f7f7] py-4" 
                                />
                            </div>
                            <div className="mt-4">
                                <input 
                                    type="email" 
                                    placeholder="Email*" 
                                    name="email" 
                                    className="w-full h-12 px-3 rounded bg-[#f7f7f7] py-4"  
                                />
                            </div>
                            <div className="mt-4">
                                <textarea 
                                    cols='20' 
                                    rows='5' 
                                    name='text'
                                    className="w-full h-28 px-3 rounded bg-[#f7f7f7] py-4 resize-none"
                                    placeholder="Question"
                                ></textarea>
                            </div>
                            <div className="mt-3 text-center">
                                <Button2
                                    type='submit'
                                    button2={'Ask Question'}
                                />
                            </div>
                        </form>
                    </div>
                </div>
                {/* right side */}
                <div className='w-3/5'>
                    <img src={image} />
                    <h1 className='mt-10 mb-3 text-3xl font-semibold'>{serviceName}</h1>
                    <hr className='border border-[#ef1721] w-20' />
                    <p className='mt-4'>{mainDesc}</p>
                    <div className='space-y-10 mt-8 text-[#757575]'>
                        <p>{subDesc1}</p>
                        <p>{subDesc2}</p>
                        <p>{subDesc3}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeOfferDetails;