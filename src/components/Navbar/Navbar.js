import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/asmat-logo.jpeg";
import auth from "../../firebase.init";
import NavItems from "./NavItems";
import { notification } from "./Notification";
import ProfileMenu from "./ProfileMenu";
import { searchIcon } from "./SearchMenu";
import SearchModal from "./SearchModal";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const [navItems] = NavItems();
  const [profileIcon] = ProfileMenu();

  useEffect(() => {
    if (user) {
      // navigate("/");
    }
  }, [user, navigate]);

  return (
    // ---------------------- New Navbar -------------------------------------
    <div className="navbar bg-primary  text-white z-50 sticky top-0">
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
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
          >
            {/* Menu For Mobile */}
            {navItems}
          </ul>
        </div>
        {/* ==============> Logo <============== */}
        <Link
          to="/"
          className="hidden lg:block absolute top-0 left-[50%] lg:left-0 h-[120px]"
        >
          <img className="w-32 rounded-b-full shadow-md" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {/* ==============> Menu for lg Screen <============== */}
          {navItems}
        </ul>
      </div>
      {/* ---------------
            NavBar End    
          ---------------- */}
      <div className="navbar-end">
        {/* search */}
        {searchIcon}
        <SearchModal/>
        {/* notification */}
        {notification}
        {/* profile */}
        {profileIcon}
      </div>
    </div>
  );
};

export default Navbar;
