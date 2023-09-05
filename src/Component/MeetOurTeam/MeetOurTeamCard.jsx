import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

// TODO: card hover korle overlay hobe. card er upor overlay add korte hobe.
const MeetOurTeamCard = ({ member }) => {
    const { _id,name, position, photos, profession, personal_life, future_goal } = member;
    return (
        <Link to={`/ourteam/${_id}`}>
            <div className='box border bg-white shadow-sm pb-6 hover:-translate-y-3 duration-500'>
                <div className='relative'>
                    <img src={photos} className='' />
                    <div className='flex items-center justify-center gap-4 absolute top-0 left-0 bottom-0 right-0 opacity-0 hover:opacity-100 bg-[rgba(0,0,0,0.7)] text-white text-3xl duration-500'>
                        <span className='hover:text-[#ef1721] duration-500'> < FaFacebook /> </span>
                        <span className='hover:text-[#ef1721] duration-500'> < FaInstagram /> </span>
                        <span className='hover:text-[#ef1721] duration-500'> < FaLinkedin /> </span>
                    </div>
                </div>
                <div className='text-center mt-5'>
                    <h1 className='text-xl font-medium'>{name}</h1>
                    <p className='mt-1 text-[#535353]'>{position}</p>
                </div>
            </div>
        </Link>

    );
};

export default MeetOurTeamCard;