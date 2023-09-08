import React from 'react';
import Button from '../Button/Button';

const SubmitVehicle = () => {
    return (
        <div className='text-left md:text-center my-24 px-4 xl:px-[140px] 2xl:px-[240px]'>
            <h1 className='font-semibold text-left md:text-center text-2xl md:text-5xl mb-6'>Looking to quickly sell your car online? <br /> You&apos;ve come to the right place!</h1>
            <p className='my-6'>
                If you&apos;re wondering how to go about selling your car, we&apos;re here to help you find the ideal way to maximise <br /> the return for your current vehicle.
            </p>
            <Button button={'submit your vehicle now'} />
        </div>
    );
};

export default SubmitVehicle;