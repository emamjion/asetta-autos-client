import React from 'react';
import Tittle from '../Shared/Tittle/Tittle';
import { useState } from 'react';
import { useEffect } from 'react';
import MeetOurTeamCard from './MeetOurTeamCard';

const MeetOurTeam = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('https://asetta-autos-production.up.railway.app/ourteam')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])
    return (
        <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24'>
            <Tittle topTitle={"Team"}
                boldblackTitle={"Meet With Our"}
                boldredTitle={"Team"}></Tittle>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12'>
                {
                    members.map(member => <MeetOurTeamCard key={member._id} member={member}></MeetOurTeamCard>)
                }
            </div>
        </div>
    );
};

export default MeetOurTeam;