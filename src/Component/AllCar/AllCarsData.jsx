import React from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import { PiEngineFill } from "react-icons/pi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaCar, FaMapMarkerAlt, FaRoad, FaShareAlt } from "react-icons/fa";

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
    // <div className='flex justify-center w-full items-center gap-16 my-8 px-5 py-10 shadow-lg'>
    //   <div className=''>
    //     <img className='' src={image} alt="" />
    //   </div>
    //   <div className='w-2/3 font-bold'>
    //     <div className='flex justify-between items-center'>
    //       <p className='font-bold text-4xl mt-2'>Model: {model}</p>
    //       <p className='bg-red-600 text-white text-xl py-5 rounded-lg px-8'>${price}</p>
    //     </div>
    //     <p className='text-2xl flex items-center'><AiOutlineEnvironment className='me-2'></AiOutlineEnvironment> Miami Street, Hawthorn Victoria, Úc </p>
    //     <div className='flex items-center gap-32 my-8'>
    //       <p className='text-2xl flex items-center flex-col justify-center gap-3'><span className='flex items-center'><FaRoad className='me-2'></FaRoad>MILEAGE</span><span className='ms-8'>{mileage}</span></p>
    //       <p className='text-2xl flex items-center flex-col justify-center gap-3'><span className='flex items-center'><BsFillFuelPumpFill className='me-2'></BsFillFuelPumpFill>FUEL TYPE</span><span className='ms-8'>{fuel_type}</span></p>
    //       <p className='text-2xl flex items-center flex-col justify-center gap-3'><span className='flex items-center'><PiEngineFill className='me-2'></PiEngineFill>ENGINE</span><span className='ms-8'>{engine.type}</span></p>
    //       <p className='text-2xl flex items-center flex-col justify-center gap-3'><span className='flex items-center'><AiFillCar className='me-2'></AiFillCar>COLOR</span><span className='ms-8'>{color}</span></p>
    //     </div>
    //     <div className='flex items-center gap-2 my-5'>
    //       <Rating
    //         style={{ maxWidth: 100 }}
    //         value={average_rating}
    //         readOnly
    //       />
    //       <p className='mt-2'>{average_rating}</p>
    //     </div>
    //     <div className='flex justify-between items-center'>
    //       <div className='flex justify-start items-center gap-14 mt-8'>
    //         <Button button={"Vehicle Details"}></Button>
    //         <Button button={"Contact Dealer"}></Button>
    //         <Button button={"Test Drive"}></Button>
    //       </div>
    //       <div>
    //         <p><FaShareAlt className='text-4xl'></FaShareAlt></p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="card lg:card-side bg-base-100 shadow-lg gap-16 my-8 h-[450px]">
      <div className=''>
        <figure><img className='' src={image} alt="" /></figure>
      </div>
      <div className="card-body">
        <div className='w-2/3 font-bold'>
          <div className='flex justify-between items-center'>
            <p className='font-bold text-4xl mt-2'>Model: {model}</p>
            <div className='card-actions justify-end -me-96 pe-20'>
              <p className='bg-red-600 text-white text-xl  py-5 rounded-lg px-4 text-center'>${price}</p>
            </div>
          </div>
          <p className='text-2xl flex items-center'><FaMapMarkerAlt className='me-2'></FaMapMarkerAlt> Miami Street, Hawthorn Victoria, Úc </p>
          <div className='flex items-center gap-36 my-5'>
            <p className='text-xl flex items-center flex-col justify-center gap-3'><span className='flex items-center'><FaRoad className='me-2'></FaRoad>MILEAGE</span><span className='ms-8'>{mileage}</span></p>
            <p className='text-xl flex items-center flex-col justify-center gap-3'><span className='flex items-center'><BsFillFuelPumpFill className='me-2'></BsFillFuelPumpFill>FUEL TYPE</span><span className='ms-8'>{fuel_type}</span></p>
            <p className='text-xl flex items-center flex-col justify-center gap-3'><span className='flex items-center'><PiEngineFill className='me-2'></PiEngineFill>ENGINE</span><span className='ms-8'>{engine.type}</span></p>
            <p className='text-xl flex items-center flex-col justify-center gap-3'><span className='flex items-center'><FaCar className='me-2'></FaCar>COLOR</span><span className='ms-8'>{color}</span></p>
          </div>
          <div className='flex items-center gap-2 my-5'>
            <Rating
              style={{ maxWidth: 100 }}
              value={average_rating}
              readOnly
            />
            <p className='mt-2'>{average_rating}</p>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex justify-start items-center gap-14 mt-8'>
              <Link to={`/arrivals-details/${_id}`}>
                <Button button={"Vehicle Details"}></Button>
              </Link>
              <Button button={"Contact Dealer"}></Button>
              <Button button={"Test Drive"}></Button>
            </div>
            <div>
            </div>
            <div className='card-actions justify-end -me-96 pe-20'>
              <p><FaShareAlt className='text-4xl'></FaShareAlt></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCarsData;
