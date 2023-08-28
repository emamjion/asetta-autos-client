import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DealerDetails = () => {
    const {id}= useParams()
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/best-dealers/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <div className="bg-gray-100 min-h-screen px-4 xl:px-[140px] 2xl:px-[240px] py-20 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-xl w-full">
        <div className="text-center">
          <img
            src={data?.image}
            alt={data?.dealerName}
            className="w-64 h-64 mx-auto rounded-full"
          />
          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            {data.dealerName}
          </h2>
          <p className="text-sm text-gray-600">{data?.specialty}</p>
          <p className="text-sm text-gray-600">{data?.location}</p>
          <p className="text-sm text-gray-600">Rating: {data?.rating?.$numberDouble}</p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800">About Us</h3>
          <p className="text-gray-600 mt-2">{data?.description}</p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
          <p className="text-gray-600 mt-2">
            Phone: {data?.contact?.phone}
          </p>
          <p className="text-gray-600">Email: {data?.contact?.email}</p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default DealerDetails;