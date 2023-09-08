import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddDealers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://asetta-autos-production.up.railway.app/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [users])

    const dealersPending = users.filter(pending=>pending?.dealer_request === 'pending')


    const handleConfirm =(id)=>{
        console.log(id);

        fetch(`https://asetta-autos-production.up.railway.app/makeDealerConfirm/${id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            }
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
                // navigate('/dashboard/dealer-request-details')
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Confirm!',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            })
            .catch(error => {
              console.error('error', error);
            });
      };
    const handleReject =(id)=>{
        console.log(id);

        fetch(`https://asetta-autos-production.up.railway.app/dealerReject/${id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            }
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
                // navigate('/dashboard/dealer-request-details')
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'rejected!',
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
        <div className="px-4 xl:px-[40px] py-10 border">
            <h2 className="uppercase text-center text-xl md:text-4xl font-bold">Add New Dealers</h2>
            <div className="mt-8">
                <h3 className="text-xl font-semibold">Total : {dealersPending?.length}</h3>
                <div className="mt-2">
<div className="overflow-x-auto">
  <table className="table table-sm">
    <thead>
      <tr>
        <th className="text-xs md:text-lg">*</th>  
        <th className="text-xs md:text-lg">Email</th> 
        <th className="text-xs md:text-lg">Details</th> 
        <th className="text-xs md:text-lg">Confirm</th> 
        <th className="text-xs md:text-lg">Reject</th> 
      </tr>
    </thead> 
    <tbody>
         { dealersPending.map((pUser, idx)=><tr key={pUser?._id}>
        <th>{idx + 1}</th> 
        <td className="text-xs md:text-lg">{pUser?.email}</td> 
        <td className="text-xs md:text-lg"><Link to={'/dashboard/userDetails'}><span className="underline cursor-pointer hover:text-blue-700">details</span></Link></td> 
        <td className="text-xs md:text-lg"><span onClick={()=>handleConfirm(pUser?._id)} className="underline cursor-pointer hover:text-green-900">Confirm</span></td> 
        <td className="text-xs md:text-lg"><span onClick={()=>handleReject(pUser?._id)}  className="underline cursor-pointer hover:text-red-700">Reject</span></td> 
      </tr>)}
      
    </tbody> 
  </table>
</div>
                </div>
            </div>
        </div>
    );
};

export default AddDealers;