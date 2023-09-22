import React, { useContext, useEffect } from 'react';
import leaftArrow from '../../assets/images/logo/left-arrow-icon.png'
import logo from '../../assets/images/logo/logo.png'
import { useState } from 'react';
import { MdHome, MdLogout, MdOutlineDashboard, MdOutlineReviews, MdPayment, MdShoppingCart } from 'react-icons/md';
import { PiUsersThreeLight } from 'react-icons/pi';
import { RiContactsBookLine, RiPagesLine, RiServiceLine, RiSettings4Line } from 'react-icons/ri';
import { TbFileAnalytics, TbListDetails } from 'react-icons/tb';
import { FaCarAlt, FaPager, FaUserTie } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { AuthContex } from '../../Component/Providers/Authprovider';
import useAllUser from '../../hooks/useAllUser';
import { CiSquareQuestion } from "react-icons/ci";

const DashboardLayout = () => {
    const [open, setOpen] = useState(true);
    const adminMenus = [
        {title : 'Dashboard', link: '/dashboard', icon: MdOutlineDashboard},
        {title : 'Manage Users', link: '/users', icon: PiUsersThreeLight, gap: true},
        {title : 'Add Blogs', link: '/dashboard/add-blogs', icon: RiPagesLine},
        {title : 'Add New Dealers', link: '/dashboard/add-dealers', icon: FaUserTie},
        {title : 'Analytics', link: '/analytics', icon: TbFileAnalytics},
        {title : 'Setting', link: 'dashboard', icon: RiSettings4Line},
        
        {title : 'Home', link: '/', icon: MdHome, gap: true},
        {title : 'About', link: '/about', icon: TbListDetails},
        {title : 'Cars', link: '/all-car', icon: FaCarAlt},
        {title : 'Service', link: '/services', icon: RiServiceLine},
        {title : 'Blog', link: '/blog', icon: FaPager},
        {title : 'Contact', link: '/contact', icon: RiContactsBookLine},
    ]
    const dealerMenus = [
        {title : 'Dashboard', link: '/dashboard', icon: MdOutlineDashboard},
        {title : 'Add Cars', link: '/dashboard/add-cars', icon: PiUsersThreeLight, gap: true},
        {title : 'Add Blogs', link: '/add-blogs', icon: RiPagesLine},
        {title : 'Dealers', link: '/dealers', icon: FaUserTie},
        {title : 'Analytics', link: '/analytics', icon: TbFileAnalytics},
        {title : 'Setting', link: 'dashboard', icon: RiSettings4Line},
        
        {title : 'Home', link: '/', icon: MdHome, gap: true},
        {title : 'About', link: '/about', icon: TbListDetails},
        {title : 'Cars', link: '/all-car', icon: FaCarAlt},
        {title : 'Service', link: '/services', icon: RiServiceLine},
        {title : 'Blog', link: '/blog', icon: FaPager},
        {title : 'Contact', link: '/contact', icon: RiContactsBookLine},
    ]
    const userMenus = [
        {title : 'Dashboard', link: '/dashboard', icon: MdOutlineDashboard},
        {title : 'My Carts', link: '/dashboard/user-cards', icon: MdShoppingCart},
        {title : 'Payment History', link: '/users', icon: MdPayment},
        {title : 'Add Reviews', link: '/dashboard/add-reviews', icon: MdOutlineReviews},
        {title : 'Dealer Request', link: '/dashboard/dealer-request', icon: CiSquareQuestion},
        {title : 'Analytics', link: '/analytics', icon: TbFileAnalytics},
        {title : 'Setting', link: 'dashboard', icon: RiSettings4Line},

        {title : 'Home', link: '/', icon: MdHome, gap: true},
        {title : 'About', link: '/about', icon: TbListDetails},
        {title : 'Cars', link: '/all-car', icon: FaCarAlt},
        {title : 'Service', link: '/services', icon: RiServiceLine},
        {title : 'Blog', link: '/blog', icon: FaPager},
        {title : 'Contact', link: '/contact', icon: RiContactsBookLine},
    ]


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
        <div className='flex'>
            <div className={`${open ? 'w-72' : 'w-20'} p-5 pt-8 duration-300 h-screen bg-[#2c3e50] relative`}>
                <img 
                    src={leaftArrow} 
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 border-[#2c3e50] bg-white rounded-full p-2 ${!open && 'rotate-180'}`}
                    onClick={() => setOpen(!open)}
                />
                <div className='flex gap-x-4 items-center'>
                    <img 
                        src={logo}
                        className={`w-9 bg-white rounded-lg cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`}
                    />
                    <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}>Asetta Auto's</h1>
                </div>
                {
                    currentUser?.role === "user" && <ul className='pt-6'>
                    {userMenus?.map((menu, index) => <Link to={menu?.link}>
                        <li 
                        key={index}
                        className={`text-gray-300 text-md flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-600 rounded-md duration-200 ${menu?.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-gray-600'}`}
                    >
                        <div>
                            {React.createElement(menu?.icon, {size: '20'})}
                        </div>
                        <span className={`${!open && 'hidden'} origin-left duration-200 `}>
                            {menu?.title}
                        </span>
                    </li>
                    </Link>)}
                    
                </ul>
                }
                {
                    currentUser?.role === "dealer" && <ul className='pt-6'>
                    {dealerMenus?.map((menu, index) => <Link to={menu?.link}>
                        <li 
                        key={index}
                        className={`text-gray-300 text-md flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-600 rounded-md duration-200 ${menu?.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'hover:bg-gray-600'}`}
                    >
                        <div>
                            {React.createElement(menu?.icon, {size: '20'})}
                        </div>
                        <span className={`${!open && 'hidden'} origin-left duration-200 `}>
                            {menu?.title}
                        </span>
                    </li>
                    </Link>)}
                    
                </ul>
                }
                {
                    currentUser?.role === "admin" && <ul className='pt-6'>
                    {adminMenus?.map((menu, index) => <Link to={menu?.link}>
                        <li 
                        key={index}
                        className={`text-gray-300 text-md flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md duration-200 ${menu?.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-slate-700'}`}
                    >
                        <div>
                            {React.createElement(menu?.icon, {size: '20'})}
                        </div>
                        <span className={`${!open && 'hidden'} origin-left duration-200 `}>
                            {menu?.title}
                        </span>
                    </li>
                    </Link>)}
                    
                </ul>
                }
                
                {
                    user && <div className='absolute bottom-5 text-gray-300 duration-200'>
                        <div className='flex items-center gap-x-4'>
                            <img 
                                src={user?.photoURL}
                                className='w-14 rounded-full'
                            />
                        <div className={`${!open && 'hidden'} origin-left duration-200 `}>
                                <h1>{user?.displayName}</h1>
                                <h5 className='text-sm'>{user?.email}</h5>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-2 mt-6 cursor-pointer' onClick={handleLogOut}>
                        <span className='text-xl'>< MdLogout /></span>
                        <h3 className={`${!open && 'hidden'} text-xl origin-left duration-200 `}>Logout</h3>
                    </div>
                </div>

                
                }
            </div>
            <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
                <Outlet/>
            </div>
        </div>
    );
};

export default DashboardLayout;