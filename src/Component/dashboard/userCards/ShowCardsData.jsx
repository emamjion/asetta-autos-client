import { handler } from "daisyui";
import Swal from "sweetalert2";

const ShowCardsData = ({card}) => {
    const {_id , image, make, model, price, color, items, category} = card || null

    let subTotal = price * items

    const handleRemove =(id)=>{
        console.log("remove", id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://asetta-autos-production.up.railway.app/deleteCard/${_id}`, {
            method: 'DELETE',
          })
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(data => {
              console.log('Response data:', data);
            })
            .catch(error => {
              console.error('error', error);
            });
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully removed!',
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
          }




    return (
        <div className="border p-2 m-4 flex justify-between items-center gap-5">
            <div>
                <img className="w-40" src={image} alt="" />
            </div>
            <div>
                <h3>Category : {category}</h3>
                <h3>Make : {make}</h3>
                <h3>Model : {model}</h3>
            </div>
            <div>
                <h3>Color : {color}</h3>
                <h3>Items : {items}</h3>
                <h3>Price : ${price}</h3>
                <h3 className="text-red-600">sub total : ${subTotal}</h3>
            </div>
            <div>
                <h4 onClick={()=>handleRemove(_id)} className="border text-center p-1 m-2 hover:text-red-600 cursor-pointer">Remove</h4>
                {/* <h4 onClick={()=>handleCheckOut(_id)} className="border text-center p-1 m-2 hover:text-green-600 cursor-pointer">checkout</h4> */}
            </div>
        </div>
    );
};

export default ShowCardsData;