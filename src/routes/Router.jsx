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
import Details from '../pages/details';
import UpdateTask from '../components/UpdateTask';
import ErrorPage from '../pages/ErrorPage';





const router = createBrowserRouter([
  {
    path: "/",
     Component:MainLayout ,
     children:[

      {

        index:true,
         loader: () => fetch('https://assigment-copy-gj1o.onrender.com/my-task'),
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
             loader: () => fetch('https://assigment-copy-gj1o.onrender.com/tasks'),
          Component:BrowseTask,
            hydrateFallbackElement:<Loading></Loading>,

      },

      {
path:"details/:_id",
loader: () => fetch("https://assigment-copy-gj1o.onrender.com/"),
element:<PrivateRoute>
  <Details>
</Details> 
</PrivateRoute> ,

      hydrateFallbackElement:<Loading></Loading>,

      },

      {
        path:"posted-task/:email",
        loader: ({params})=> fetch(`https://assigment-copy-gj1o.onrender.com/${params.email}`),
        
     element:<PrivateRoute>
     <PostedTask></PostedTask>
     </PrivateRoute>,
       hydrateFallbackElement:<Loading></Loading>
      },
      {
        path:"updated-task/:id",
        loader:({params}) => fetch(`https://assigment-copy-gj1o.onrender.com/${params.id}`),
        
        element:<PrivateRoute>
          <UpdateTask></UpdateTask>
        </PrivateRoute>,
         hydrateFallbackElement:<Loading></Loading>,       
      },
       
     
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
    },

]

  },
    {
      path:'/*',
      element:<ErrorPage></ErrorPage>

        },
]);
    

export default router;