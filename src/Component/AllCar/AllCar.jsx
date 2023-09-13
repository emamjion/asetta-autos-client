import React, { useState, useEffect } from 'react';
// import AllCarsData from './AllCarsData';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import AllCarsData from './AllCarsData';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';

const AllCar = () => {
    const [find, setFind] = useState('')
    const [info, setInfo] = useState([]);
    
    const [active, setActive] = useState('Toyota');
  
    useEffect(() => {
        fetch(`https://asetta-autos-production.up.railway.app/new-arrivals`)
        .then(res => res.json())
        .then(data => setInfo(data))
    }, [active])

  
    const handleChange = (index) => {

        if (index === 0) {
            setActive("Toyota")
        }
  
        else if (index == 1) {
            setActive("Ford")
        }
        else{
            setActive("Honda")
        }
      }
  



    const handleFind = ()=>{
        fetch(`https://asetta-autos-production.up.railway.app/findName/${find}`)
        .then(res => res.json())
        .then (data => setInfo(data))
    
      }


    return (
      <div>
  <div className="flex justify-center items-center mb-6">
      <div className="form-control">
        <div className="input-group">
          <div className="flex flex-wrap items-center justify-center space-x-2 ">
            <input
              onChange={(e) => setFind(e.target.value)}
              type="text"
              placeholder="All Branch"
              className="input input-bordered w-full mb-2 md:mb-0 md:w-36"
            />

            <input
              onChange={(e) => setFind(e.target.value)}
              type="text"
              placeholder="All Make"
              className="input input-bordered w-full mb-2 md:mb-0 md:w-36"
            />

            <input
              onChange={(e) => setFind(e.target.value)}
              type="text"
              placeholder="Brand"
              className="input input-bordered w-full mb-2 md:mb-0 md:w-36"
            />

            <input
              onChange={(e) => setFind(e.target.value)}
              type="text"
              placeholder="All registration Date"
              className="input input-bordered w-full mb-2 md:mb-0 md:w-36"
            />

            <button
              onClick={handleFind}
              className="btn bg-black hover:bg-red-600 text-white"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>

<div className='flex btn py-2 text-white text-xl btn-outline border-none w-[40%] mx-auto bg-black'>

        <NavLink className="hover:text-[#ef1721] duration-500 p-2" to="/all-car">
         Brand New Cars
        </NavLink>
      

        <NavLink className="hover:text-[#ef1721] duration-500 p-2" to="/approved-car">
         Used Cars
        </NavLink>
      
</div>
   <div className='grid md:grid-cols-3'>
                {
                    info.map(info => <AllCarsData
                        key={info._id}
                        info={info}
                    />)
                }
            </div>

      </div>
    );
};

export default AllCar;
