import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import logo from '../../assets/asmat-logo.jpeg'

const Nav = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
console.log(user);
  useEffect(() => {
    if (user) {
      // navigate("/");
    }
  }, [user, navigate]);
  const navMenu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/admission">Admission</NavLink>
      </li>
      <li>
        <NavLink to="/event">Event & news</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/notice">Notice</NavLink>
      </li>
      <li>
        <NavLink to="/syllabus">Syllabus</NavLink>
      </li>
      <li>
        <NavLink to="/calender">Calendar</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/mujib">Mujib Corner</NavLink>
      </li>
    </>
  );
  return (
    // ---------------------- New Navbar -------------------------------------
    <div className="navbar bg-crimson text-white z-50 relative sticky top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-crimson rounded-box w-52"
          >
            {/* Menu For Mobile */}
            {navMenu}
            <li tabindex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-crimson">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">
          <img className="absolute top-0 left-0 h-[120px] w-32 rounded-b-full shadow-md" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {/* Menu for lg Screen */}
          {navMenu}
          <li tabindex={0}>
            <a>
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-crimson">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          {!user && (
            <li>
              <NavLink to="login">Login</NavLink>
            </li>
          )}
        </ul>
      </div>
      {/* ---------------
            NavBar End    
          ---------------- */}
      <div className="navbar-end">
        {/* search */}
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        {/* notification */}
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        {/* profile */}
        {user && (
          <div className="dropdown dropdown-end">
            <label tabindex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL || "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1662389822~exp=1662390422~hmac=9a536effe4040efa033364ea9f3fb619491d07cde39926fd0deae7a5b23e55f7"} alt=""/>
              </div>
            </label>
            <ul
              tabindex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-crimson rounded-box w-52"
            >
              <li>
                <NavLink to='profile' className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </NavLink>
              </li>
              <li>
                <NavLink to='setting'>Settings</NavLink>
              </li>
              <li>
                <NavLink to="regi" onClick={logout}>
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
    // -----------------------------------------------------------------------
    // ------------------------- Nahid Vai ---------------------------------
    // -----------------------------------------------------------------------

    // <div class="navbar w-full mx-auto bg-crimson text-white sticky top-20 z-50">
    //   <div class="flex 1">
    //     <NavLink to="/">
    //       Home
    //     </NavLink>
    //   </div>
    //   <div class="flex-none">
    //     <ul class="menu menu-horizontal p-0">
    //       <li tabindex="0">
    //         <NavLink to="/admitform1">Admission</NavLink>
    //         <ul class="p-2  bg-crimson text-white">
    //           <li>
    //             <NavLink to="/admitform1">Admission 1</NavLink>
    //           </li>
    //           <li>
    //             <NavLink to="/admitform2">Admission 2</NavLink>
    //           </li>
    //         </ul>
    //       </li>
    //       <li tabindex="0">
    //         <a>News and Events</a>
    //         <ul class="p-2  bg-crimson text-white">
    //           <li>
    //             <a>News 1</a>
    //           </li>
    //           <li>
    //             <a>News 2</a>
    //           </li>
    //         </ul>
    //       </li>
    //       <li tabindex="0">
    //         <a>Notice Panel</a>
    //         <ul class="p-2  bg-crimson text-white">
    //           <li>
    //             <a>Notice 1</a>
    //           </li>
    //           <li>
    //             <a>Notice 2</a>
    //           </li>
    //         </ul>
    //       </li>
    //       <li tabindex="0">
    //         <a>Syllabus</a>
    //         <ul class="p-2  bg-crimson text-white">
    //           <li>
    //             <a>Syllabus 1</a>
    //           </li>
    //           <li>
    //             <a>Syllabus 2</a>
    //           </li>
    //         </ul>
    //       </li>
    //       <li tabindex="0">
    //         <a>Teacher List</a>
    //         <ul class="p-2  bg-crimson text-white">
    //           <li>
    //             <a>Teacher 1</a>
    //           </li>
    //           <li>
    //             <a>Teacher 2</a>
    //           </li>
    //         </ul>
    //       </li>
    //       <li tabindex="0">
    //         <a>Calender</a>
    //       </li>
    //       <li tabindex="0">
    //         <a>Contact</a>
    //         <ul class="p-2  bg-crimson text-white">
    //           <li>
    //             <a>Contact 1</a>
    //           </li>
    //           <li>
    //             <a>Contact 2</a>
    //           </li>
    //         </ul>
    //       </li>
    //       <li tabindex="0">
    //         <a>Bangabandhu Corner</a>
    //         <ul class="p-2  bg-crimson text-white">
    //           <li>
    //             <a>Corner 1</a>
    //           </li>
    //           <li>
    //             <a>Corner 2</a>
    //           </li>
    //         </ul>
    //       </li>
    //       <li tabindex="0">
    //         <NavLink to="about">About</NavLink>
    //       </li>
    //       <li tabindex="0">
    //         <a>Admin Panel</a>
    //         <ul class="p-2  bg-crimson text-white">
    //           <li>
    //             <a>Panel 1</a>
    //           </li>
    //           <li>
    //             <a>Panel 2</a>
    //           </li>
    //         </ul>
    //       </li>
    //       {user ? (
    //         <li tabindex="0">
    //           <NavLink onClick={logout} to="regi">
    //             Logout
    //           </NavLink>
    //         </li>
    //       ) : (
    //         <li tabindex="0">
    //           <NavLink to="login">Login</NavLink>
    //         </li>
    //       )}
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Nav;
