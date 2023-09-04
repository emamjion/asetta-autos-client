import React from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';

const AllCarsData = ({info}) => {
    const {_id , image, price, average_rating, reviews, engine, displacement, model, make} = info;
 console.log(info);   

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl grid md:grid-cols-2 ">
 <div>
  <img className=' p-4' src={image}
  />
  </div>
  <div className="card-body">
    <h2 className="card-title">Brand: {make}</h2>
    <h2 className="">Model: {model}</h2>
    <h2 className=" text-[#ef1721]">Price: {price}</h2>
    <div className='flex items-center justify-start gap-2'>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={average_rating}
                        readOnly
                    />
                    {average_rating}
                    </div>
    <h2>{engine.description}</h2>

    
    <div className="card-actions justify-end mt-16">
    <Link to={`/arrivals-details/${_id}`}>
                        <Button button={'Details'} />
                    </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllCarsData;