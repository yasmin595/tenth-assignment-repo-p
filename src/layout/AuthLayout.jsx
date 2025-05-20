import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
              <header className="w-11/12 mx-auto py-4">
            <Header
            ></Header>
          </header>
          <main className="w-11/12 mx-auto py-5">
            <Outlet></Outlet>
          </main>
          <footer>
            <Footer></Footer>
          </footer>
        </div>
    );
};

export default AuthLayout;