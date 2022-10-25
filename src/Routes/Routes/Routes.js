import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Course from "../../Pages/Course/Course/Course";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails/CourseDetails";
import Home from "../../Pages/Home/Home/Home";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/course/:id',
            element: <Course></Course>
         },
         {
            path: 'coursedetails/:id',
            element: <CourseDetails></CourseDetails>
         }
        ]
    }
])