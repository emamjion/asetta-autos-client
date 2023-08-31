import React, { useState, useEffect } from 'react';
// import AllCarsData from './AllCarsData';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
   <div className="mx-auto  items-center m-6">
   <input onChange={e => setFind(e.target.value)} type="text" placeholder="Find Your Car" className="input input-bordered" />
    <button onClick={handleFind} className=" ml-2 btn btn-active">Search</button>
   </div>
  </div>
</div>        

   </div>

{/* category part */}
   <div className='w-[80%] mx-auto
   '>
   <Tabs className='' defaultIndex={1} onSelect={(index) => handleChange(index)}>
    <TabList className="flex items-center mx-[20%] my-12 bg-slate-200 p-6" >
      <Tab className="border btn btn-sm text-red-500 mx-auto">Toyota</Tab>
      <Tab className="border btn btn-sm text-red-500 mx-auto">Ford</Tab>
      <Tab className="border btn btn-sm text-red-500 mx-auto">Honda</Tab>
    </TabList>

    <TabPanel>

<div className='grid gap-6'>
{
info.map(info =>
<div key={info._id}>
<div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={info.image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{info.make}</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
</div> )
}
</div>

</TabPanel>
<TabPanel>

<div className='grid gap-6'>
{
info.map(info =>
<div key={info._id}>
<div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={info.image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{info.make}</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
</div> )
}
</div>

</TabPanel>
<TabPanel>

<div className='grid gap-6 mb-6'>
{
info.map(info =>
<div key={info._id}>
<div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={info.image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{info.make}</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
</div> )
}
</div>

</TabPanel>
  </Tabs>
   </div>

      </div>
    );
};

export default AllCar;
