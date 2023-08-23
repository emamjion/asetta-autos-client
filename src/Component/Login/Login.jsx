import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200 background text-white font-bold text-lg">
            <div className="hero-content flex-col ">
                <div className="card w-96 flex-shrink-0 shadow-2xl bg-transparent card-background">
                    <form className="card-body">
                        <h1 className='text-2xl text-center font-bold'>Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered bg-transparent" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered bg-transparent" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary bg-white border-none text-black" type="submit" value="Login" />
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