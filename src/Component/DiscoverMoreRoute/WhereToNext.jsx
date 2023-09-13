import React from 'react';
import { FaCarAlt, FaTools } from 'react-icons/fa';
import { FaNewspaper } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import {  HiOutlineDocumentText } from "react-icons/hi";
import { GiPriceTag } from 'react-icons/gi';
import { BiSolidCheckShield } from 'react-icons/bi';

const WhereToNext = () => {
    return (
        <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24'>
            <div className='flex items-center flex-col'>
                <h3 className='text-[#ef1721] font-bold mb-2'>Discover Today</h3>
                <h1 className='font-medium text-3xl mb-2'>Where to Next</h1>
                <p className='text-[#535353]'>
                    Whether you are shopping for a new car or selling your current one, the next step in your journey starts here. Explore the posibilites
                </p>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='border p-6 flex gap-3'>
                    <span className='text-4xl'> < FaCarAlt /> </span>
                    <div>
                        <h1 className='text-2xl font-semibold'>Shop</h1>
                        <p className='mt-2 text-[#535353] w-[75%]'>
                            Search millions of new and used cars for sale. Save favourites for price drop alerts and tailored recommandations. Find the right vehicle at a highly-rated local dealer.
                        </p>
                        <div>
                            <Link>Search cars for sale</Link>
                        </div>
                    </div>
                </div>
                <div className='border p-6 flex gap-3'>
                    <span className='text-4xl'> < HiOutlineDocumentText /> </span>
                    <div>
                        <h1 className='text-2xl font-semibold'>Research</h1>
                        <p className='mt-2 text-[#535353] w-[75%]'>
                            Explore unbiased, expert reviews, Compare vehicles side-by-side. Calculate your monthly payment. Choose with confidence.
                        </p>
                        <div>
                            <Link>Compare what's out there</Link>
                        </div>
                    </div>
                </div>
                <div className='border p-6 flex gap-3'>
                    <span className='text-4xl'> < FaNewspaper /> </span>
                    <div>
                        <h1 className='text-2xl font-semibold'>News</h1>
                        <p className='mt-2 text-[#535353] w-[75%]'>
                            Get the latest automotive news and export takes from our Editorial team. Watch unblased and comprehensive video  reviews of new models. Stay in the know. 
                        </p>
                        <Link>Get the latest</Link>
                    </div>
                </div>
                <div className='border p-6 flex gap-3'>
                    <span className='text-4xl text-[#ef1721]'> < GiPriceTag /> </span>
                    <div>
                        <h1 className='text-2xl font-semibold'>Sell</h1>
                        <p className='mt-2 text-[#535353] w-[75%]'>
                            Cash-in an instant offer from a local dealer, or create a free listing to sell it yourself on asettaautos.com. It's never been easier to sell your car, your way.
                        </p>
                        <Link>Sell your car your way</Link>
                    </div>
                </div>
                <div className='border p-6 flex gap-3'>
                    <span className='text-4xl text-[#ef1721]'> < FaTools /> </span>
                    <div>
                        <h1 className='text-2xl font-semibold'>Service & Repair</h1>
                        <p className='mt-2 text-[#535353] w-[75%]'>
                            Watch do-it-yourself tutorials. Check current manufacturer recalls. Find local repair options. We're here to help throughout your ownership experience.
                        </p>
                        <div className='mt-2'> 
                            <Link className='text-[#ef1721] font-medium'>Explore service</Link>
                        </div>
                    </div>
                </div>
                <div className='border p-6 flex gap-3'>
                    <span className='text-4xl text-[#ef1721]'> < BiSolidCheckShield /> </span>
                    <div>
                        <h1 className='text-2xl font-semibold'>Certified Pre-Owned</h1>
                        <p className='mt-2 text-[#535353] w-[75%]'>
                            Consider Certified Pre-Owned vehicles for like-new quality at used prices. Compare manufacturer programs. Search local CPO inventory in your area.
                        </p>
                        <div className='mt-2'>
                            <Link className='text-[#ef1721] font-medium'>Explore CPO</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhereToNext;