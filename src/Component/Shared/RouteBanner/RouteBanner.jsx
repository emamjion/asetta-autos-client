import React from 'react';
import './RouteBanner.css'
import { Link } from 'react-router-dom';

const RouteBanner = ({ SectionTitle, smallTitle }) => {
    return (
        <div>
            <div className="hero background-image mb-20">
                <div className="hero-overlay bg-black bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{SectionTitle}</h1>
                        <div className='flex justify-center items-center font-bold'>
                            <p><Link to='/'>Home  || </Link></p>
                            <p className='ml-2 text-red-600'>{smallTitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RouteBanner;