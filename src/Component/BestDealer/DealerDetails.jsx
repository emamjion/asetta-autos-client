import { useEffect, useState } from "react";
import { FaEnvelope, FaFacebookF, FaGlobe, FaLinkedinIn, FaPhoneAlt, FaRoad, FaTwitter } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Button2 from "../Button/Button2";
import { BiDollar, BiSolidCalendar } from "react-icons/bi";
import { GiSteeringWheel } from "react-icons/gi";
import { IoIosColorPalette } from "react-icons/io";
import { BsFuelPump } from "react-icons/bs";
import Button from "../Button/Button";
import RouteBanner from "../Shared/RouteBanner/RouteBanner";
import Swal from "sweetalert2";

const DealerDetails = () => {
  const { id } = useParams();
  const [dealers, setDealers] = useState([]);
  const [carPics, setCarPics] = useState([]);
  useEffect(() => {
    fetch(`https://asetta-autos-production.up.railway.app/best-dealers/${id}`)
      .then(res => res.json())
      .then(data => setDealers(data))
  }, []);
  useEffect(() => {
    fetch('https://asetta-autos-production.up.railway.app/new-arrivals')
      .then(res => res.json())
      .then(data => setCarPics(data.slice(0, 6)))
  }, [])

  const handleEmailsubmit = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const text = form.text.value;
    console.log(name, email, text)
    Swal.fire('Your question is send succesfuly')
    form.reset();
  }


  return (
    <>
      <RouteBanner
        SectionTitle={dealers.dealerName}
        smallTitle={'Dealer Details'}
      />
      <div className="min-h-screen px-4 xl:px-[140px] 2xl:px-[240px]">

        <div className="md:flex justify-between gap-6 my-24">
          <div className="md:flex gap-6 md:w-[75%]">
            <img
              src={dealers?.image}
              alt={dealers?.dealerName}
              className="bg-white border shadow-md rounded-lg"
            />
            <div className="mt-6">
              <h1 className="text-2xl font-semibold">{dealers.dealerName}</h1>
              <h4 className="my-1 text-[#535353]">{dealers?.specialty}</h4>
              <p className="text-[#535353]">{dealers?.location}</p>
              <div className="flex items-center gap-4 mt-6">
                <span className="text-lg text-[#fff] bg-[#1877F2] p-2 rounded-lg cursor-pointer"> < FaFacebookF /> </span>
                <span className="text-lg text-[#fff] bg-[#00acee] p-2 rounded-lg cursor-pointer"> < FaTwitter /> </span>
                <span className="text-lg text-[#fff] bg-[#0A66C2] p-2 rounded-lg cursor-pointer"> < FaLinkedinIn /> </span>
              </div>
            </div>
          </div>
          <div className="md:w-[25%] mt-5 md:mt-0">
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
              <p className="mt-1 text-[#535353]">{dealers?.contact?.email}</p>
            </div>
            <div className="mt-4 bg-[#f7f7f7] px-8 py-4 rounded">
              <div className="flex items-center gap-1">
                <span>< FaPhoneAlt /></span>
                <h3 className="font-medium">Phone Number</h3>
              </div>
              <p className="mt-1 text-[#535353]">{dealers?.contact?.phone}</p>
            </div>
          </div>
        </div>
        <div className="md:flex justify-between gap-6">
          <div className="mt-12 md:w-[75%]">
            <h1 className="bg-[#f7f7f7] p-4 text-2xl font-medium">About {dealers.dealerName}</h1>
            <p className="mt-2 text-xs md:text-sm">
              {dealers?.description}
            </p>
            <div>
              <div className=' rounded my-6' style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
                <iframe
                  title="Google Map"
                  width="100%"
                  height="400"

                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=chattogram,%20Bangladesh+(Asetta%20Autos)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="mt-12 md:w-[25%] border px-6 py-4 rounded h-96">
            <div className="flex gap-2 items-center"> <span className="text-xl text-[#ef1721]"> < FaEnvelope /> </span><span className="text-lg font-semibold">Message to Dealer</span></div>
            <form onSubmit={handleEmailsubmit} className="mt-4">
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
                  name="email"
                  className="w-full h-12 px-3 rounded bg-[#f7f7f7] py-4"
                />
              </div>
              <div className="mt-4">
                <textarea
                  cols='20'
                  rows='5'
                  name="text"
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
        <h1 className="mt-8 mb-3 font-medium text-xl">Inventory Listing by {dealers?.dealerName}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-10/12">
          {
            carPics.map(carPic => <div className="w-96 h-[500px]  border" key={carPic._id}>
              <img src={carPic?.image} />
              {/* TODO: added two button avobe picture like used or something and compare button */}
              <div className="bg-[#f7f7f7] p-4">
                <h1 className="font-semibold text-xl">{carPic?.model}</h1>
                <h5 className="text-[#535353]">{carPic?.make}</h5>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center text-[#757575]">
                    <span> < BiDollar /> </span>
                    <span>{carPic?.price}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#757575]">
                    <span> < GiSteeringWheel /> </span>
                    <span>{carPic?.transmission}</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-12 p-4">
                  <div className="flex items-center gap-1 text-[#757575]">
                    <span> < FaRoad /> </span>
                    <span>{carPic?.mileage}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#757575]">
                    <span> < IoIosColorPalette /> </span>
                    <span>{carPic?.color}</span>
                  </div>
                </div>
                <div className="flex items-center gap-12 p-4">
                  <div className="flex items-center gap-1 text-[#757575]">
                    <span> < BiSolidCalendar /> </span>
                    <span>{carPic?.year}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#757575]">
                    <span> < BsFuelPump /> </span>
                    <span>{carPic?.fuel_type}</span>
                  </div>
                </div>
              </div>
            </div>)
          }
        </div>

        {/* Leave a comment */}
        <div className="mb-12">
          <h1 className="mt-16 mb-3 font-medium text-xl">Leave a Comment</h1>
          <form>
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-10/12 bg-[#f7f7f7] h-14 p-4 rounded"
              />
            </div>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-10/12 bg-[#f7f7f7] h-14 p-4 rounded"
              />
            </div>
            <div className="mt-4">
              <textarea
                cols="20"
                rows="10"
                placeholder="Comments"
                className="w-10/12 bg-[#f7f7f7] h-40 p-4 rounded resize-none"
              ></textarea>
            </div>
            <div className="mt-3 text-center">
              <Button
                button={'Submit Comment'}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DealerDetails;