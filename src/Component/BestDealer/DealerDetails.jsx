import { useEffect, useState } from "react";
import { FaEnvelope, FaFacebookF, FaGlobe, FaLinkedinIn, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Button from "../Button/Button";
import Button2 from "../Button/Button2";

const DealerDetails = () => {
    const {id}= useParams()
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://asetta-autos-production.up.railway.app/best-dealers/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className="min-h-screen px-4 xl:px-[140px] 2xl:px-[240px] py-24">
          <div className="flex justify-between gap-6">
            <div className="flex gap-6 w-[75%]">
              <img
                src={data?.image}
                      alt={data?.dealerName}
                      className="bg-white border shadow-md rounded-lg p-3"
              />
              <div className="mt-6">
                <h1 className="text-2xl font-semibold">{data.dealerName}</h1>
                <h4 className="my-1 text-[#535353]">{data?.specialty}</h4>
                <p className="text-[#535353]">{data?.location}</p>
                <div className="flex items-center gap-4 mt-6">
                  <span className="text-lg text-[#fff] bg-[#1877F2] p-2 rounded-lg cursor-pointer"> < FaFacebookF /> </span>
                  <span className="text-lg text-[#fff] bg-[#00acee] p-2 rounded-lg cursor-pointer"> < FaTwitter /> </span>
                  <span className="text-lg text-[#fff] bg-[#0A66C2] p-2 rounded-lg cursor-pointer"> < FaLinkedinIn /> </span>
                </div>
              </div> 
            </div>
            <div className="w-[25%]">
              <div className="bg-[#f7f7f7] px-8 py-4 rounded">
                <div className="flex items-center gap-1">
                      <span> < FaGlobe /> </span>
                      <h3 className="font-medium">Website</h3>
                </div>
                <p className="mt-1 text-[#535353]">www.example.com</p>
              </div>
              <div className="mt-4 bg-[#f7f7f7] px-8 py-4 rounded">
                <div className="flex items-center gap-1">
                  <span>< FaEnvelope /></span>
                  <h3 className="font-medium">Email Address</h3>
                </div>
                <p className="mt-1 text-[#535353]">{data?.contact?.email}</p>
              </div>
              <div className="mt-4 bg-[#f7f7f7] px-8 py-4 rounded">
                <div className="flex items-center gap-1">
                  <span>< FaPhoneAlt /></span>
                  <h3 className="font-medium">Phone Number</h3>
                </div>
                <p className="mt-1 text-[#535353]">{data?.contact?.phone}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-6">
            <div className="mt-12 w-[75%]">
                  <h1 className="bg-[#f7f7f7] p-4 text-2xl font-medium">About {data.dealerName}</h1>
                  <p className="mt-2">
                    {data?.description}
                  </p>
                  <div>
                    <div className=' rounded my-6 px-4' style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
                      <iframe
                      title="Google Map"
                      width="100%"
                      height="400"

                      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=chattogram,%20Bangladesh+(Asetta%20Autos)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      ></iframe>
                    </div>
                  </div>
            </div>
            <div className="mt-12 w-[25%] border px-6 py-4 rounded h-96">
              <div className="flex gap-2 items-center"> <span className="text-xl text-[#ef1721]"> < FaEnvelope /> </span><span className="text-lg font-semibold">Message to Dealer</span></div>
              <form className="mt-4">
                <div className="">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    name="name" 
                    className="w-full h-12 px-3 rounded bg-[#f7f7f7] py-4" 
                  />
                </div>
                <div className="mt-4">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    name="name" 
                    className="w-full h-12 px-3 rounded bg-[#f7f7f7] py-4"  
                  />
                </div>
                <div className="mt-4">
                  <textarea 
                    cols='20' 
                    rows='5' 
                    className="w-full h-28 px-3 rounded bg-[#f7f7f7] py-4 resize-none"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="mt-3 text-center">
                  <Button2
                    type='submit'
                    button2={'Send Message'}
                  />
                </div>
              </form>
            </div>
          </div>
          {/* Car listing by Dealer */}
          <div>Car listing by Dealer</div>

          {/* Leave a comment */}
          <div>Leave a comment</div>
        </div>
    );
};

export default DealerDetails;