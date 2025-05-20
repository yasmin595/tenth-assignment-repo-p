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





const router = createBrowserRouter([
  {
    path: "/",
     Component:MainLayout ,
     children:[

      {

        index:true,
        Component:Home,
      },
       {
path:"add-task",
Component:AddTask,

      },
    
      {
          path:"browse-task",
          Component:BrowseTask,

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