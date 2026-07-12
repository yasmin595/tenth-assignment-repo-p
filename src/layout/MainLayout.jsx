import React from 'react';
import Header from '../components/Header';
import { Outlet , useNavigation  } from 'react-router';
import Footer from '../components/Footer';
import Loading from '../pages/Loading';

const MainLayout = () => {
    const {state } = useNavigation();
    return (
        <div className=''>
         <Header></Header>
         <div className='max-w-7xl min-h-screen mx-auto'>
            {state == "loading"? <Loading></Loading> : <Outlet></Outlet> } 
         </div>
         <Footer></Footer>
        </div>
    );
};

export default MainLayout;