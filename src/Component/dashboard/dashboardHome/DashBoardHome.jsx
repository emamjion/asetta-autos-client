import { Link } from "react-router-dom";
import RouteBanner from "../../Shared/RouteBanner/RouteBanner";
import { useContext, useEffect, useState } from "react";
import { AuthContex } from './../../Providers/Authprovider';

const DashBoardHome = () => {
  const {user} = useContext(AuthContex);
  // const currentUser = { 'name': 'Md Mohosin', 'role': 'admin' }
  const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://asetta-autos-production.up.railway.app/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    // find current users

   const currentUser =  users.find(data=>data?.email === user?.email)
  //  console.log(currentUser?.role);

  return (
    <>
      {/* <RouteBanner SectionTitle={'DASHBOARD HOME'} smallTitle={'DASHBOAD HOME'}></RouteBanner> */}
      <div className=" xl:px-[140px] 2xl:px-[240px] py-10 border">
        <h2 className="uppercase text-center text-xl md:text-4xl font-bold">{currentUser?.role} Dashboard</h2>
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