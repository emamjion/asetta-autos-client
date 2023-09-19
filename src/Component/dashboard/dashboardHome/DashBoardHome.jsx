import { Link, Outlet } from "react-router-dom";
import RouteBanner from "../../Shared/RouteBanner/RouteBanner";
import { useContext, useEffect, useState } from "react";
import { AuthContex } from './../../Providers/Authprovider';
import useAllUser from "../../../hooks/useAllUser";

const DashBoardHome = () => {
  const { user } = useContext(AuthContex);
  // const currentUser = { 'name': 'Md Mohosin', 'role': 'admin' }
  const [users] = useAllUser()

  // find current users

  const currentUser = users.find(data => data?.email === user?.email)
  //  console.log(currentUser?.role);

  return (
    <>
      <div className=" px-4  py-10 border">
        <RouteBanner SectionTitle={`${currentUser?.role} DASHBOARD`} smallTitle={`${currentUser?.role} DASHBOARD`}></RouteBanner>
        <div className="my-10">
          <div className="text-center space-x-5">
            {currentUser?.role === "user" && (
              <>
                <Link to="/dashboard/user-cards">
                  <button className="btn bg-red-600 text-white  hover:bg-black">
                    My Cards
                  </button>
                </Link>
                <Link to="/dashboard/add-reviews">
                  <button className="btn bg-red-600 text-white  hover:bg-black">
                    add Reviews
                  </button>
                </Link>
                <Link to="/dashboard/dealer-request">
                  <button className="btn bg-red-600 text-white  hover:bg-black">
                    Dealer Request
                  </button>
                </Link>
              </>
            )}
            
            {currentUser?.role === "dealer" && (
              <>
                <Link to="/dashboard/add-cars">
                  <button className="btn bg-red-600 text-white  hover:bg-black">
                    Add Your Cars
                  </button>
                </Link>
              </>
            )}
            {currentUser?.role === "admin" && (
              <>
                <Link to="/dashboard/add-dealers">
                  <button className="btn bg-red-600 text-white  hover:bg-black">
                    Add a new Dealers
                  </button>
                </Link>
                <Link to="/dashboard/add-blogs">
                  <button className="btn bg-red-600 text-white  hover:bg-black">
                    Add Your Blogs
                  </button>
                </Link>
              </>
            )}

          </div>
        </div>
      </div>
      
      
    </>
  );
};

export default DashBoardHome;