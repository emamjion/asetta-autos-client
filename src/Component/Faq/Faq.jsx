import React from 'react';
import RouteBanner from '../Shared/RouteBanner/RouteBanner';
import image from "../../../src/assets/images/Banner/lanbo.jpg";

const Faq = () => {
    return (
        <>
            <RouteBanner SectionTitle='Frequently Asked Questions' smallTitle='FAQ'></RouteBanner>
            <div className='px-4 xl:px-[140px] 2xl:px-[240px] my-14 md:my-24'>
                <div className='flex items-center gap-4'>
                    <div className='w-1/2'>
                        <h5 className='text-xl text-red-600 font-bold'>FAQ's</h5>
                        <h1 className='text-5xl font-bold mt-6'>General <span className='text-red-600'>Frequently</span> Asked Questions</h1>
                        <p className='mt-6'>There are many variations of passages of Lorem Ipsum available, but the majority <br /> have suffered alteration in some form, by injected humour, or randomised words <br /> which don't look even.</p>
                        <img className='mt-5 rounded-xl' src={image} alt="" />
                    </div>
                    <div className='w-1/2'>
                        <details className="collapse bg-base-200 m-5">
                            <summary className="collapse-title text-black text-2xl font-bold">How Long Does a Car Buy Take?</summary>
                            <div className="collapse-content">
                                <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit eu orci id odio facilisis pharetra. </p>
                            </div>
                        </details>
                        <details className="collapse bg-base-200 m-5">
                            <summary className="collapse-title text-black text-2xl font-bold">How Can I Become a Member?</summary>
                            <div className="collapse-content">
                                <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit eu orci id odio facilisis pharetra.  </p>
                            </div>
                        </details>
                        <details className="collapse bg-base-200 m-5">
                            <summary className="collapse-title text-black text-2xl font-bold">What Payment GetWay You Support?</summary>
                            <div className="collapse-content">
                                <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit eu orci id odio facilisis pharetra. </p>
                            </div>
                        </details>
                        <details className="collapse bg-base-200 m-5">
                            <summary className="collapse-title text-black text-2xl font-bold">How Can I Cancel My Request?</summary>
                            <div className="collapse-content">
                                <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit eu orci id odio facilisis pharetra. </p>
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Faq;