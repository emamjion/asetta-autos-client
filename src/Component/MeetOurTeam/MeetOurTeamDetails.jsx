import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Tittle from '../Shared/Tittle/Tittle';
import RouteBanner from '../Shared/RouteBanner/RouteBanner';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Button from '../Button/Button';

const MeetOurTeamDetails = () => {
    const { id } = useParams();
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch(`https://asetta-autos-server-gules.vercel.app/ourteam/${id}`)
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])

    const { _id, name, position, photos, profession, personal_life, future_goal } = teams;


    return (
        <>
            <RouteBanner SectionTitle={'Our Agent'} smallTitle={'Our Agent'}></RouteBanner>
            <div className='px-4 xl:px-[140px] 2xl:px-[240px] md:flex justify-center  gap-6'>
                <div className='md:w-1/2 mb-8 md:mb-0'>
                <img src={photos} className='rounded-lg shadow-xl w-full' />
                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-3xl font-semibold'>{name}</h1>
                    <h4 className='text-[#535353]'>{position}</h4>
                    <div className='mt-6'>
                        <h5 className='text-xl font-medium'>Profession</h5>
                        <hr className='w-16 mt-2 bg-[#ef1721] h-1' /> 
                        <hr className='w-12 mt-1 bg-[#ef1721] h-1' /> 
                        <p className='mt-3 text-[#757575] text-justify'>{profession}</p>
                    </div>
                    <div className='mt-6'>
                        <h5 className='text-xl font-medium'>Personal Life</h5>
                        <hr className='w-16 mt-2 bg-[#ef1721] h-1' /> 
                        <hr className='w-12 mt-1 bg-[#ef1721] h-1' /> 
                        <p className='mt-3 text-[#757575] text-justify'>{personal_life}</p>
                    </div>
                    <div className='mt-6'>
                        <h5 className='text-xl font-medium'>Future Goal</h5>
                        <hr className='w-16 mt-2 bg-[#ef1721] h-1' /> 
                        <hr className='w-12 mt-1 bg-[#ef1721] h-1' />
                        <p className='mt-3 text-[#757575] text-justify'>{future_goal}</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center text-xl my-10 text-[#ef1721]'>
                <Link to='/about'>
                    <Button
                        button={'Back'}
                    />
                </Link>

            </div>
        </>
    );
};

export default MeetOurTeamDetails;