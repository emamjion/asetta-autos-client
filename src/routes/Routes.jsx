import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import AboutRoute from "../Component/AboutRoute/AboutRoute";
import ServiceRoute from "../Component/ServiceRoute/ServiceRoute";
import BlogRoute from "../Component/BlogRoute/BlogRoute";
import ContactRoute from "../Component/ContactRoute/ContactRoute";
import CardDetails from "../Component/NewArrivals/CardDetails";
import MeetOurTeamDetails from "../Component/MeetOurTeam/MeetOurTeamDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'about',
                element: <AboutRoute></AboutRoute>
            },
            {
                path: 'services',
                element: <ServiceRoute></ServiceRoute>
            },
            {
                path: 'blog',
                element: <BlogRoute></BlogRoute>
            },
            {
                path: 'contact',
                element: <ContactRoute></ContactRoute>
            },
            {
                path: 'arrivals-details/:id',
                element: <CardDetails></CardDetails>
            },
            {
                path: 'ourteam/:id',
                element: <MeetOurTeamDetails></MeetOurTeamDetails>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }

        ]
    },

])
export default router;