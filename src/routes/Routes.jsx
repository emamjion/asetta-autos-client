import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import AboutRoute from "../Component/AboutRoute/AboutRoute";
import ServiceRoute from "../Component/ServiceRoute/ServiceRoute";
import BlogRoute from "../Component/BlogRoute/BlogRoute";
import ContactRoute from "../Component/ContactRoute/ContactRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'about',
                element: <AboutRoute></AboutRoute>
            },
            {
                path:'services',
                element: <ServiceRoute></ServiceRoute>
            },
            {
                path: 'blog',
                element: <BlogRoute></BlogRoute>
            },
            {
                path: 'contact',
                element: <ContactRoute></ContactRoute>
            }
            
        ]
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    }
])
export default router;