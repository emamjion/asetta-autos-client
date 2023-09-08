import React from 'react';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
   
    return (
        <div>
            <h2>pay with strip</h2>
            <Elements stripe={stripePromise}>
            <CheckOut></CheckOut>
            </Elements>
           
        </div>
    );
};

export default Payment;
