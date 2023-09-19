import React, { useContext, useRef } from 'react';
import './LookingCar.css';
import { AuthContex } from '../Providers/Authprovider';
import Button from '../Button/Button';

const LookingCar = () => {
    const { user } = useContext(AuthContex);
    const formRef = useRef(null);
    const { theme } = useContext(AuthContex);
    
    const handleBookService = event => {
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




        const adding = {

            name,
            model,
            price,
            mobile,
            address,
            date,
            photo,
            body,
            userEmail: user.email

        }
        
        fetch('https://asetta-autos-production.up.railway.app/add-car-user',{
            method: 'POST',
            headers: {
            'content-type': 'application/json'

                },
                body: JSON.stringify(adding)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire('Your Vehicle Submitted');
                formRef.current.reset();
            })
    }
    
    return (
        <div className='my-24 '>
            {/* <div className='text-center mb-12'>
                <h1 className='font-semibold text-left md:text-center text-2xl md:text-5xl mb-6'>Looking to quickly sell your car online? <br /> You&apos;ve come to the right place!</h1>
                <p className='my-6'>
                    If you&apos;re wondering how to go about selling your car, we&apos;re here to help you find the ideal way to maximise <br /> the return for your current vehicle.
                </p>
            </div> */}
            <div className='md:flex md:h-[400px]'>
            <div className='md:w-1/2 py-10   px-4 xl:px-[140px] 2xl:px-[240px] bg-left-side flex items-center md:justify-center text-white'>
                <div>
                    <h1 className='font-semibold text-3xl  mb-5'>ARE YOU LOOKING FOR AN USED CAR?</h1>
                    <p className='mb-6'>Search your car in our Inventory and request a quote <br /> on the vehicle of your choosing.</p>
                    <button className='px-8 py-4 text-lg bg-[#111] text-white font-medium hover:text-black hover:bg-white duration-500'>View Cars</button>
                </div>
            </div>
            <div className='md:w-1/2 py-10 px-4 xl:px-[140px] 2xl:px-[240px] bg-right-side flex items-center justify-start md:pl-16 text-white'>
                <div>
                    <h1 className='font-semibold text-3xl mb-5'>DO YOU WANT TO SELL YOUR OLD CAR?</h1>
                    <p className='mb-6'>
                        Search your car in our Inventory and request a quote on the <br /> vehicle of your choosing.
                    </p>
                    <button className='px-8 py-4 text-lg bg-[#fff] text-black font-medium hover:text-white hover:bg-[#111] duration-500' onClick={() => document.getElementById('my_modal_5').showModal()}>Register Now</button>

                    {/* Modal */}
                    <dialog id="my_modal_5" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">


                        <h1 className='text-center text-3xl font-bold text-black'> <span className='text-red-600'>Submit your </span>Vehicle here</h1>
                        <form onSubmit={handleBookService} ref={formRef}>

                            <div className="grid grid-cols-1 gap-6  mx-auto mt-6">



                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Brand Name:</span>
                                    </label>
                                    <input type="text" placeholder="Brand Name" name="name" className="input input-bordered" />
                                </div>



                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Model No:</span>
                                    </label>
                                    <input type="text" placeholder="Model No" name="model" className="input input-bordered" />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price:</span>
                                    </label>
                                    <input type="number" placeholder="Price" name="price" className="input input-bordered" />
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
                                    <input type="text" placeholder="Address" name="address" className="input input-bordered" />
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
                                    <input type="text" name="photo" className="input input-bordered" placeholder='Image' />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Body Type:</span>
                                    </label>
                                    <input type="text" name="body" className="input input-bordered" placeholder='Body type' />
                                </div>

                            </div>

                            <div className="form-control mt-8 text-center">

                                {/* <input type="submit" value="Submit" className="btn  w-60 mx-auto bg-red-600 text-white" /> */}
                                <Button
                                    type="submit" 
                                    button={'Submit'}
                                />
                            </div>
                        </form>

                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                {/* <button className="btn text-white bg-red-600">X</button> */}
                                <Button
                                    button={'x'}
                                />
                            </form>
                        </div>
                    </div>
                </dialog>
                </div>
            </div>
            </div>
        </div>
    );
};

export default LookingCar;