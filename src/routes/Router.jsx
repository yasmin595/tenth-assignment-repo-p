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
import Details from '../pages/Details';
import UpdateTask from '../components/UpdateTask';
import ErrorPage from '../pages/ErrorPage';
import DashBoard from '../pages/DashBoard';
import ExtraLayout from '../layout/ExtraLayout';
import AllTask from '../pages/AllTask';
import AboutUs from '../pages/AboutUs';





const router = createBrowserRouter([
  {
    path: "/",
     Component:MainLayout ,
     children:[

      {

        index:true,
         loader: () => fetch('https://tenth-assignment-repo.vercel.app/my-task').then(res => res.ok ? res.json() : []),
        Component:Home,
        hydrateFallbackElement:<Loading></Loading>,
      },

    
      {
          path:"browse-task",
             loader: () => fetch('https://tenth-assignment-repo.vercel.app/tasks').then(res => res.ok ? res.json() : []),
          Component:BrowseTask,
            hydrateFallbackElement:<Loading></Loading>,

      },
      {
          path:"about",
         
          Component:AboutUs,
            hydrateFallbackElement:<Loading></Loading>,

      },



       
     
     ]
     
  },
    {
    path:"/",
    element:<ExtraLayout></ExtraLayout>,
    children:[

      {
     path:"dashboard",
     element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>
      },
       {
          path:"allTask",
             loader: () => fetch('https://tenth-assignment-repo.vercel.app/tasks').then(res => res.ok ? res.json() : []),
              element:<PrivateRoute><AllTask></AllTask></PrivateRoute>,
            hydrateFallbackElement:<Loading></Loading>,

      },
     
      
             {
path:"add-task",
element:<PrivateRoute>
  <AddTask></AddTask>
</PrivateRoute>,

      },
            {
path:"details/:_id",
loader: () => fetch("https://tenth-assignment-repo.vercel.app/tasks").then(res => res.ok ? res.json() : []),
element:<PrivateRoute>
  <Details></Details>
</PrivateRoute> ,

      hydrateFallbackElement:<Loading></Loading>,

      },
        {
        path:"posted-task/:email",
        loader: ({params})=> fetch(`https://tenth-assignment-repo.vercel.app/tasks/${params.email}`).then(res => res.ok ? res.json() : []),
        
     element:<PrivateRoute>
     <PostedTask></PostedTask>
     </PrivateRoute>,
       hydrateFallbackElement:<Loading></Loading>
      },
      
    
      {
        path:"updated-task/:id",
        loader:({params}) => fetch(`https://tenth-assignment-repo.vercel.app/task/${params.id}`).then(res => res.ok ? res.json() : {}),
        
        element:<PrivateRoute>
          <UpdateTask></UpdateTask>
        </PrivateRoute>,
         hydrateFallbackElement:<Loading></Loading>,       
      },
    ]
  }
  ,
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
    },

]

  },

    {
      path:'/*',
      element:<ErrorPage></ErrorPage>

        },
]);
    

export default router;