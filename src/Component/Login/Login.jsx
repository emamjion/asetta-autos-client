import React, { useContext, useEffect, useRef, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContex } from '../Providers/Authprovider';
import Swal from 'sweetalert2';

const Login = () => {
    const {signin} = useContext(AuthContex)
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [disable, setDisable] = useState(true);

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

    const RefCaptcha = useRef(null);

    const handlevalidatecaptcha = () => {
        const user_captcha_value = RefCaptcha.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    return (
        <div className="hero min-h-screen bg-base-200 background text-white font-bold text-lg">
            <div className="hero-content flex-col ">
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
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" ref={RefCaptcha} name='captcha' placeholder="type the captcha" className="input input-bordered bg-transparent" />
                            <button onClick={handlevalidatecaptcha} className="btn btn-outline btn-xs mt-2">validate</button>
                        </div>

                        <div className="form-control mt-6">
                            <input disabled={disable} className="btn btn-primary border-none text-white bg-[#ef1721] hover:bg-[#181818]" type="submit" value="Login" />
                        </div>
                        <div>
                            <p>Don't have an account? <span className=' text-[#ef1721] hover:underline'><Link to='/register'>Register</Link></span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;