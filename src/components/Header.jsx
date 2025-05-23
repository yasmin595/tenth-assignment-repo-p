import React, { use, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const Header = () => {
const { user, logOut } = use(AuthContext);
const [show, setShow] = useState(false);
const handleLogOut = () => {
    // console.log("user trying to LogOut");
    logOut()
      .then(() => {
        toast.success("You Logged Out successfully");
        setShow('');
        
      })
      .catch((error) => {
        console.log(error);
      });
  };
 const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);


 const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");


    return (
        <div className='bg-gray-100 dark:bg-gray-800 '>
         
            <div className=" px-2 lg:px-4 navbar bg-base-100 mx-auto shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink  className={({isActive})=>isActive? 'text-secondary underline font-semibold':''} to='/'>Home</NavLink></li>
        <li>
      <NavLink  className={({isActive})=>isActive? 'text-secondary underline font-semibold':''} to='/add-task'> Add Task</NavLink>
        </li>
        <li><NavLink  className={({isActive})=>isActive? 'text-secondary underline font-semibold':''} to="/browse-task">Browse Task</NavLink></li>
        <li><NavLink  className={({isActive})=>isActive? 'text-secondary underline font-semibold':''} to={`/posted-task/${user?.email}`}>My Posted Task</NavLink></li>
        
        <div>
               <li>  
          
            <button
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
          </button></li>
        </div>
<li>
  <div className=" gap-2">
        <img
          className="w-12 rounded-full"
          src={`${user &&  user?.photoURL}`}
          alt=''
          onClick={()=>setShow(!show)}
        />

        {
          show && (

            <div>
              <p>{user?.displayName}</p>
         
            <p>{user?.email}</p>

            <button  onClick={handleLogOut} className='btn btn-secondary btn-outline' >Log Out</button>
            </div>
          )
        }
      {user ? (
       ' '
        ) : (
          <Link to="/auth/login" className="btn  btn-secondary btn-outline px-4 ">
            Login
          </Link>
        )}
   {
    user ? (
      ' '
    ):(
       <Link to="/auth/sign-up" className="btn btn-secondary btn-outline">Sign Up</Link>
    )
   }
  </div>
</li>
      </ul>
    </div>
    <a className=" text-secondary font-bold text-2xl">Freelance Task <br /> Marketplace</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <li><NavLink   className={({isActive})=>isActive? 'text-secondary underline font-semibold':''} to='/'>Home</NavLink></li>
        <li>
     <NavLink  className={({isActive})=>isActive? 'text-secondary underline font-semibold':''} to='/add-task'> Add Task</NavLink>
        </li>
        <li><NavLink  className={({isActive})=>isActive? 'text-secondary underline font-semibold':''} to="/browse-task">Browse Task</NavLink></li>
        <li><NavLink  className={({isActive})=>isActive? 'text-secondary underline font-semibold':''} to={`/posted-task/${user?.email}`}>My Posted Task</NavLink></li>

        <li>  
          
            <button
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
          </button></li>
          
           <li><div className=" gap-2">
        <img
          className="w-12 rounded-full"
          src={`${user &&  user?.photoURL}`}
          alt=''
          onClick={()=>setShow(!show)}
        />

        {
          show && (

            <div>
              <p>{user?.displayName}</p>
         
            <p>{user?.email}</p>

            <button  onClick={handleLogOut} className='btn btn-secondary btn-outline' >Log Out</button>
            </div>
          )
        }
      {user ? (
       ' '
        ) : (
          <Link to="/auth/login" className="btn  btn-secondary btn-outline px-4 ">
            Login
          </Link>
        )}
   {
    user ? (
      ' '
    ):(
       <Link to="/auth/sign-up" className="btn btn-secondary btn-outline">Sign Up</Link>
    )
   }
  </div></li>

    </ul>
  </div>
   
  
</div>
        </div>
    );
};

export default Header;