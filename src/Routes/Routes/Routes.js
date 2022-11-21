import { createBrowserRouter } from "react-router-dom";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import DashBoard from "../../Pages/Dashboard/DashBoard/DashBoard";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../../Pages/Home/Home/Home";
import DashBoardLayout from "../../Pages/Layout/DashBoardLayout";
import Main from "../../Pages/Layout/Main";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element:<PrivateRoutes><DashBoardLayout></DashBoardLayout></PrivateRoutes>,
        children:[
            {
                path: '/dashboard',
                element:<MyAppointment></MyAppointment>
            }
        ]
    }
])

export default router;