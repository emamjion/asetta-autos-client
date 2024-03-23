import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContex } from './../../Providers/Authprovider';
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
const DealerRequest = () => {

    const {user} = useContext(AuthContex)
    // console.log(user);
    const navigate = useNavigate()
      const { register, formState: { errors }, handleSubmit } = useForm();
      const onSubmit = (data) => {
        data.email = user?.email
        data.name = user?.displayName
  
        console.log(data);


        fetch('https://asetta-autos-server-gules.vercel.app/makeDealer', {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(data => {
              console.log('Response data:', data);
              if(data.modifiedCount > 0){
                navigate('/dashboard/dealer-request-details')
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Your request accepted!',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
              if(data.modifiedCount === 0){
                navigate('/dashboard/dealer-request-details')
                Swal.fire({
                  position: 'top-end',
                  icon: 'info',
                  title: 'Already Your Request Added!',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
              
            })
            .catch(error => {
              console.error('error', error);
            });
      };


    return (
        <div className="px-4  py-10 border">
            <h2 className="uppercase text-center text-xl md:text-4xl font-bold ">Dealer Request</h2>
            <p className="text-center my-4 text-red-500 font-semibold">If you want to be a car dealer ! Provide Your details information!</p>
            <h3 className="text-center">Already submit request ~ check it! <Link className="underline text-blue-700 hover:text-blue-500" to='/dashboard/dealer-request-details'>Request Details</Link></h3>
            <div>
            <div className="border p-4 md:p-10 text-gray-800 my-10">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* row 1 */}
      <div className="md:flex gap-5 mb-5">
      <div className="w-full mb-5">
        <h4 className="text-lg">Your Name<span className="text-red-600">*</span></h4>
      <input
        className="border  py-2 px-4 text-xl w-full"
        placeholder="Your Name"
        defaultValue={user?.displayName}
        disabled
        type="text"
        {...register("name", { required: false })} 
        aria-invalid={errors.name ? "true" : "false"} 
      />
      {/* {errors.name?.type === 'required' && <p role="alert" className="text-red-700">name is required</p>} */}
      </div>

      <div className="w-full mb-5">
      <h4 className="text-lg">Your Email<span className="text-red-600">*</span></h4>
      <input 
            className="border py-2 px-4 text-xl w-full"
            placeholder="Your Email"
            defaultValue={user?.email}
        disabled
        type="email"
        {...register("email", { required: false })} 
        aria-invalid={errors.email ? "true" : "false"} 
      />
      {/* {errors.email && <p role="alert" className="text-red-700">{errors.email?.message}</p>} */}
      </div>
      </div>
      {/* row 2 */}
      <div className="md:flex gap-5 mb-5">
      <div className="w-full mb-5">
      <h4 className="text-lg">Provide Your Full Address<span className="text-red-600">*</span></h4>
      <textarea
            rows={3} 
            maxLength={450}
            className="border py-2 px-4 text-lg w-full"
            placeholder="Address"
        type="text"
        {...register("dealer_address", { required: "dealer_address is required" })} 
        aria-invalid={errors.dealer_address ? "true" : "false"} 
      />
      {errors.dealer_address && <p role="alert" className="text-red-700">{errors.dealer_address?.message}</p>}
      </div>
      </div>
      <input type="submit" value='submit request' className="btn bg-red-700 text-white hover:bg-red-800"/>
    </form>
            </div>
            </div>
        </div>
    );
};

export default DealerRequest;