import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React, { useContext, } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContex } from '../Providers/Authprovider';
import app from '../firebase/firebase.config';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Button from './../Button/Button';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
const auth = getAuth(app)
const Login = () => {
    const { signin, resetPassword } = useContext(AuthContex)
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [fEmail, setFEmail] = useState(false)
    const handlesubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signin(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                // Swal.fire('Your login is succesful')
                navigate(from, { replace: true });
            })
            .catch((err) => {
                console.log(err);
                toast.error(err.message);
              });
    }



    const handleResetPass =(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form?.email?.value;
        resetPassword(email)
        setFEmail(false)
        Swal.fire(
            'Check Your Email',
            'if you change your password! check your email and change',
            'question'
          )
    }

    

    return (
        <div className='grid md:grid-cols-2 items-center bg-slate-200 relative'>
            <div>
                <div>
                    <img className='w-full p-12 mt-4' src="https://i.ibb.co/jLRxmZV/output-onlinegiftools-1.gif" alt="" />
                </div>
            </div>
            <div className="bg-slate-200  hero min-h-screen background text-black font-bold text-lg ">
                <div className="hero-content w-full md:w-2/3 flex-col ">
                {fEmail && <div className={`md:p-10 px-4 py-5 z-50 w-10/12 absolute top-36 left-1/2 rounded-lg -translate-x-1/2 bg-gray-900  xl:w-1/4 space-y-3`}>
                <div className='bg-white text-2xl p-3 font-bold flex items-center justify-center rounded-full absolute -right-5 cursor-pointer border hover:border-red-600  text-red-700 -top-5' onClick={()=>setFEmail(false)}>close</div>
                <form action="" onSubmit={handleResetPass} className='space-y-3'>
                <label htmlFor="" className='text-white mb-3'>Enter Your Email Address</label>
                <input required name='email'  className='py-2 px-3 w-full outline-none text-xl' type="email"/>
                <button type='submit' className='border text-white py-2 px-3 text-xl rounded-md hover:text-red-500 hover:border-red-600'>Submit</button>
                </form>
            </div>}
                    <div className="card w-full flex-shrink-0 shadow-2xl bg-transparent card-background">
                        <form onSubmit={handlesubmit} className="card-body">
                                <h1 className='text-3xl md:text-4xl text-center font-bold text-[#ef1721]'>Login</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered bg-transparent" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered bg-transparent" />
                                    <label onClick={()=>setFEmail(true)} className="label hover:underline cursor-pointer">
                                        Forgot password?
                                    </label>
                                </div>
                                <div className="form-control">
                            </div>

                            <div className="form-control mt-6">
                                <input  className="btn btn-primary border-none text-white bg-[#ef1721] hover:bg-[#181818]" type="submit" value="Login" />
                            </div>
                            
                        </form>
                        <div>
                                <GoogleLogin></GoogleLogin>
                            </div>
                        <div className='text-center text-sm md:text-lg mt-4 pb-8'>
                                <p>Don't have an account? <span className=' text-[#ef1721] hover:underline'><Link to='/register'>Register</Link></span></p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;