import React from 'react';
import { Link } from 'react-router-dom';

const MeetOurTeamCard = ({ member }) => {
    const { _id,name, position, photos, profession, personal_life, future_goal } = member;
    return (
        <Link to={`/ourteam/${_id}`}>
            <div className="card w-full bg-base-100 font-bold shadow-xl hover: duration-500 hover:-translate-y-2 cursor-pointer">
                <figure className="px-10 pt-10">
                    <img src={photos} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title hover:text-[#ef1721]">{name}</h2>
                    <p className='text-[#ef1721]'>{position}</p>
                </div>
            </div>
        </Link>

    );
};

export default MeetOurTeamCard;