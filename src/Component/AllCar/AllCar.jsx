import React, { useState, useEffect } from 'react';
// import AllCarsData from './AllCarsData';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import AllCarsData from './AllCarsData';
import Button from '../Button/Button';
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

      <div className='flex items-start justify-center gap-10 mt-10'>
        <div className='bg-gray-100 border shadow-lg px-10 py-10 sticky top-0'>
          <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content my-10 mx-4">

            </div>
            <div className="drawer-side ">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <ul className="menu w-12/12 min-h-full  font-bold text-black">

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
                    {/* <span>{errors.carName && errors.carName.message}</span> */}
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
                    {/* <span>{errors.carModel && errors.carModel.message}</span> */}
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
                    {/* <span>{errors.year && errors.year.message}</span> */}
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
                    {/* <span>{errors.bodyStyle && errors.bodyStyle.message}</span> */}
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
                    {/* <span>{errors.condition && errors.condition.message}</span> */}
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
                    {/* <span>{errors.mileage && errors.mileage.message}</span> */}
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
                    {/* <span>{errors.transmission && errors.transmission.message}</span> */}
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
                    {/* <span>{errors.engine && errors.engine.message}</span> */}
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
                    {/* <span>{errors.exteriorColor && errors.exteriorColor.message}</span> */}
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
