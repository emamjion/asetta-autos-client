import React, { useState, useEffect } from 'react';
// import AllCarsData from './AllCarsData';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AllCarsData from './AllCarsData';
import Button from '../Button/Button';

const AllCar = () => {
    const [find, setFind] = useState('')
    const [info, setInfo] = useState([]);
    
    const [active, setActive] = useState('Toyota');
  


    

    useEffect(() => {
        fetch(`http://localhost:5000/new-arrivals`)
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
        fetch(`http://localhost:5000/findName/${find}`)
        .then(res => res.json())
        .then (data => setInfo(data))
    
      }


    return (
      <div>
 <div>
 <div className="form-control">
  <div className="input-group ">
    
   <div className=" items-center m-6 ml-20 p-8">
   <input onChange={e => setFind(e.target.value)} type="text" placeholder="All Branch" className="input input-bordered mx-2 ml-12 w-36" />

   <input onChange={e => setFind(e.target.value)} type="text" placeholder="All Make" className="input input-bordered mx-2 w-36" />

   <input onChange={e => setFind(e.target.value)} type="text" placeholder="Brand" className="input input-bordered mx-2 w-36" />

   <input onChange={e => setFind(e.target.value)} type="text" placeholder="All registration Date" className="input input-bordered mx-2 w-36" />

    <button onClick={handleFind} className=" ml-2 btn  bg-black hover:bg-red-600 text-white">Search</button>
    
   </div>
  </div>
</div>        

   </div>

   <div className='grid gap-6 mt-12 mx-16 m-8'>
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
