import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import CheckOut from "../../Pages/CheckOut/CheckOut/CheckOut";
import Course from "../../Pages/Course/Course/Course";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails/CourseDetails";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Shared/Login/Login/Login";
import Register from "../../Pages/Shared/Register/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
         {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/courses')
         },
         {
            path: '/course/:id',
            element: <Course></Course>,
            loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
         },
         {
            path: 'course/:id',
            element: <CourseDetails></CourseDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/coursedetails/${params.id}`)
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         },
         {
            path:'/blog',
            element: <Blog></Blog>
         },
         {
            path: '/checkout/:id',
            element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/checkout/${params.id}`)
         }
        ]
    }
])