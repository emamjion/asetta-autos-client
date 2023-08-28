import { Outlet } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
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
import { AuthContex } from "../../Component/Providers/Authprovider";
const Dashboard = () => {
    //  dark mode control with local storage --
const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
useEffect(()=>{
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute("data-theme" , localTheme)
},[theme]);
const handleDarkMode =(event)=>{
    if(event.target.checked){
        setTheme('dark')
    }
    else{
        setTheme('light')
    }
};

  const { user, logOut } = useContext(AuthContex);


  const currentUser = {'name' : 'Md Mohosin', 'role' : 'admin'}


  const [show, setShow] = useState(false);

  const handleLogOut = () => {
    logOut().then();
  };
  const listItem = (
    <>
      <li>
        <NavLink className="hover:text-[#ef1721] duration-500">
          {currentUser.role} Home
        </NavLink>
      </li>
      {currentUser.role === 'admin' && (
      <><li>
      <NavLink className="hover:text-[#ef1721] duration-500" to="/dashboard/add-dealers">
        Add Dealers
      </NavLink>
    </li>
    <li>
      <NavLink className="hover:text-[#ef1721] duration-500" to="/dashboard/add-blogs">
        Add blog
      </NavLink>
    </li></>
      )}
      {currentUser.role === 'dealer' && (
      <><li>
      <NavLink className="hover:text-[#ef1721] duration-500" to="/dashboard/add-cars">
        Add Cars
      </NavLink>
    </li>
    </>
      )}
      {currentUser.role === 'user' && (
      <>
      <li>
      <NavLink className="hover:text-[#ef1721] duration-500" to="/dashboard/user-cards">
        My Cards
      </NavLink>
    </li>
      <li>
      <NavLink className="hover:text-[#ef1721] duration-500" to="/dashboard/add-reviews">
        provide reviews
      </NavLink>
    </li>
    </>
      )}
      <li>
        <NavLink className="hover:text-[#ef1721] duration-500" to="/">
          Back home
        </NavLink>
      </li>
    </>
  );


    return (
        <div>
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

          {
              user && <label className="avatar tooltip tooltip-bottom tooltip-success" data-tip={user?.displayName}>

                <div className="w-10 h-10 rounded-full">
                  <img className="w-10 h-10 rounded-full" src={user?.photoURL} />
                </div>
              </label>
            }


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
        {/* <div className="flex items-center justify-center gap-4 text-lg">
          <span className="text-[#111] hover:text-[#ef1721] cursor-pointer duration-500">
            {" "}
            <FaCartPlus />{" "}
          </span>
          <span className="text-[#111] hover:text-[#ef1721] cursor-pointer duration-500">
            {" "}
            <FaSearch />{" "}
          </span>
        </div> */}
        <div className='lg:flex'>
                                <label className="swap swap-rotate">

                                    <input type="checkbox" onChange={handleDarkMode} />

                                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                </label>
            </div>
      </div>
    </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;