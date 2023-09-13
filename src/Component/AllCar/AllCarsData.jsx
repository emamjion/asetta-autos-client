import React from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';

const AllCarsData = ({ info }) => {
  const { _id, image, price, mileage, average_rating, reviews, engine, displacement, model, make, fuel_type, color } = info;
  console.log(info)

  return (
    // <div className='mx-auto m-4 p-4'>
    //   <div className="card card-compact w-96 bg-base-100 shadow-xl relative group 
    //   ">

    //     {/* Add a wrapper for the card contents */}
    //     <div className="card-content">
    //       <figure className='rounded overflow-hidden hover:shadow-lg'>
    //         <img src={image} alt="Shoes" className='transform hover:scale-105 transition-transform duration-200' />
    //       </figure>

    //       <div className="card-body h-[235px]">
    //         <div className='flex items-center justify-start gap-2'>
    //           <Rating
    //             style={{ maxWidth: 100 }}
    //             value={average_rating}
    //             readOnly
    //           />
    //           {average_rating}
    //         </div>
    //         <p className='font-bold text-xl'>Model: {model}</p>
    //         <p className='font-semibold text-xl'>{engine.description}</p>


    //         <div className='flex mt-4'>
    //           <p className='text-red-600 text-2xl font-bold'>${price}</p>
    //           <div className="card-footer mx-auto mb-4">
    //             <Link to={`/arrivals-details/${_id}`}>
    //               <Button button={'Details'} />
    //             </Link>
    //           </div>
    //         </div>

    //       </div>
    //     </div>

    //     {/* Style the button to show/hide */}



    //   </div>
    // </div>
    <div className='flex justify-center items-center gap-10 my-8 px-5 py-10 shadow-lg'>
      <div className=''>
        <img src={image} alt="" />
      </div>
      <div className='w-2/3 font-bold'>
        <p className='font-bold text-4xl my-5'>Model: {model}</p>
        <p className='text-2xl my-3'>Miami Street, Hawthorn Victoria, Úc </p>
        <div className='flex items-center gap-32 my-5'>
          <p className='text-2xl'>MILEAGE <br />{mileage}</p>
          <p className='text-2xl'>FUEL TYPE <br />{fuel_type}</p>
          <p className='text-2xl'>ENGINE <br />{engine.type}</p>
          <p className='text-2xl'>COLOR <br />{color}</p>
        </div>
        <div className='flex items-center justify-start gap-2 my-5'>
          <Rating
            style={{ maxWidth: 100 }}
            value={average_rating}
            readOnly
          />
          {average_rating}
        </div>
        <div className='flex justify-start items-center gap-14 my-5'>
          <Button button={"Vehicle Details"}></Button>
          <Button button={"Contact Dealer"}></Button>
          <Button button={"Test Drive"}></Button>
        </div>
      </div>
    </div>
  );
};

export default AllCarsData;
