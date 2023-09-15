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

  const handlePay = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const address = form.address.value;
    const post = form.post.value;
    const email = form.email.value;
    const mobile = form.mobile.value;

    const adding = {
      name,
      country,
      address,
      post,
      email,
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
        console.log(data);
        formRef.current.reset();
        setOrderId(data.orderId); // Store the orderId in state
      });
  };

  return (
    <div className='ssl p-14  h-full'>
      <div className='text-center'>
        <p className='text-3xl mb-2 font-semibold'>Payment With <span className='text-blue-600'>SSLCommerz</span></p>
        <h1 className='text-red-500 text-xl font-semibold'>Subtotal: ${subTotal}</h1>
        <h1>{cards._id}</h1>
      </div>

      <div className='mx-auto'>
        <form onSubmit={handlePay} ref={formRef}>
          <div className="grid grid-cols-2 gap-6  mx-auto mt-6">
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
                <span className="label-text">Post Code:</span>
              </label>
              <input type="text" placeholder="Post Code" name="post" className="input input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Mobile</span>
              </label>
              <input type="number" name="mobile" placeholder="Your Mobile No" className="input input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="Email" name="email" className="input input-bordered" />
            </div>
          </div>

          <div className="form-control mt-6 ">
            <input type="submit" value="Pay" className="btn w-28  bg-red-600 text-white  mx-auto " />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
