import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './Pages/Homepage/Homepage.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Components/Authentication/AuthProvider.jsx';
import AdminDashboard from './Pages/Admin/Admin Dashboard/AdminDashboard.jsx';
import AdminPanel from './Pages/Admin/Admin Panel/AdminPanel.jsx';
import AddCourses from './Pages/Admin/Add Courses/AddCourses.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Courses from './Pages/Courses/Courses.jsx';
import CourseDetails from './Pages/Courses/Course Details/CourseDetails.jsx';
import CourseList from './Pages/Admin/Course List/CourseList.jsx';
import UpdateCourse from './Pages/Admin/Update Course/UpdateCourse.jsx';
import StudyAbroad from './Pages/Study Abroad/StudyAbroad.jsx';
import Scholarships from './Pages/Scholarships/Scholarships.jsx';
import CountryDetails from './Pages/CountryDetails/CountryDetails.jsx';
import AddConsultant from './Pages/Admin/Add Consultant/AddConsultant.jsx';
import Consultants from './Pages/Consultants/Consultants.jsx';
import ConsultantDetails from './Pages/Consultant Details/ConsultantDetails.jsx';
import ConsultantList from './Pages/Admin/Consultant List/ConsultantList.jsx';
import UserPanel from './Pages/User/User Panel/UserPanel.jsx';
import UserDashboard from './Pages/User/User Dashboard/UserDashboard.jsx';
import BookmarkedCourses from './Pages/User/Bookmarked Courses/BookmarkedCourses.jsx';
import Success from './Pages/Payment Result/Success.jsx';
import Failed from './Pages/Payment Result/Failed.jsx';
import UserAppointments from './Pages/User/Appointments/UserAppointments.jsx';
import Profile from './Pages/User/Profile/Profile.jsx';
import AdminRoute from './Components/Authentication/Admin Route/AdminRoute.jsx';
import UserRoute from './Components/Authentication/User Route/UserRoute.jsx';
import PrivateRoute from './Components/Authentication/Private Route/PrivateRoute.jsx';

const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>
      },
      {
        path: "/courses",
        element: <Courses></Courses>
      },
      {
        path: "/courseDetails/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/courseDetails/${params.id}`),
        element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>
      },
      {
        path: "/scholarships",
        element: <Scholarships></Scholarships>
      },
      {
        path: "/studyAbroad",
        element: <StudyAbroad></StudyAbroad>
      },
      {
        path: "/countryDetails/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/detailedCountry/${params.id}`),
        element: <CountryDetails></CountryDetails>
      },
      {
        path: "/consultant",
        element: <Consultants></Consultants>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/consultant",
        element: <Consultants></Consultants>
      },
      {
        path: "/consultantDetails/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/consultantDetails/${params.id}`),
        element: <PrivateRoute><ConsultantDetails></ConsultantDetails></PrivateRoute>
      },
      {
        path: "payment/success/:tranId",
        element: <Success></Success>
      },
      {
        path: "payment/failed/:tranId",
        element: <Failed></Failed>
      }
    ]
  },
  {
    path: "/admin",
    element: <AdminRoute><AdminPanel></AdminPanel></AdminRoute>,
    children: [
      {
        path: "/admin",
        element: <AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>
      },
      {
        path: "addCourses",
        element: <AdminRoute><AddCourses></AddCourses></AdminRoute>
      },
      {
        path: "courseList",
        element: <AdminRoute><CourseList></CourseList></AdminRoute>
      },
      {
        path: "courseList/updateCourse/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/courseDetails/${params.id}`),
        element: <AdminRoute><UpdateCourse></UpdateCourse></AdminRoute>
      },
      {
        path: "addConsultant",
        element: <AdminRoute><AddConsultant></AddConsultant></AdminRoute>
      },
      {
        path: "consultantList",
        element: <AdminRoute><ConsultantList></ConsultantList></AdminRoute>
      },
    ]
  },
  {
    path: "/user",
    element: <UserRoute><UserPanel></UserPanel></UserRoute>,
    children: [
      {
        path: "/user",
        element: <UserRoute><UserDashboard></UserDashboard></UserRoute>
      },
      {
        path: "bookmarkedCourses",
        element: <UserRoute><BookmarkedCourses></BookmarkedCourses></UserRoute>
      },
      {
        path: "userAppointments",
        element: <UserRoute><UserAppointments></UserAppointments></UserRoute>
      },
      {
        path: "profile",
        element: <UserRoute><Profile></Profile></UserRoute>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
