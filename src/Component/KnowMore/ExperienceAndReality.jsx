import React, { useContext } from 'react';
import experiencePic from '../../assets/images/about/experience.png';
import { AuthContex } from '../Providers/Authprovider';

const ExperienceAndReality = () => {
    const { theme } = useContext(AuthContex)
    return (
        <div className={`px-4 xl:px-[140px] 2xl:px-[240px] mode ${theme} my-14 md:my-24`}>
            <div className='flex justify-center'>
                <div className='w-1/2'>
                    <h4 className='font-semibold text-lg text-[#ef1721]'>Asetta Auto's</h4>
                    <hr className='w-20 border border-[#ef1721] mt-2 mb-3' />
                    <h1 className='text-3xl font-medium'>Reality & Experience</h1>
                    <p className={`mt-6 w-3/4 text-[#757575] mode ${theme}`}>
                    Aliquam nostra condimentum blandit diam libero habitant odio, aliquam a nam faucibus rhoncus malesuada porta vitae.
                    </p>
                    <p className={`mt-8 w-3/4 text-[#757575] mode ${theme}`}>
                        Aliquam tincidunt cursus. Sed id urna venenatis Ligula est condimentum praesent pretium netus tempor id mollis est. Amet. Nascetur nunc senectus bibendum. Quis amet odio dapibus maecenas laoreet amet quis nunc. Elementum, libero litora dis pretium nam praesent neque tortor libero nostra. Aliquet luctus sapien, imperdiet felis feugiat. Hymenaeos ad accumsan sodales.
                    </p>
                    <p className={`mt-8 w-3/4 text-[#757575] mode ${theme}`}>
                        Convallis venenatis pharetra ut eu laoreet consequat mauris. Commodo aliquet id. Fringilla neque nam scelerisque. Ridiculus iaculis nascetur sagittis pulvinar litora feugiat aliquam pretium fringilla nibh pulvinar.
                    </p>
                </div>
                <div>
                    <img src={experiencePic} className='rounded shadow-xl' />
                </div>
            </div>
        </div>
    );
};

export default ExperienceAndReality;