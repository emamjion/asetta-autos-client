import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
    const {id} = useParams();
    const [car, setCar] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/new-arrivals/${id}`)
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
        <div className="px-4 xl:px-[140px] 2xl:px-[240px] py-10 border">
            <div className="bg-white p-4 shadow-md rounded-lg">
      <div className="md:grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <img src={image} alt={`${make} ${model}`} className="w-full" />
        </div>
        <div className="col-span-1">
          <h2 className="text-2xl font-semibold">{make} {model} ({year})</h2>
          <p className="text-gray-600">Color: {color}</p>
          <p className="text-gray-600">VIN: {vin}</p>
          <p className="text-gray-600">Transmission: {transmission}</p>
          <p className="text-gray-600">Fuel Type: {fuel_type}</p>
          <p className="text-gray-600">Mileage: {mileage} miles</p>
          <p className="text-gray-600">Price: ${parseFloat(price).toFixed(2)}</p>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Engine Details:</h3>
        <p className="text-gray-800">{engine?.description}</p> */
         <p className="text-gray-600">Type: {engine?.type}</p> */
        <p className="text-gray-600">Displacement: {engine?.displacement}</p>
        <p className="text-gray-600">Horsepower: {engine?.horsepower}</p>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Features:</h3>
        <ul className="list-disc ml-6">
          {features?.map((feature, index) => (
            <li key={index} className="text-gray-800">{feature.name} - {feature.description}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Owner Details:</h3>
        <p className="text-gray-800">{owner?.first_name} {owner?.last_name}</p>
        <p className="text-gray-600">Email: {owner?.contact?.email}</p>
        <p className="text-gray-600">Phone: {owner?.contact?.phone}</p>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Reviews:</h3>
        <p className="text-gray-600">Average Rating: {average_rating}</p>
        {/* <ul>
          {reviews?.map((review, index) => (
            <li key={index}>
              <p className="text-gray-800">{review.reviewer} - {review.rating}</p>
              <p className="text-gray-600">{review.comment}</p>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
        </div>
    );
};

export default CardDetails;