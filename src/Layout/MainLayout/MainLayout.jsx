// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            {/* todo - mohosin */}
            {/* <Footer/> */}
        </div>
    );
};

export default MainLayout;