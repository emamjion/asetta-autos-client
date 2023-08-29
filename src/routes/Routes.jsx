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
import DealerDetails from "../Component/BestDealer/DealerDetails";
import DashBoardHome from "../Component/dashboard/dashboardHome/DashBoardHome";
import Dashboard from "../Layout/dashboard/Dashboard";
import PrivateRoute from "../Component/PrivateRoute/PrivateRoute";
import AddDealers from "../Component/dashboard/addDealers/AddDealers";
import AddBlogs from "../Component/dashboard/addBlogs/AddBlogs";
import AddCars from "../Component/dashboard/addCars/AddCars";
import AddReview from "../Component/dashboard/addReview/AddReview";
import UserCards from "../Component/dashboard/userCards/UserCards";
import ServiceSectionDetails from "../Component/ServiceSection/ServiceSectionDetails";

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
                path: 'dealer-details/:id',
                element: <DealerDetails></DealerDetails>
            },
            {
                path: 'ourteam/:id',
                element: <MeetOurTeamDetails></MeetOurTeamDetails>
            },
            {
                path: 'services/:id',
                element: <ServiceSectionDetails></ServiceSectionDetails>
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
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children : [
            {
                path : '/dashboard',
                element : <DashBoardHome></DashBoardHome>
            },
            {
                path : '/dashboard/add-dealers',
                element : <AddDealers></AddDealers>
            },
            {
                path : '/dashboard/add-blogs',
                element : <AddBlogs></AddBlogs>
            },
            {
                path : '/dashboard/add-cars',
                element : <AddCars></AddCars>
            },
            {
                path : '/dashboard/add-reviews',
                element : <AddReview></AddReview>
            },
            {
                path : '/dashboard/user-cards',
                element : <UserCards></UserCards>
            },
        ]
    }


])
export default router;