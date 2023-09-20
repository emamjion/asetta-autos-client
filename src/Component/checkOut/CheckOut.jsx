import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContex } from '../Providers/Authprovider'; // Make sure to correct the import if needed
import { useParams } from 'react-router-dom';
import './Checkout.css';

const CheckOut = () => {
  const formRef = useRef(null);
  const { id } = useParams();
  const { user } = useContext(AuthContex); // Make sure to correct the import if needed

  const [cards, setCards] = useState([]);
  const [subTotal, setSubTotal] = useState(0); // State variable to store the subTotal
  const [orderId, setOrderId] = useState(null); // State variable to store the order ID
  const [currentStep, setCurrentStep] = useState(1); // State variable to manage the current step

  useEffect(() => {
    fetch('https://asetta-autos-production.up.railway.app/cards')
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  useEffect(() => {
    const myCard = cards.find((card) => card?._id === id);
    if (myCard) {
      const newSubTotal = myCard.price * myCard.items;
      setSubTotal(newSubTotal);
    }
  }, [cards, id]);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handlePay = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const address = form.address.value;
    const mobile = form.mobile.value;

    const adding = {
      name,
      country,
      address,
      mobile,
      userEmail: user.email,
      orderId: id, // Set the orderId using the id from useParams
    };

    fetch('http://localhost:5000/getmoney', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(adding),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.replace(data.url)
        console.log(data.url);
        formRef.current.reset();
        setOrderId(data.orderId); 
      });
  };


  return (
    <div className='ssl w-2/4 mx-auto shadow-lg h-[500px]'>
      {currentStep === 1 && (
        <div className='p-6'>
          <p className='text-3xl mb-8 font-semibold text-center text-blue-600'>Payment</p>

        <div className='flex justify-between'>
        <h1 className='  mb-2 font-semibold'>Item: </h1><h1>01</h1>
        </div>

<div className='flex justify-between'>  <h1 className=' mb-2 font-semibold'>Delivery fee: </h1> <h1>$00</h1>
</div>

<div className='flex justify-between'>  <h1 className=' mb-2 font-semibold'>Platform fee:  </h1> <h1>$00</h1>
</div>

<div className='flex justify-between mb-8'>  <h1 className='t mb-2 font-semibold'>Subtotal:  </h1> <h1> ${subTotal}</h1>
</div>
    
          <hr/>
          <div className='flex justify-between mt-2'>  <h1 className='text-xl mb-2 font-semibold'>Total:   </h1> <h1>${subTotal}</h1>
</div>
          <h1>{cards._id}</h1>
          <div className='text-center'>
          <button className="button mt-12" onClick={handleNextStep}>Next</button>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className='w-2/3 mx-auto py-6'>
          <h1 className='text-center text-2xl font-bold pb-4'>Information</h1>
    
          <form onSubmit={handlePay} ref={formRef}>
          <div className="gap-4 md:grid-cols-2 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name:</span>
              </label>
              <input type="text" placeholder="Your Name" name="name" className="input input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Address:</span>
              </label>
              <input type="text" placeholder="Address" name="address" className="input input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Country:</span>
              </label>
              <input type="country" placeholder="Your Country" name="country" className="input input-bordered" />
            </div>

         

            <div className="form-control">
              <label className="label">
                <span className="label-text">Mobile</span>
              </label>
              <input type="number" name="mobile" placeholder="Your Mobile No" className="input input-bordered" />
            </div>

       
          </div>
        <div className='flex justify-between mt-8'>
        <button className="button  mx-auto" onClick={handlePreviousStep}> Pre </button>
            <div className=" button   mx-auto">
            <input type="submit" value="Pay"  />
            </div>
        </div>
          </form>
        </div>
      )}

      {/* Add more steps as needed */}
    </div>
  );
};

export default CheckOut;
