import React, { useState, useEffect } from 'react';
// import AllCarsData from './AllCarsData';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import AllCarsData from './AllCarsData';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';

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
    else {
      setActive("Honda")
    }
  }

  const { handleSubmit, control, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };




  const handleFind = () => {
    fetch(`https://asetta-autos-production.up.railway.app/findName/${find}`)
      .then(res => res.json())
      .then(data => setInfo(data))

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
      <div className=''>
        {/* {
                    info.map(info => <AllCarsData
                        key={info._id}
                        info={info}
                    />)
                } */}
      </div>
      <div className='flex items-start justify-center gap-20 mt-10'>
        <div className='bg-gray-100 border shadow-lg px-10 py-10 sticky top-0'>
          <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
              <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <ul className="menu p-4 w-full min-h-full bg-base-200 text-base-content">
                <form className='sticky top-0' onSubmit={handleSubmit(onSubmit)}>
                  <div className='flex flex-col gap-1 mt-8'>
                    <label className='text-black text-lg font-bold'>Car Name</label>
                    <Controller
                      name="carName"
                      control={control}
                      defaultValue=""
                      rules={{ required: 'This field is required' }}
                      render={({ field }) => <input className='w-80 h-14 pl-4 rounded-md text-md' type="text" placeholder='Car Name' {...field} />}
                    />

                  </div>

                  <div className='flex flex-col gap-1 mt-8'>
                    <label className='text-black text-lg font-bold'>Car Model</label>
                    <Controller
                      name="carModel"
                      control={control}
                      defaultValue=""
                      rules={{ required: 'This field is required' }}
                      render={({ field }) => <input className='w-80 h-14 pl-4 rounded-md text-md' type="text" placeholder='Car Model' {...field} />}
                    />

                  </div>

                  <div className='flex flex-col gap-1 mt-8'>
                    <label className='text-black text-lg font-bold'>Year</label>
                    <Controller
                      name="year"
                      control={control}
                      defaultValue=""
                      rules={{ required: 'This field is required' }}
                      render={({ field }) => <input className='w-80 h-14 pl-4 rounded-md text-md' type="number" placeholder='Year' {...field} />}
                    />

                  </div>

                  <div className='flex flex-col gap-1 mt-8' >
                    <label className='text-black text-lg font-bold'>Body Style</label>
                    <Controller
                      name="bodyStyle"
                      control={control}
                      defaultValue=""
                      rules={{ required: 'This field is required' }}
                      render={({ field }) => <input className='w-80 h-14 pl-4 rounded-md text-md' type="text" placeholder='Body Style' {...field} />}
                    />

                  </div>

                  <div className='flex flex-col gap-1 mt-8'>
                    <label className='text-black text-lg font-bold'>Condition</label>
                    <Controller
                      name="condition"
                      control={control}
                      defaultValue=""
                      rules={{ required: 'This field is required' }}
                      render={({ field }) => <input className='w-80 h-14 pl-4 rounded-md text-md' type="text" placeholder='Condition' {...field} />}
                    />

                  </div>

                  <div className='flex flex-col gap-1 mt-8'>
                    <label className='text-black text-lg font-bold'>Mileage</label>
                    <Controller
                      name="mileage"
                      control={control}
                      defaultValue=""
                      rules={{ required: 'This field is required' }}
                      render={({ field }) => <input className='w-80 h-14 pl-4 rounded-md text-md' type="number" placeholder='Mileage' {...field} />}
                    />

                  </div>

                  <div className='flex flex-col gap-1 mt-8'>
                    <label className='text-black text-lg font-bold'>Transmission</label>
                    <Controller
                      name="transmission"
                      control={control}
                      defaultValue=""
                      rules={{ required: 'This field is required' }}
                      render={({ field }) => <input className='w-80 h-14 pl-4 rounded-md text-md' type="text" placeholder='Transmission' {...field} />}
                    />

                  </div>

                  <div className='flex flex-col gap-1 mt-8'>
                    <label className='text-black text-lg font-bold'>Engine</label>
                    <Controller
                      name="engine"
                      control={control}
                      defaultValue=""
                      rules={{ required: 'This field is required' }}
                      render={({ field }) => <input className='w-80 h-14 pl-4 rounded-md text-md' type="text" placeholder='Engine' {...field} />}
                    />

                  </div>

                  <div className='flex flex-col gap-1 mt-8'>
                    <label className='text-black text-lg font-bold'>Exterior Color</label>
                    <Controller
                      name="exteriorColor"
                      control={control}
                      defaultValue=""
                      rules={{ required: 'This field is required' }}
                      render={({ field }) => <input className='w-80 h-14 pl-4 rounded-md text-md' type="text" placeholder='Exterior Color' {...field} />}
                    />

                  </div>

                  <button className='text-2xl w-full mt-10 bg-black px-10 py-5 text-white' type="submit">SEARCH</button>
                </form>
              </ul>

            </div>
          </div>

        </div>
        <div className=''>
          {
            info.map(info => <AllCarsData
              key={info._id}
              info={info}
            />)
          }
        </div>
      </div>
    </div>
  );
};


export default AllCar;
