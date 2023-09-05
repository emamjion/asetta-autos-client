import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import RouteBanner from "../Shared/RouteBanner/RouteBanner";
import { BsFillSendFill } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaRegAddressCard, FaMailBulk } from "react-icons/fa";

const NewsDetails = () => {
  const { id } = useParams();
  const [newsDetails, setNewsDetails] = useState([]);

  useEffect(() => {
    fetch(`https://asetta-autos-production.up.railway.app/our-blogs/${id}`)
      .then(res => res.json())
      .then(data => setNewsDetails(data))
  }, [])

  const { image, author, title, _id, content, date, authorImage, blog } = newsDetails;
  console.log(blog)
  return (
    <>
      <RouteBanner SectionTitle={'Single Blog'} smallTitle={'Single Blog'}></RouteBanner>
      <div className="px-4 xl:px-[140px] 2xl:px-[240px] py-10 ">
        {/* <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
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
        </div> */}
        <div className="">
          <div>
            <div className=" p-5 text-black">
              <img className="w-full h-[800px] rounded-2xl" src={image} alt="" />
              <div className="flex justify-between font-bold">
                <div className="flex gap-8 mt-7">
                  <p>{author}</p>
                  <p>comment</p>
                  <p>Likes</p>
                </div>
                <p className="mt-7">share</p>
              </div>
              <h1 className="mt-7 font-bold text-3xl">{title}</h1>
              <p className="mt-7">{content}</p>
              <div className="mt-7 border-l-2 border-red-500 p-10 bg-slate-200">
                <i className="mt-7">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution. </i>
                <h1 className="font-bold mt-4 ">Mark Crawford</h1>
              </div>
              <p className="mt-7">{blog}</p>
              <hr className="mt-5" />
            </div>
            <div className="flex justify-start mt-7 bg-slate-100 gap-6  p-9 shadow-lg rounded-2xl">
              <img className="w-[200px] rounded-2xl" src={authorImage} alt="" />
              <div>
                <h4 className="font-bold">Author</h4>
                <h1 className="font-bold text-2xl text-red-600 mt-2">{author}</h1>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam libero expedita hic praesentium esse quae dolor dicta, quas quidem tempora, at, quos similique? Beatae voluptatem iste maxime vero iusto minima temporibus atque quaerat error corporis.</p>
                <div className="sociallink mt-3">
                  <a href="https://www.facebook.com">
                    <FaFacebook className='icons'></FaFacebook>
                  </a>
                  <a href="https://www.twitter.com">
                    <FaTwitter className='icons'></FaTwitter>
                  </a>
                  <a href="https://www.instagram.com">
                    <FaInstagram className='icons'></FaInstagram>
                  </a>
                  <a href="https://www.youtube.com">
                    <FaYoutube className='icons'></FaYoutube>
                  </a>
                </div>
              </div>
            </div>
            <div className=" bg-slate-300 p-10 rounded-xl mt-10">
              <h2 className="text-2xl font-bold mb-4">Leave a Comment</h2>
              <form>
                <div className="">
                  <div className="mb-4 rounded-2xl">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full border border-gray-500 rounded-2xl py-5 pr-32 ps-4 focus:outline-none focus:border-blue-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full border border-gray-500 rounded-2xl py-5 pr-32 ps-4  focus:outline-none focus:border-blue-500"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <textarea
                    id="comment"
                    name="comment"
                    className="w-full border border-gray-500 rounded-2xl py-2 px-3 h-40 focus:outline-none focus:border-blue-500"
                    placeholder="Your Comment"
                  ></textarea>
                </div>
                <div className="mt-4">
                  <button type='submit' className="subscribe-button mt-10 bg-[#ef1721] hover:bg-black text-white duration-500 rounded-lg ">Post Comment<BsFillSendFill className='ml-2'></BsFillSendFill></button>
                </div>
              </form>

            </div>
            <h1 className="mt-10 mb-4 font-bold text-3xl">Comments</h1>
            <hr className="mb-7" />
            <h1>all comment will here</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;