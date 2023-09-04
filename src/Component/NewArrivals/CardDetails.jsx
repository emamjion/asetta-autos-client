import { Rating } from "@smastrom/react-rating";
import { useEffect } from "react";
import { useState } from "react";
import { FaAngleRight, FaArrowRight, FaCaretRight, FaMarker, FaSign } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Button from "../Button/Button";
import Swal from "sweetalert2";
// import { FaAlignRight} from "react-icons/fa";



const CardDetails = () => {
  const handleAddToCart = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, add it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Added!',
          'Your Product has been added.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  };



  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };



  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => {
    setZoom(zoom + 0.1);
  };

  const handleZoomOut = () => {
    if (zoom > 0.1) {
      setZoom(zoom - 0.1);
    }
  };


    const {id} = useParams();
    const [car, setCar] = useState([]);

    useEffect(() => {
        fetch(`https://asetta-autos-production.up.railway.app/new-arrivals/${id}`)
        .then(res => res.json())
        .then(data => setCar(data))
    }, [])
    const {
        make,
        model,
        year,
        color,
        vin,
        engine,
        transmission,
        fuel_type,
        mileage,
        features,
        price,
        owner,
        reviews,
        average_rating,
        image,
      } = car || null
      console.log(car);
    return (
    
      <div className="md:grid grid-cols-2 gap-8 mx-auto p-10 ">

    
    
      <div className="overflow-hidden bg-gray-200">
       <div className="relative">
       <img className="h-96"
          src={image} // Replace with your image URL
          alt="Product Image"
          style={{ transform: `scale(${zoom})`, transition: 'transform 0.2s' }}
        />
       </div>
        <div className="flex  absolute -mt-12 ml-[15%]">
         
          <button className="bg-white rounded text-red-600 btn-sm text-end " onClick={handleZoomOut}>-</button>
          <button className="bg-white rounded text-end text-red-600 btn-sm   ml-4" onClick={handleZoomIn}>+</button>
        </div>
      </div>
  



        <div className=" overflow-hidden">
          <h2 className="text-4xl font-semibold mt-0 mb-3">{make} {model} ({year})</h2>
          <p className="my-2 font-semibold price-color text-[#ef1721]" >Price: ${parseFloat(price).toFixed(2)}</p>


          <div className='flex items-center justify-start gap-2'>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={average_rating}
                        readOnly
                    />
                    {average_rating}
                    </div>
   <div className="text-blue-400 mt-4">
   <p className="flex items-center"> <FaAngleRight
         /> in stock </p>
         <p className="flex items-center"> <FaAngleRight
         /> Free Delivery Available </p>
         <p className="flex items-center"> <FaAngleRight
         /> Sales 30% off use code: M01VE30  </p>
          </div>
         <p className="mt-4">{engine?.description}</p>

         <div className="mt-8">
        <button className="bg-slate-200 p-2 rounded text-red-600 btn-sm" onClick={handleDecrease}>-</button>
        <input className="w-8 text-center" type="text" value={count} readOnly />
        <button className="bg-slate-200 p-2 rounded text-red-600 btn-sm" onClick={handleIncrease}>+</button>
     <button onClick={handleAddToCart} className="ml-4 w-40">   <Button button={'Add to Cart'} /></button>
      </div>

        </div>
      </div>
    
    );
};

export default CardDetails;