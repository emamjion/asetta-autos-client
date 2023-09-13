import React from 'react';
import { FaCarAlt } from 'react-icons/fa';
import { FaNewspaper } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import {  HiOutlineDocumentText } from "react-icons/hi";
import { GiPriceTag } from 'react-icons/gi';
import { GrServices } from "react-icons/gr";
import { BiSolidCheckShield } from 'react-icons/bi';

const WhereToNext = () => {
    return (
        <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24'>
            <div className='flex items-center flex-col'>
                <h3 className='text-[#ef1721] font-bold'>Discover Today</h3>
                <h1 className='font-medium text-3xl mb-3'>Where to Next</h1>
                <p className='text-[#535353]'>
                    Whether you are shopping for a new car or selling your current one, the next step in your journey starts here. Explore the posibilites
                </p>
            </div>
            <div className='mt-12'>
                <div>
                    <span> < FaCarAlt /> </span>
                    <div>
                        <h1>Shop</h1>
                        <p>
                            Search millions of new and used cars for sale. Save favourites for price drop alerts and tailored recommandations. Find the right vehicle at a highly-rated local dealer.
                        </p>
                        <Link>Search cars for sale</Link>
                    </div>
                </div>
                <div>
                    <span> < HiOutlineDocumentText /> </span>
                    <div>
                        <h1>Research</h1>
                        <p>
                            Explore unbiased, expert reviews, Compare vehicles side-by-side. Calculate your monthly payment. Choose with confidence.
                        </p>
                        <Link>Compare what's out there</Link>
                    </div>
                </div>
                <div>
                    <span> < FaNewspaper /> </span>
                    <div>
                        <h1>News</h1>
                        <p>
                            Get the latest automotive news and export takes from our Editorial team. Watch unblased and comprehensive video  reviews of new models. Stay in the know. 
                        </p>
                        <Link>Get the latest</Link>
                    </div>
                </div>
                <div>
                    <span> < GiPriceTag /> </span>
                    <div>
                        <h1>Sell</h1>
                        <p>
                            Cash-in an instant offer from a local dealer, or create a free listing to sell it yourself on asettaautos.com. It's never been easier to sell your car, your way.
                        </p>
                        <Link>Sell your car your way</Link>
                    </div>
                </div>
                <div>
                    <span> < GrServices /> </span>
                    <div>
                        <h1>Service & Repair</h1>
                        <p>
                            Watch do-it-yourself tutorials. Check current manufacturer recalls. Find local repair options. We're here to help throughout your ownership experience.
                        </p>
                        <Link>Explore service</Link>
                    </div>
                </div>
                <div>
                    <span> < BiSolidCheckShield /> </span>
                    <div>
                        <h1>Certified Pre-Owned</h1>
                        <p>
                            Consider Certified Pre-Owned vehicles for like-new quality at used prices. Compare manufacturer programs. Search local CPO inventory in your area.
                        </p>
                        <Link>Explore CPO</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhereToNext;