import React from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';

const AllCarsData = ({ info }) => {
  const { _id, image, price, average_rating, reviews, engine, displacement, model, make } = info;

  return (
    <div className='mx-auto m-4 p-4'>
      <div className="card card-compact w-96 bg-base-100 shadow-xl relative group 
      ">

        {/* Add a wrapper for the card contents */}
        <div className="card-content">
        <figure className='rounded overflow-hidden hover:shadow-lg'>
  <img src={image} alt="Shoes" className='transform hover:scale-105 transition-transform duration-200' />
</figure>

          <div className="card-body h-[235px]">
            <div className='flex items-center justify-start gap-2'>
              <Rating
                style={{ maxWidth: 100 }}
                value={average_rating}
                readOnly
              />
              {average_rating}
            </div>
            <p className='font-bold text-xl'>Model: {model}</p>
            <p className='font-bold text-2xl'>{engine.description}</p>
            <p className='text-red-600 text-2xl font-bold'>${price}</p>
          </div>
        </div>
        
        {/* Style the button to show/hide */}
        <div className="card-footer opacity-0 group-hover:opacity-100 absolute left-0 w-full h-full flex items-center justify-center mt-52 transition-opacity duration-2000 ease-in-out opacity-transition">
  <Link to={`/arrivals-details/${_id}`}>
    <Button button={'Details'} />
  </Link>
</div>


      </div>
    </div>
  );
};

export default AllCarsData;
