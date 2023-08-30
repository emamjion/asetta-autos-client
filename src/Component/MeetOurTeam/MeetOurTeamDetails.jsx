import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Tittle from '../Shared/Tittle/Tittle';
import RouteBanner from '../Shared/RouteBanner/RouteBanner';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const MeetOurTeamDetails = () => {
    const { id } = useParams();
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/ourteam/${id}`)
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])

    const { _id, name, position, photos, profession, personal_life, future_goal } = teams;


    return (
        <>
            <RouteBanner SectionTitle={'Our Team'} smallTitle={'Our Team'}></RouteBanner>
            <div className="card font-bold w-full lg:card-side bg-base-100 shadow-xl p-10">
                <figure><img className='' src={photos} alt="Album" /></figure>
                <div className="card-body w-1/2">
                    <h2 className="card-title text-2xl ms-4">Name: {name}</h2>
                    <h2 className="card-title text-2xl ms-4">Positon: {position}</h2>
                    <p className='text-xl m-5'><span className='text-2xl'>Professional life :</span> {profession}</p>
                    <p className='text-xl m-5'><span className='text-2xl'>Blog :</span>  {personal_life}</p>
                    <p className='text-xl m-5'><span className='text-2xl'>life :</span> {future_goal}</p>
                    <div className="card-actions justify-end mt-5">
                        <div className="sociallink">
                            <a href="https://www.facebook.com">
                                <FaFacebook className='icons'></FaFacebook>
                            </a>
                            <a href="https://www.twitter.com">
                                <FaTwitter className='icons'></FaTwitter>
                            </a>
                            <a href="https://www.instagram.com">
                                <FaInstagram className='icons'></FaInstagram>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center text-4xl my-10 text-[#ef1721]'>
                <Link to='/about'>GO BACK TO ABOUT</Link>

            </div>
        </>
    );
};

export default MeetOurTeamDetails;