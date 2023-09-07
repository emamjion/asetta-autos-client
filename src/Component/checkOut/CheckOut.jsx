import React, { useContext, useEffect, useState } from "react";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { AuthContex } from "../Providers/Authprovider";

// Initialize Stripe with your public key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);


const CheckoutForm = () => {
  const {user} = useContext(AuthContex)
  const [cards, setCards] = useState([]);
  const [clientSecret, setClientSecret] = useState('price')
  
  useEffect(() => {
      fetch('http://localhost:5000/create-payment-intent')
      .then(res => res.json())
      .then(data => setClientSecret(data))
  }, [])


  useEffect(() => {
      fetch('http://localhost:5000/cards')
      .then(res => res.json())
      .then(data => setCards(data))
  }, [cards])

  

  const myCards = cards.filter(card=>card?.email === user?.email)
  // console.log(myCards);


  let [totalPrice, setTotalPrice] = useState(0);

  useEffect(()=>{
      const total = myCards.reduce((accumulator, product) => {
          return accumulator + (parseFloat(product?.price)* parseFloat(product?.items));
        }, 0);
        setTotalPrice(total);
      },[cards , totalPrice])


     totalPrice = parseFloat(totalPrice)
     console.log(totalPrice);

  const [cardError, setCardError] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();


    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
        return
    }

    const { error } = await stripe.createPaymentMethod({
        type: 'card',
        card
    })


    if (error) {
      console.log('error', error)
      setCardError(error.message);
  }
  else {
      setCardError('');
      // console.log('payment method', paymentMethod)
  }
   

    // Disable the submit button during processing
    setProcessing(true);

    // Create a payment method using the CardElement
    const result = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (result.error) {
      // Handle error, e.g., show error message to the user
      console.error(result.error.message);
    } else {
      // Payment method created successfully, you can now handle the payment
      console.log("Payment method created:", result.paymentMethod);
      // Here, you can send the payment method ID to your server for further processing
    }

    // Re-enable the submit button
    setProcessing(false);
  };

  return (
  <>
  <h1 className="text-4xl font-bold text-center ml-52 "><span className="text-red-600">Payment</span>  With Stripe</h1>
 <div className="grid md:grid-cols-2 mt-8 border p-12 w-full bg-slate-200 ml-36 ">
 <div className="ml-12">
    <img src="https://i.ibb.co/YWgRzvL/electronic-bill-payment-flat-con-removebg-preview.png" alt="" />
  </div>
    <div className="mt-28 ">
    <form className="mx-auto p-4" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#aab7c4',
              '::placeholder': {
                color: 'black',
              },
            },
            invalid: {
              color: 'black',
            },
          },
        }}
      />
      <button className="btn btn-outline w-24 mt-12 ml-32" type="submit" disabled={!stripe || processing}>
        {processing ? "Processing..." : "Pay"}
      </button>
    </form>
    {cardError && <p className="text-red-600 ml-8 font-bold">{cardError}</p>}

    </div>
 </div>
  </>
  );
};

const Checkout = () => {
  return (
    <div className="w-2/3 m-8">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Checkout;
