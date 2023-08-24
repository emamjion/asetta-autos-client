import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200 background text-white font-bold text-xl">
            <div className="hero-content flex-col ">
                <div className="card w-full flex-shrink-0 shadow-2xl bg-transparent card-background">
                    <form className="card-body">
                        <h1 className='text-2xl text-center font-bold text-[#ef1721]'>Register</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="email" className="input input-bordered bg-transparent" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered bg-transparent" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered bg-transparent" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered bg-transparent" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary border-none text-white bg-[#ef1721] hover:bg-[#181818]" type="submit" value="Register" />
                        </div>
                        <div>
                            <p>Don't have an account? <span className='text-[#ef1721] hover:underline'><Link to='/login'>Login</Link></span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;