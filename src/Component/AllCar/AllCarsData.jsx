// import React from 'react';
// import Button from '../Button/Button';
// import { Link } from 'react-router-dom';
// import { Rating } from '@smastrom/react-rating';
// import { PiEngineFill } from "react-icons/pi";
// import { BsFillFuelPumpFill } from "react-icons/bs";
// import { FaCar, FaMapMarkerAlt, FaRoad, FaShareAlt } from "react-icons/fa";

// const AllCarsData = ({ info }) => {
//   const { _id, image, price, mileage, average_rating, reviews, engine, displacement, model, make, fuel_type, color } = info;
//   console.log(info)

//   return (

//     <div className='flex justify-center w-full items-center gap-16 my-8 px-5 py-10 shadow-lg'>
//       <div className=''>
//         <img className='' src={image} alt="" />
//       </div>
//       <div className='w-2/3 font-bold'>
//         <div className='flex justify-between items-center'>
//           <p className='font-bold text-4xl mt-2'>Model: {model}</p>
//           <p className='bg-red-600 text-white text-xl py-5 rounded-lg px-8'>${price}</p>
//         </div>
//         <p className='text-2xl flex items-center'><FaMapMarkerAlt className='me-2'></FaMapMarkerAlt> Miami Street, Hawthorn Victoria, Úc </p>
//         <div className='flex items-center gap-36 my-5'>
//           <p className='text-xl flex items-center flex-col justify-center gap-3'><span className='flex items-center'><FaRoad className='me-2'></FaRoad>MILEAGE</span><span className='ms-8'>{mileage}</span></p>
//           <p className='text-xl flex items-center flex-col justify-center gap-3'><span className='flex items-center'><BsFillFuelPumpFill className='me-2'></BsFillFuelPumpFill>FUEL TYPE</span><span className='ms-8'>{fuel_type}</span></p>
//           <p className='text-xl flex items-center flex-col justify-center gap-3'><span className='flex items-center'><PiEngineFill className='me-2'></PiEngineFill>ENGINE</span><span className='ms-8'>{engine.type}</span></p>
//           <p className='text-xl flex items-center flex-col justify-center gap-3'><span className='flex items-center'><FaCar className='me-2'></FaCar>COLOR</span><span className='ms-8'>{color}</span></p>
//         </div>
//         <div className='flex items-center gap-2 my-5'>
//           <Rating
//             style={{ maxWidth: 100 }}
//             value={average_rating}
//             readOnly
//           />
//           <p className='mt-2'>{average_rating}</p>
//         </div>
//         <div className='flex justify-between items-center'>
//           <div className='flex justify-start items-center gap-14 mt-8'>
//             <Link to={`/arrivals-details/${_id}`}>
//               <Button button={"Vehicle Details"}></Button>
//             </Link>
//             <Button button={"Contact Dealer"}></Button>
//             <Button button={"Test Drive"}></Button>
//           </div>
//           <div>
//             <p><FaShareAlt className='text-4xl'></FaShareAlt></p>
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default AllCarsData;

import React, { useState } from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import { PiEngineFill } from "react-icons/pi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaCar, FaMapMarkerAlt, FaRoad, FaShareAlt } from "react-icons/fa";
import TestDriveBook from '../TestDriveBook/TestDriveBook';
import ContactWithDealer from '../ContactWithDealer/ContactWithDealer';

const AllCarsData = ({ info }) => {
  const { _id, image, price, mileage, average_rating, reviews, engine, displacement, model, make, fuel_type, color } = info;


  return (
    <div className='flex justify-center w-full items-center gap-16 my-8 px-5 py-10 shadow-lg'>
      <div className=''>
        <img className='' src={image} alt="" />
      </div>
      <div className='w-2/3 font-bold'>
        <div className='flex justify-between items-center'>
          <p className='font-bold text-4xl mt-2'>Model: {model}</p>
          <p className='bg-red-600 text-white text-xl py-5 rounded-lg px-8'>${price}</p>
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
            <button className="btn button" onClick={() => document.getElementById(`my_modal_2/${_id}`).showModal()}>Contact Dealer</button>
            <ContactWithDealer info={info}></ContactWithDealer>
          <button className="btn button" onClick={() => document.getElementById(`my_modal_1/${_id}`).showModal()}>Test Drive</button>
            <TestDriveBook info={info}></TestDriveBook>
          </div>
          <div>
            <p><FaShareAlt className='text-4xl'></FaShareAlt></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCarsData;

