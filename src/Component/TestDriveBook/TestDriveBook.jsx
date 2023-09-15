import { Rating } from '@smastrom/react-rating';
import React, { useRef } from 'react';
import { BsFillFuelPumpFill } from 'react-icons/bs';
import { FaCar, FaMapMarkerAlt, FaRoad } from 'react-icons/fa';
import { PiEngineFill } from 'react-icons/pi';


const TestDriveBook = ({ info }) => {
    const formRef = useRef(null);
    const { _id, image, price, mileage, average_rating, reviews, engine, displacement, model, make, fuel_type, color } = info;




    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;;
        const email = form.email.value;;
        const mobile = form.mobile.value;
        const date = form.date.value;





        const bookinginfo = {
            name,
            date,
            mobile,
            email,
            model: { model },
            img: { image }
        }
        console.log(bookinginfo);
        formRef.current.reset();



        // fetch('https://asetta-autos-production.up.railway.app/add-car-user', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'

        //     },
        //     body: JSON.stringify(adding)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         formRef.current.reset();
        //     })
    }






    return (
        <dialog id={`my_modal_1/${_id}`} className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <h1 className='text-2xl font-bold my-5 uppercase'>Schedule a test drive</h1>
                <div className="card w-full bg-gray-100 text-black">
                    <div className="card-body">
                        <h2 className="card-title text-xl">Model : {model}</h2>
                        <p className=' flex items-center'><FaMapMarkerAlt className='me-2'></FaMapMarkerAlt> Miami Street, Hawthorn Victoria, Úc </p>
                        <div className='flex items-center gap-24 my-5'>
                            <p className=' flex items-center flex-col justify-center gap-3'><span className='flex items-center'><FaRoad className='me-2'></FaRoad>MILEAGE</span><span className='ms-8'>{mileage}</span></p>
                            <p className=' flex items-center flex-col justify-center gap-3'><span className='flex items-center'><BsFillFuelPumpFill className='me-2'></BsFillFuelPumpFill>FUEL TYPE</span><span className='ms-8'>{fuel_type}</span></p>
                            <p className=' flex items-center flex-col justify-center gap-3'><span className='flex items-center'><PiEngineFill className='me-2'></PiEngineFill>ENGINE</span><span className='ms-8'>{engine.type}</span></p>
                            <p className=' flex items-center flex-col justify-center gap-3'><span className='flex items-center'><FaCar className='me-2'></FaCar>COLOR</span><span className='ms-8'>{color}</span></p>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleBooking} ref={formRef}>
                    <h1 className='text-xl font-bold mt-10'>PERSONAL INFORMATION</h1>
                    <div className="grid grid-cols-1 gap-6  mx-auto mt-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name:</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mobile</span>
                            </label>
                            <input type="number" name="mobile" placeholder="Your Mobile No" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" placeholder="Date" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email:</span>
                            </label>
                            <input type="email" name="email" className="input input-bordered" placeholder='Your Email' />
                        </div>
                    </div>
                    <div className="form-control mt-6 w-2/3 mx-auto">
                        <input type="submit" value="Book Request" className="btn  w-60 mx-auto bg-red-600 text-white hover:bg-black" />
                    </div>
                </form>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn bg-red-600 text-white hover:bg-black">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default TestDriveBook;