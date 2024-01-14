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
        element: <CourseDetails></CourseDetails>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
  {
    path: "/admin",
    element: <AdminPanel></AdminPanel>,
    children: [
      {
        path: "/admin",
        element: <AdminDashboard></AdminDashboard>
      },
      {
        path: "addCourses",
        element: <AddCourses></AddCourses>
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
