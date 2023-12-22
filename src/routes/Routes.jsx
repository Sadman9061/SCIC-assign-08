import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Registration/SignUp";
import Dashboard from "../layout/Dashboard";

import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import Create from "../pages/Dashboard/Create/Create";
import Error from "../Error/Error";
import PrivateRoute from "../privateRoute/PrivateRoutes";
import Update from "../pages/Dashboard/Update/Update";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            }
            ,
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        errorElement:<Error></Error>,
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path:'/dashboard/home',
                element:<DashboardHome/>
            },
            {
                path:'/dashboard/create',
                element:<Create/>
            },
            // ffffffffffffffffffff
            {
                path:'/dashboard/update/:id',
                element:<Update/>,
                loader: ({params})=> fetch(`https://scic-assignment-8-server.vercel.app/update/${params.id}`)
            }
        ]
    }
]);
export default Routes;