import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React, { useContext, } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContex } from '../Providers/Authprovider';
import app from '../firebase/firebase.config';
import SocialLogin from '../SocialLogin/SocialLogin';
const auth = getAuth(app)
const Login = () => {
    const { signin } = useContext(AuthContex)
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";



    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire('Your login is succesful')
                navigate(from, { replace: true });
            })

            .catch(error => {
                console.log('error', error.message);
            })
    }


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
                Swal.fire('Your login is succesful')
                navigate(from, { replace: true });
            })
    }

    

    return (
        <div className='grid md:grid-cols-2 items-center bg-slate-200'>
            <div>
                <div>
                    <img className='w-full p-12 mt-4' src="https://i.ibb.co/jLRxmZV/output-onlinegiftools-1.gif" alt="" />
                </div>
            </div>
            <div className="bg-slate-200 hero min-h-screen background text-black font-bold text-lg ">
                <div className="hero-content flex-col items-center w-[450px]">
                    <div className="card w-full flex-shrink-0 shadow-2xl bg-transparent card-background">
                        <form onSubmit={handlesubmit} className="card-body">

                                <h1 className='text-2xl text-center font-bold text-[#ef1721]'>Login</h1>
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
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    {/* <label className="label">
                                    <LoadCanvasTemplate />
                                </label> */}
                                    {/* <input type="text" ref={RefCaptcha} name='captcha' placeholder="type the captcha" className="input input-bordered bg-transparent" />
                                <button onClick={handlevalidatecaptcha} className="btn btn-outline btn-xs mt-2">validate</button> */}
                                {/* </label> */}
                        
                                {/* <button onClick={handlevalidatecaptcha} className="btn btn-outline btn-xs mt-2">validated</button> */}
                                {/* </label>
                                <input type="text" ref={RefCaptcha} name='captcha' placeholder="type the captcha" className="input input-bordered bg-transparent" />
                                <button onClick={handlevalidatecaptcha} className="btn btn-outline btn-xs mt-2">validated</button> */}
                                

                                {/* </label> */}
                                {/* <input type="text" ref={RefCaptcha} name='captcha' placeholder="type the captcha" className="input input-bordered bg-transparent" />
                                <button onClick={handlevalidatecaptcha} className="btn btn-outline btn-xs mt-2">validated</button> */}

                            </div>

                            <div className="form-control mt-6">
                                <input  className="btn btn-primary border-none text-white bg-[#ef1721] hover:bg-[#181818]" type="submit" value="Login" />
                            </div>
                            {/* <div className="form-control mt-6">
                                <button onClick={handleGoogleSignIn}  className="btn btn-primary border-none text-white bg-[#ef1721] hover:bg-[#181818]"><FaGoogle/>Google</button>
                            </div> */}
                            <div>
                                <p>Don't have an account? <span className=' text-[#ef1721] hover:underline'><Link to='/register'>Register</Link></span></p>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;