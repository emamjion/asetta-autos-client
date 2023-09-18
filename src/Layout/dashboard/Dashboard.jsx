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
import RouteBanner from "../../Component/Shared/RouteBanner/RouteBanner";
import useAllUser from "../../hooks/useAllUser";
const Dashboard = () => {
  //  dark mode control with local storage --
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute("data-theme", localTheme)
  }, [theme]);
  const handleDarkMode = (event) => {
    if (event.target.checked) {
      setTheme('dark')
    }
    else {
      setTheme('light')
    }
  };

  const { user, logOut } = useContext(AuthContex);


  const [users] = useAllUser()

  // find current users

  const currentUser = users.find(data => data?.email === user?.email)


  const handleLogOut = () => {
    logOut().then();
  };

  return (
    <div>
      <nav>
        <div className="flex flex-wrap flex-col xl:flex-row gap-2 bg-[#111] text-white items-center justify-center md:justify-between px-4 xl:px-[140px] 2xl:px-[240px] py-4">
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
          <div className="flex items-center justify-center gap-6">

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
        {/* todo - mohosin */}
        <div className="relative">
          <div className="flex lg:hidden justify-between items-center py-2 bg-slate-200 px-4 xl:px-[140px] 2xl:px-[240px]">
            <div className="flex items-center justify-center">
              <img src={logo} className="w-12 mr-2" />
              <h2 className="text-lg text-[#111] font-semibold -ml-4">
                Asetta Auto&apos;s
              </h2>
            </div>
            <div>

            <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden"><span
                // onClick={() => setShow(true)}
                className="text-[#111] text-2xl hover:text-[#ef1721] cursor-pointer duration-500"
              >
                
                {" "}
                <FaBars />{" "}
              </span></label>

              
            </div>
          </div>
            <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox"  className="drawer-toggle" />
            <div className="drawer-content my-10 mx-4">
              <Outlet></Outlet>
            </div>
            <div className="drawer-side ">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <ul className="menu px-20 w-12/12 xl:px-[100px]   min-h-full bg-slate-200 font-bold text-black">
                <div className="mx-auto">
                  <img src={logo} className="w-40" />
                  <h2 className="text-3xl text-center text-[#111] font-semibold -mt-10">
                    Asetta Auto&apos;s
                  </h2>
                </div>
                <hr className="border border-emerald-600 mt-4" />
                {/* <div className=" mx-auto text-center items-center my-10">
                  <img className="rounded-full mx-auto" src={user.photoURL} alt="" />
                  <h1 className="font-bold text-2xl mt-3">{user.displayName}</h1>
                  <p className="font-bold text-xl mt-1">{user.email}</p>
                </div> */}
                <hr className="font-bold my-5 " />
                {currentUser?.role === "user" && (
                  <>
                    <li>
                      <Link className="hover:text-[#ef1721] duration-500 bg-gray-300">
                        {currentUser?.role} Home
                      </Link>
                    </li>
                    <li>
                      <NavLink className="hover:text-[#ef1721] duration-500 my-2" to="/dashboard/user-cards">
                        My Cards
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="hover:text-[#ef1721] duration-500 my-2" to="/dashboard/add-reviews">
                        add Reviews
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="hover:text-[#ef1721] duration-500 my-2" to="/dashboard/dealer-request">
                        Dealer Request
                      </NavLink>
                    </li>
                  </>
                )}
                {currentUser?.role === "dealer" && (
                  <>
                          <li>
                    <Link className="hover:text-[#ef1721] duration-500 bg-gray-300">
                      {currentUser?.role} Home
                    </Link>
                  </li>
                    <li className="my-2">
                      <NavLink className="hover:text-[#ef1721] duration-500" to="/dashboard/add-cars">
                        Add Your Cars
                      </NavLink>
                    </li>
                  </>
                )}
                {currentUser?.role === "admin" && (
                  <>
                    <li>
                   <Link className="hover:text-[#ef1721] duration-500 bg-gray-300">
                     {currentUser?.role} Home
                   </Link>
                 </li>
                    <li>
                      <NavLink className="hover:text-[#ef1721] duration-500 my-2" to="/dashboard/add-dealers">
                        Add a new Dealers
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="hover:text-[#ef1721] duration-500 my-2" to="/dashboard/add-blogs">
                        Add Your Blogs
                      </NavLink>
                    </li>
                  </>
                )}
                <hr className="my-5 border border-emerald-600" />
                <li className="my-2">
                  <NavLink className="hover:text-[#ef1721] duration-500" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="my-2">
                  <NavLink className="hover:text-[#ef1721] duration-500" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="my-2">
                  <NavLink className="hover:text-[#ef1721] duration-500" to="/all-car">
                    All Cars
                  </NavLink>
                </li>
                <li className="my-2">
                  <NavLink className="hover:text-[#ef1721] duration-500" to="/services">
                    Services
                  </NavLink>
                </li>
                <li className="my-2">
                  <NavLink className="hover:text-[#ef1721] duration-500" to="/blog">
                    Blog
                  </NavLink>
                </li>
                <li className="my-2">
                  <NavLink className="hover:text-[#ef1721] duration-500" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
  
            </div>
          </div>
        </div>
      </nav>
      <div>
        
      </div>
    </div>
  );
};

export default Dashboard;