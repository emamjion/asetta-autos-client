import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaArrowRight,
  FaFacebookF,
  FaBars,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaSearch,
  FaCartPlus,
  FaWindowClose,
} from "react-icons/fa";
import logo from "../../assets/images/logo/logo.png";
import { AuthContex } from "../Providers/Authprovider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContex);

  const [show, setShow] = useState(false);

  const handleLogOut = () => {
    logOut().then();
  };

  const listItem = (
    <>
      <li>
        <NavLink className="hover:text-[#ef1721] duration-500" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[#ef1721] duration-500" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[#ef1721] duration-500" to="/services">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[#ef1721] duration-500" to="/blog">
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[#ef1721] duration-500" to="/contact">
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <nav>
      {/* Navbar first part */}
      <div className="flex flex-col xl:flex-row gap-2 bg-[#111] text-white items-center justify-center md:justify-between px-4 xl:px-[140px] 2xl:px-[240px] py-4">
        {/* Info part */}
        <div className="hidden lg:flex items-center justify-center gap-6">
          <p className="flex items-center gap-2 text-lg">
            <span className="text-[#ef1721]">
              {" "}
              <FaEnvelope />{" "}
            </span>
            <span>info@example.com</span>
          </p>
          <p className="flex items-center gap-2 text-lg">
            <span className="text-[#ef1721]">
              {" "}
              <FaPhoneAlt />{" "}
            </span>
            <span>+2 123 456 789</span>
          </p>
          <p className="flex items-center gap-2 text-lg">
            <span className="text-[#ef1721]">
              {" "}
              <FaClock />{" "}
            </span>
            <span>Sun - Fri(08AM - 10PM)</span>
          </p>
        </div>
        {/* Login and social media part */}
        <div className="flex items-center justify-center gap-6">
          {/* Login part */}
          {user ? (
            <>
              <Link
                onClick={handleLogOut}
                className="flex items-center gap-2 text-lg hover:text-[#ef1721] duration-300"
              >
                {" "}
                <span>
                  {" "}
                  <FaArrowRight />{" "}
                </span>{" "}
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center gap-2 text-sm md:text-lg hover:text-[#ef1721] duration-300"
              >
                {" "}
                <span>
                  {" "}
                  <FaArrowRight />{" "}
                </span>{" "}
                Login
              </Link>
            </>
          )}
          {/* social icon part */}
          <div className="flex items-center justify-center gap-4 ml-6">
            <p className="text-sm lg:text-lg">Follow Us: </p>
            <a href=" https://www.facebook.com">
              <span className="text-sm lg:text-lg hover:text-[#ef1721] duration-500 cursor-pointer">
                {" "}
                <FaFacebookF />{" "}
              </span>
            </a>
            <a href="https://www.twitter.com">
              <span className="text-sm lg:text-lg hover:text-[#ef1721] duration-500 cursor-pointer">
                {" "}
                <FaTwitter />{" "}
              </span>
            </a>
            <a href="https://www.instagram.com">
              <span className="text-sm lg:text-lg hover:text-[#ef1721] duration-500 cursor-pointer">
                <FaInstagram />
              </span>
            </a>
            <a href="https://www.linkedin.com">
              <span className="text-sm lg:text-lg hover:text-[#ef1721] duration-500 cursor-pointer">
                {" "}
                <FaLinkedinIn />{" "}
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* Navbar second part */}
      {/* todo - mohosin*/}
      <div className="relative">
        <div className="flex lg:hidden justify-between items-center py-2 bg-slate-200 px-4 xl:px-[140px] 2xl:px-[240px]">
          <div className="flex items-center justify-center">
            <img src={logo} className="w-12 mr-2" />
            <h2 className="text-lg text-[#111] font-semibold -ml-4">
              Asetta Auto&apos;s
            </h2>
          </div>
          <div>
            <span
              onClick={() => setShow(true)}
              className="text-[#111] text-2xl hover:text-[#ef1721] cursor-pointer duration-500"
            >
              {" "}
              <FaBars />{" "}
            </span>
          </div>
        </div>
        {show && (
          <div className="bg-slate-300 absolute top-0  right-0 pb-10  lg:hidden left-0 px-4 z-50">
            <div className="  py-2  flex justify-between items-center ">
              <div>
                <div className="flex items-center justify-center">
                  <img src={logo} className="w-12 mr-2" />
                  <h2 className="text-lg text-[#111] font-semibold -ml-4">
                    Asetta Auto&apos;s
                  </h2>
                </div>
              </div>
              <div>
                <span
                  onClick={() => setShow(false)}
                  className="text-[#111] text-2xl hover:text-[#ef1721] cursor-pointer duration-500"
                >
                  {" "}
                  <FaWindowClose />{" "}
                </span>
              </div>
            </div>
            <hr className="border-gray-500 w-4/5 mx-auto" />
            <div className="px-5 z-50">
              <ul className="space-y-2 mobileList pt-5 w-full">
                {listItem}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="hidden lg:flex items-center justify-between px-4 xl:px-[140px] 2xl:px-[240px]">
        <div className="flex items-center justify-center">
          <img src={logo} className="h-32 w-32" />
          <h2 className="text-2xl text-[#111] font-semibold -ml-4">
            Asetta Auto&apos;s
          </h2>
        </div>
        <ul className="flex items-center justify-center  gap-10 text-lg font-medium text-[#111]">
          {listItem}
        </ul>
        <div className="flex items-center justify-center gap-4 text-lg">
          <span className="text-[#111] hover:text-[#ef1721] cursor-pointer duration-500">
            {" "}
            <FaCartPlus />{" "}
          </span>
          <span className="text-[#111] hover:text-[#ef1721] cursor-pointer duration-500">
            {" "}
            <FaSearch />{" "}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
