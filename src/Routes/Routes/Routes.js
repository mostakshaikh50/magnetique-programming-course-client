import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Course from "../../Pages/Course/Course/Course";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails/CourseDetails";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Shared/Login/Login/Login";
import Register from "../../Pages/Shared/Register/Register/Register";

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
         }
        ]
    }
])