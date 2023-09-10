import React, { useRef } from 'react';
import './ContactRoute.css'
import { FaMailBulk, FaMap, FaPhone, FaRegMap, FaWhatsapp } from 'react-icons/fa';
import RouteBanner from '../Shared/RouteBanner/RouteBanner';
import { AuthContex } from '../Providers/Authprovider';
import { useContext } from 'react';

// import emailjs from '@emailjs/browser';





const ContactRoute = () => {
  const { theme } = useContext(AuthContex)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r20tzfq', 'template_09b8qe4', form.current, 'JuhWmJlIojuUbaKFI')
      .then((result) => {
        console.log(result.text);
        form.current.reset(); // Reset the form fields
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const contact_info = [
    { logo: "mail", text: "muhammadatiq757@gmail.com" },
    { logo: "logo-whatsapp", text: "+880 187 965 4957" },
    {
      logo: "location",
      text: "demo location",
    },
  ];
  // google map




  return (
    <div>
      <div className='mb-64'>
        <RouteBanner SectionTitle={'Contact Us '} smallTitle={'Contact Us'}></RouteBanner>

        {/* <div className='w-full banner relative text-left' >
               
                <h1 className='heading1 font-extrabold text-6xl pt-52 text-left mx-12'> <span >Contact</span> <span className="text-red-500">Us</span> </h1>
                <p className='paragraph w-96 text-left mx-12 mt-8' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus excepturi minus exercitationem eos sed modi dolorum cumque sunt facere reprehenderit?</p>
            </div> */}


        <div className={`bg-[#f7f7f7] absolute -mt-12 grid md:grid-cols-3  gap-4 mb-12 mx-12 p-8 font-serif text ${theme}`}>

          <div>
            <h1 className='heading1 text-3xl font-bold text-left '>Get in <span className='text-red-500'>Touch</span></h1>
            <p className='paragraph text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem alias velit nihil voluptatum unde rerum, veniam deleniti praesentium accusamus suscipit?</p>
            <p>Learn more.paragraph ..</p>
          </div>

          <div className='ml-6'>
            <FaPhone className='text-red-500 ml-10 w-32 h-10 mb-2' />
            <p className='paragraph'>+88 017 924 549 57</p>
            <p className='paragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, tempore!</p>
          </div>

          <div>
            <FaMailBulk className='text-red-500 ml-10 w-32 mb-2 h-10'></FaMailBulk>
            <p className='paragraph'>atiq@gmail.com</p>
            <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eligendi!</p>
          </div>
        </div>
      </div>

      <section id="contact" className="py-10 px-3  bg-[#f7f7f7]" >
        <div className="text-center mt-8">
          <h3 className={`text-5xl font-extrabold text ${theme}`}>
            Contact <span className="text-red-500">Us</span>
          </h3>
          <p className={`paragraph text-gray-600 text-xl mt-3 text ${theme}`}>Get in touch</p>

          <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col flex-1 gap-5">
              <input className='p-6 rounded' type="text" name="user_name" placeholder="Your Name" />
              <input className='p-6 rounded' type="Email" name="user_email" placeholder="Your Email Address" />
              <textarea className='p-6' placeholder="Your Message" name="message" rows={10}></textarea>

              <input className="btn bg-red-500 border-none text-white p-4 w-32 mx-auto text-center hover:text-black duration-700" type="submit" value="Send" />
            </form>
            <div className="flex flex-col gap-7 mt-16">

              <div className=" text-left gap-4 flex-wrap items-center text-xl">
                <div className="min-w-[3.5rem]  min-h-[3.5rem] flex items-center justify-center text-white rounded-full">
                  <FaMailBulk className='w-8 h-12 text-red-500'></FaMailBulk>
                  <p className='paragraph mx-6'>atiq@gmail.com</p>

                </div>
                <div className="min-w-[3.5rem]  min-h-[3.5rem] flex items-center justify-center text-white rounded-full">
                  <FaWhatsapp className='w-8 h-16 text-red-500 mr-6'></FaWhatsapp>
                  <p className='paragraph'>+88 017 924 549 57</p>
                </div>
                <div className="min-w-[3.5rem]  min-h-[3.5rem] flex items-center justify-center text-white rounded-full">
                  <FaRegMap className='w-8 h-16 text-red-500 ml-16'></FaRegMap>
                  <p className='paragraph mx-6'>Chattogram, Bangladesh</p>
                </div>
                <p className="paragraph md:text-base text-sm break-words text-white">

                </p>
              </div>

            </div>
          </div>
        </div>

        <div className=' bg-[#f7f7f7]'>
          <div className=' rounded my-6 px-4' style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
            <iframe
              title="Google Map"
              width="100%"
              height="400"

              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=chattogram,%20Bangladesh+(Asetta%20Autos)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>

        </div>
      </section>



    </div>
  );
};

export default ContactRoute;