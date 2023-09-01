import React from 'react';
import demoPic from '../../assets/images/about/about-3.png'

const AchievementHistory = () => {
    return (
        <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24'>
            <div>
                <div>
                    <img src={demoPic} />
                </div>
                <div>
                    <div className=''>
                        <span className='text-[#ef1721] text-xl font-medium'>HISTORY</span>
                        <h1 className='font-semibold text-3xl my-2'>Our Previous Achievement History</h1>
                        <hr className='w-24 border-2 border-[#ef1721]'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AchievementHistory;