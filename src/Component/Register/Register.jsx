import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../Providers/Authprovider';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';
import Swal from 'sweetalert2';
import SocialLogin from '../socialLogin/SocialLogin';

const auth = getAuth(app)
const Register = () => {

    const {createUser, updateUserProfile} = useContext(AuthContex)
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        console.log(data);
        createUser(data?.email, data?.password)
        .then(result=>{
            // const loggeduser = result.user;
            // Swal.fire('User Create succesful')
            // navigate(from, { replace: true });
            if (result?.user) {
                updateUserProfile(data?.name, data?.photoURL)
                  .then(() => {
                    const user = {
                      name: data.name,
                      email: data.email,
                      image : data.photoURL,
                      role: "user",
                      admin_request : 'no',
                      dealer_request : 'no'
                    };
                    fetch("https://asetta-autos-production.up.railway.app/users", {
                      method: "POST",
                      headers: {
                        "content-type": "application/json",
                      },
                      body: JSON.stringify(user),
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        console.log("user saved", data);
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Successfully Done!',
                                showConfirmButton: false,
                                timer: 1500
                              })
                          navigate('/')
                        }
                      });
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            })
            .catch((err) => {
            //   toast.error(err.message);
            console.log(err);
        })
      }



    return (
        <div className='grid md:grid-cols-2 bg-slate-200'>
          
        <div>
        <div className=''>
                <img className=' w-full' src="https://i.ibb.co/zZJBJGN/output-onlinegiftools.gif" alt="" />
            </div>
        </div>
        <div>
        <div className="hero min-h-screen w-full  text-black font-bold text-xl ">
           
            <div className="hero-content w-full md:w-2/3 flex-col">
                <div className="card w-full flex-shrink-0 shadow-2xl bg-transparent card-background">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className='text-3xl md:text-4xl text-center font-bold text-[#ef1721]'>Register</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  {...register("name" ,{ required: true })} name='name' placeholder="Name" className="input input-bordered bg-transparent" />
                            {errors.name && <span className='text-red-600'>Name field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered bg-transparent" />
                            {errors.email && <span className='text-red-600'>email field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url"  {...register("photoURL", { required: false })} name='photoURL' placeholder="photoURL" className="input input-bordered bg-transparent" />
                            {errors.photoURL && <span className='text-red-600'>email field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"  {...register("password", { required: true, minLength: 6,  maxLength: 20 })} name='password' placeholder=" password" className="input input-bordered bg-transparent" />
                            {errors.password?.type === 'required' && <span className='text-red-600'>Password field is required</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-600'>6 caracter is required</span>}
                            {errors.password?.type === 'maxLength' && <span className='text-red-600'>less than 20 caracter is required</span>}
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="Cornfirm password" className="input input-bordered bg-transparent" />
                        </div> */}
                        <div className="form-control mt-6">
                            <input className="btn btn-primary border-none text-white bg-[#ef1721] hover:bg-[#181818]" type="submit" value="Register" />
                        </div>
                        <div className="form-control mt-6">
                           <SocialLogin></SocialLogin>
                        </div>


                        <div className='text-center text-sm md:text-lg mt-4'>
                            <p>Don't have an account? <span className='text-[#ef1721] hover:underline'><Link to='/login'>Login</Link></span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Register;