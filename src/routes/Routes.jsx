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
import NewsDetails from "../Component/LatestNews/NewsDetails";
import ServiceSectionDetails from "../Component/ServiceSection/ServiceSectionDetails";
import DealerRequest from "../Component/dashboard/dealer-request/DealerRequest";
import DealerRequestDetails from "../Component/dashboard/dealer-request/DealerRequestDetails";
import AllCar from "../Component/AllCar/AllCar";
import NotFoundPage from "../Component/NotFoundPage/NotFoundPage";
import TermsOfService from "../Component/TermsOfService/TermsOfService";
import PrivacyPolicy from "../Component/PrivacyPolicy/PrivacyPolicy";
import Faq from "../Component/Faq/Faq";
import VrDrives from "../Component/VrDrives/VrDrives";
import CheckOut from "../Component/checkOut/CheckOut";
import UserDetails from "../Component/userDetails/UserDetails";
// import VrDrives from "../Component/VrDrives/VrDrives";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <NotFoundPage></NotFoundPage>,
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
                path: 'our-blogs/:id',
                element: <NewsDetails />,
                loader : ({ params })=> fetch(`https://asetta-autos-production.up.railway.app/our-blogs/${params.id}`)
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
                path: 'termsofservice',
                element: <TermsOfService></TermsOfService>
            },
            {
                path: 'privacy',
                element: <PrivacyPolicy></PrivacyPolicy>
            },
            {
                path: 'faq',
                element: <Faq></Faq>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'all-car',
                element: <AllCar></AllCar>
                
            },
            {
                path: 'vr-drives',
                element: <VrDrives></VrDrives>
                
            }

        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <DashBoardHome></DashBoardHome>
            },
            {
                path: '/dashboard/add-dealers',
                element: <AddDealers></AddDealers>
            },
            {
                path: '/dashboard/userDetails',
                element: <UserDetails></UserDetails>
            },
            {
                path: '/dashboard/add-blogs',
                element: <AddBlogs></AddBlogs>
            },
            {
                path: '/dashboard/add-cars',
                element: <AddCars></AddCars>
            },
            {
                path: '/dashboard/add-reviews',
                element: <AddReview></AddReview>
            },
            {
                path: '/dashboard/user-cards',
                element: <UserCards></UserCards>
            },
            {
                path: '/dashboard/checkOut',
                element: <CheckOut></CheckOut>
            },
            {
                path: '/dashboard/dealer-request',
                element: <DealerRequest></DealerRequest>
            },
            {
                path: '/dashboard/dealer-request-details',
                element: <DealerRequestDetails></DealerRequestDetails>
            },
        ]
    }


])
export default router;