import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const NewsDetails = () => {
    const {id} = useParams();
    const [newsDetails, setNewsDetails] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/our-blogs/${id}`)
        .then(res => res.json())
        .then(data => setNewsDetails(data))
    }, [])
    return (
        <div className="px-4 xl:px-[140px] 2xl:px-[240px] py-10">
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-3xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center -mt-16">
              <img
                src={newsDetails?.image}
                alt="Blog newsDetails?"
                className="w-full md:w-64 object-cover  border-2 border-indigo-500"
              />
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-800">{newsDetails?.title}</h2>
              <p className="mt-2 text-gray-600">{newsDetails?.author}</p>
              <p className="mt-2 text-gray-600">{newsDetails?.date}</p>
            </div>
            <div className="mt-4">
              <p className="text-gray-600">{newsDetails?.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default NewsDetails;