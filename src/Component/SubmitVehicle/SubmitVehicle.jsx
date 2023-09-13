import React, { useRef } from 'react';
// import Button from '../Button/Button';
import { useContext } from 'react';
import { AuthContex } from '../Providers/Authprovider';

const SubmitVehicle = () => {
    const {user} = useContext(AuthContex);
    const formRef = useRef(null); 
    const { theme } = useContext(AuthContex);



    const handleBookService = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const model = form.model.value;
        const price = form.price.value;
        const mobile = form.mobile.value;
        const address = form.address.value;
        const date = form.date.value;
        const photo = form.photo.value;
        const body = form.body.value;

      
       

        const adding ={

           name,
           model,
           price,
           mobile,
           address,
           date,
           photo,
           body,
        userEmail:user.email

        }
        console.log(adding);
        
fetch('http://localhost:5000/add-car-user',{
    method: 'POST',
    headers: {
        'content-type': 'application/json'

    },
    body: JSON.stringify(adding)
})
.then(res => res.json())
.then(data =>{
console.log(data);
formRef.current.reset();
        })
    }
    
    return (
        <div className={`text-left md:text-center mode ${theme} my-24 px-4 xl:px-[140px] 2xl:px-[240px]`}>
            <h1 className='font-semibold text-left md:text-center text-2xl md:text-5xl mb-6'>Looking to quickly sell your car online? <br /> You&apos;ve come to the right place!</h1>
            <p className='my-6'>
                If you&apos;re wondering how to go about selling your car, we&apos;re here to help you find the ideal way to maximise <br /> the return for your current vehicle.
            </p>
            {/* <Button button={'submit your vehicle now'} /> */}
<div>

    {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-red-600 text-white" onClick={()=>document.getElementById('my_modal_5').showModal()}>submit your vehicle now</button>


<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
   

<h1 className='text-center text-3xl font-bold'> <span className='text-red-600'>Submit your </span>Vehicle here</h1>
  <form onSubmit={handleBookService} ref={formRef}>

<div className="grid grid-cols-1 gap-6  mx-auto mt-6">

    
   
    <div className="form-control">
        <label className="label">
            <span className="label-text">Brand Name:</span>
        </label>
        <input type="text" placeholder="Brand Name" name="name"  className="input input-bordered" />
    </div>



    <div className="form-control">
        <label className="label">
            <span className="label-text">Model No:</span>
        </label>
        <input type="text" placeholder="Model No" name="model"  className="input input-bordered" />
    </div>


    <div className="form-control">
        <label className="label">
            <span className="label-text">Price:</span>
        </label>
        <input type="number" placeholder="Price"  name="price" className="input input-bordered" />
    </div>




    <div className="form-control">
        <label className="label">
            <span className="label-text">Mobile</span>
        </label>
        <input type="number" name="mobile" placeholder="Your Mobile No" className="input input-bordered" />
    </div>


    <div className="form-control">
        <label className="label">
            <span className="label-text">Address</span>
        </label>
        <input type="text" placeholder="Address"  name="address" className="input input-bordered" />
    </div>


    <div className="form-control">
        <label className="label">
            <span className="label-text">Date</span>
        </label>
        <input type="date" name="date" placeholder="Date" className="input input-bordered" />
    </div>



    <div className="form-control">
        <label className="label">
            <span className="label-text">Car Image URL</span>
        </label>
        <input type="text" name="photo" className="input input-bordered" placeholder='Image'/>
    </div>

    <div className="form-control">
        <label className="label">
            <span className="label-text">Body Type:</span>
        </label>
        <input type="text" name="body" className="input input-bordered" placeholder='Body type'/>
    </div>

</div>

<div className="form-control mt-6 w-2/3 mx-auto">

    <input type="submit" value="Submit" className="btn  w-60 mx-auto bg-red-600 text-white" />
</div>
</form>

    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn text-white bg-red-600">X</button>
      </form>
    </div>
  </div>
</dialog>
</div>


        </div>
    );
};

export default SubmitVehicle;