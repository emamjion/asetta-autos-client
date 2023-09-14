import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../Providers/Authprovider';
import { NavLink } from 'react-router-dom';

const UserAddCars = () => {

    const {user} = useContext(AuthContex);
    const [info, setInfo] = useState([])
  
    useEffect(() =>{
        fetch(`http://localhost:5000/myInfo`)
        .then(res => res.json())
        .then(data => setInfo(data))
    }, [])

    return (


        
        <div >
<div className='flex btn py-2 text-white bg-black text-xl btn-outline border-none w-[40%] mx-auto mb-4'>

<NavLink className="hover:text-[#ef1721] duration-500 p-2" to="/all-car">
 Brand New Cars
</NavLink>


<NavLink className="hover:text-[#ef1721] duration-500 p-2" to="/#">
 Used Cars
</NavLink>

</div>

            <div className="college-section grid md:grid-cols-3 mb-4 gap-4  px-8 ">
        {info.map((car) => (
          
<>


<div className="card card-compact gap-4  bg-base-100 shadow-xl ">
  <figure><img src={car.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Brand:{car.name}</h2>
    <h2 className="card-title">Model No:{car.model}</h2>
    <h2 className="card-title text-red-500">Price:{car.price}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn text-white bg-red-500">Details</button>
    </div>
  </div>
</div>
</>


          
        ))}
      </div>
    
        </div>
    );
};

export default UserAddCars;