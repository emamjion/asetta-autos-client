import React from 'react';
import Button from '../Button/Button';

const AllCarsData = ({info}) => {
    const {_id , image, price, average_rating, reviews, engine, displacement, model, make} = info;
 console.log(info);   

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Brand: {make}</h2>
    <h2 className="card-title">Model: {model}</h2>
    <h2 className="card-title">Price: {price}</h2>
    <h2 className="card-title">Rating: {average_rating}</h2>
    
    <div className="card-actions justify-end">
    <Button button={'Buy Now!'} />
    </div>
  </div>
</div>
        </div>
    );
};

export default AllCarsData;