import React from 'react';

import { createBrowserRouter } from "react-router";
import MainLayout from '../layout/MainLayout';
import Home from '../components/Home';
import AddTask from '../components/AddTask';
import BrowseTask from '../components/BrowseTask';
import PostedTask from '../components/PostedTask';
import AuthLayout from '../layout/AuthLayout';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';
import PrivateRoute from '../provider/PrivateRoute';
import Loading from '../pages/Loading';





const router = createBrowserRouter([
  {
    path: "/",
     Component:MainLayout ,
     children:[

      {

        index:true,
         loader: () => fetch('http://localhost:3000/tasks'),
        Component:Home,
        hydrateFallbackElement:<Loading></Loading>,
      },
       {
path:"add-task",
element:<PrivateRoute>
  <AddTask></AddTask>
</PrivateRoute>,

      },
    
      {
          path:"browse-task",
             loader: () => fetch('http://localhost:3000/tasks'),
          Component:BrowseTask,
            hydrateFallbackElement:<Loading></Loading>,

      },
      {
        path:"posted-task",
        Component:PostedTask,
      }
     ]
  },
  {
path:"/auth",
Component:AuthLayout,
children:[
    {
        path:"/auth/login",
        Component:LogIn,

    },
    {
        path:"/auth/sign-up",
        Component:SignUp,
    }

]

  }
]);
    

export default router;