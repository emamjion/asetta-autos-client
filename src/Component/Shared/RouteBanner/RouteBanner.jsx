import React, { useContext } from 'react';
import './RouteBanner.css'
import { Link } from 'react-router-dom';
import { AuthContex } from '../../Providers/Authprovider';

const RouteBanner = ({ SectionTitle, smallTitle }) => {
    const { theme } = useContext(AuthContex);
    return (
        <div>
            <div className={`hero background-image white ${theme}`}>
                <div className="hero-overlay bg-black bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className={`mb-5 text-3xl white ${theme} md:text-5xl font-bold uppercase`}>{SectionTitle}</h1>
                        <div className='flex justify-center items-center font-bold'>
                            <p className={`white ${theme}`}><Link to='/'>Home  || </Link></p>            
                            <p className='ml-2 text-red-600 uppercase'>{smallTitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RouteBanner;