import React from 'react';
import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaRegAddressCard, FaMailBulk } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
import { BsFillSendFill } from "react-icons/bs";


const Footer = () => {
    return (
        <footer> 
            <div className="w-full bg-[#111]">
                <div className="row">
                    <div className="footer-col quick-section w-2/6">
                        <h1>Quick Links</h1>
                        <p className='mb-4 text-white'>We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable. </p>
                        <div className='text-white'>
                            <p className='py-2 about-us-paragraph'><a href=""><FaPhone className='about-us-icons '></FaPhone> +2 123 654 7898</a></p>
                            <p className='py-2 about-us-paragraph'><FaRegAddressCard className='about-us-icons '></FaRegAddressCard> 25/B Milford Road, New York</p>
                            <p className='py-2 about-us-paragraph'><a href=""><FaMailBulk className='about-us-icons '></FaMailBulk> info@example.com</a></p>
                        </div>
                    </div>
                    <div className="footer-col quick-section w-1/6">
                        <h1>Quick Links</h1>
                        <ul>
                            <li><a href=""><BiSolidRightArrow className='quick-icons'></BiSolidRightArrow> About Us</a></li>
                            <li><a href=""><BiSolidRightArrow className='quick-icons'></BiSolidRightArrow> Update News</a></li>
                            <li><a href=""><BiSolidRightArrow className='quick-icons'></BiSolidRightArrow>  Testimonials</a></li>
                            <li><a href=""><BiSolidRightArrow className='quick-icons'></BiSolidRightArrow>  Terms Of Service</a></li>
                            <li><a href=""><BiSolidRightArrow className='quick-icons'></BiSolidRightArrow>  Privacy policy</a></li>
                            <li><a href=""><BiSolidRightArrow className='quick-icons'></BiSolidRightArrow>  Our Dealers</a></li>
                        </ul>
                    </div>
                    <div className="footer-col quick-section w-1/6">
                        <h1>Support Center</h1>
                        <ul>
                            <li><a href=""><BiSolidRightArrow className='quick-icons'></BiSolidRightArrow>  FAQ s</a></li>
                            <li><a href=""><BiSolidRightArrow className='quick-icons'></BiSolidRightArrow>  Affiliates</a></li>
                            <li><a href=""><BiSolidRightArrow className='quick-icons'></BiSolidRightArrow>  Booking Tips</a></li>
                            <li><a href=""><BiSolidRightArrow className='quick-icons'></BiSolidRightArrow>  Sell Vehicles</a></li>
                            <li><a href=""><BiSolidRightArrow className='quick-icons'></BiSolidRightArrow>  Contact Us</a></li>
                            <li><a href=""><BiSolidRightArrow className='quick-icons'></BiSolidRightArrow>   Sitemap</a></li>
                        </ul>
                    </div>
                    <div className="footer-col quick-section w-2/6  text-white">
                        <h1>Newsletter</h1>
                        <p>Subscribe Our Newsletter To Get Latest Update And News</p>
                        <form action="">
                            <input type="email" name="email" id="" placeholder='Your Email' className='email-field rounded-lg ' />
                            <button type='submit' className="subscribe-button bg-[#ef1721] rounded-lg ">Subcribe Now<BsFillSendFill className='ml-2'></BsFillSendFill></button>
                        </form>
                    </div>
                </div>
                {/* <hr /> */}
                <div className="footer-bottom bg-[#ef1721]">                 
                        <div className="copyright text-white">
                            <p>© Copyright 2023 <span className='text-black'>MOTEX</span> All Rights Reserved. </p>
                        </div>
                        <div className="sociallink">
                            <FaFacebook className='icons'></FaFacebook>
                            <FaTwitter className='icons'></FaTwitter>
                            <FaInstagram className='icons'></FaInstagram>
                            <FaYoutube className='icons'></FaYoutube>
                        </div>
                    </div>
            </div>
        </footer>
    );
};

export default Footer;