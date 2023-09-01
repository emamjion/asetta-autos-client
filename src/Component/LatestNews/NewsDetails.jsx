import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import RouteBanner from "../Shared/RouteBanner/RouteBanner";

const NewsDetails = () => {
  const { id } = useParams();
  const [newsDetails, setNewsDetails] = useState([]);

    useEffect(() => {
        fetch(`https://asetta-autos-production.up.railway.app/our-blogs/${id}`)
        .then(res => res.json())
        .then(data => setNewsDetails(data))
    }, [])

  const { image, author, title, _id, content, date, authorImage, blog } = newsDetails;
  return (
    <>
      <RouteBanner SectionTitle={'Single Blog'} smallTitle={'Single Blog'}></RouteBanner>
      <div className="px-4 xl:px-[140px] 2xl:px-[240px] py-10">
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-3xl sm:mx-auto">
            <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
              <div className="max-w-3xl mx-auto">
                <div className="flex justify-center -mt-16">
                  <img
                    src={image}
                    alt="Blog newsDetails?"
                    className="w-full md:w-64 object-cover  border-2 border-indigo-500"
                  />
                </div>
                <div className="mt-6">
                  <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
                  <div className="flex justify-between items-center">
                    <div>
                      <img className="mt-4 rounded-full w-14" src={authorImage} alt="" />
                      <p className="mt-2 text-gray-600">AUTHOR: {author}</p>
                    </div>
                    <div>
                      <p className="mt-2 text-gray-600">DATE: {date}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600">{content}</p>
                </div>
                <div className="mt-4">
                  <h1 className="font-bold text-2xl text-center mb-4">BLOG</h1>
                  <p className="text-gray-600">{blog}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;