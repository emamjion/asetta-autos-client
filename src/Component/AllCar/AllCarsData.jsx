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
    <h2 className="card-title">{make}</h2>
    <p>{}</p>
    <div className="card-actions justify-end">
    <Button button={'Buy Now!'} />
    </div>
  </div>
</div>
        </div>
    );
};

export default AllCarsData;