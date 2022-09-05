import { signOut } from "firebase/auth";
import React from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Nav = () => {
  const navigete = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };

  useEffect(() => {
    if (user) {
      navigete("/");
    }
  }, []);
  return (
    <div class="navbar w-full mx-auto bg-crimson text-white sticky top-20 z-50">
      <div class="flex 1">
        <NavLink to="/">
          <a class="p-2 text-xl rounded-2xl">Home</a>
        </NavLink>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li tabindex="0">
            <a>Admission</a>
            <ul class="p-2  bg-crimson text-white">
              <li>
                <a>Admission 1</a>
              </li>
              <li>
                <a>Admission 2</a>
              </li>
            </ul>
          </li>
          <li tabindex="0">
            <a>News and Events</a>
            <ul class="p-2  bg-crimson text-white">
              <li>
                <a>News 1</a>
              </li>
              <li>
                <a>News 2</a>
              </li>
            </ul>
          </li>
          <li tabindex="0">
            <a>Notice Panel</a>
            <ul class="p-2  bg-crimson text-white">
              <li>
                <a>Notice 1</a>
              </li>
              <li>
                <a>Notice 2</a>
              </li>
            </ul>
          </li>
          <li tabindex="0">
            <a>Syllabus</a>
            <ul class="p-2  bg-crimson text-white">
              <li>
                <a>Syllabus 1</a>
              </li>
              <li>
                <a>Syllabus 2</a>
              </li>
            </ul>
          </li>
          <li tabindex="0">
            <a>Teacher List</a>
            <ul class="p-2  bg-crimson text-white">
              <li>
                <a>Teacher 1</a>
              </li>
              <li>
                <a>Teacher 2</a>
              </li>
            </ul>
          </li>
          <li tabindex="0">
            <a>Calender</a>
          </li>
          <li tabindex="0">
            <a>Contact</a>
            <ul class="p-2  bg-crimson text-white">
              <li>
                <a>Contact 1</a>
              </li>
              <li>
                <a>Contact 2</a>
              </li>
            </ul>
          </li>
          <li tabindex="0">
            <a>Bangabandhu Corner</a>
            <ul class="p-2  bg-crimson text-white">
              <li>
                <a>Corner 1</a>
              </li>
              <li>
                <a>Corner 2</a>
              </li>
            </ul>
          </li>
          <li tabindex="0">
            <NavLink to="about">About</NavLink>
          </li>
          <li tabindex="0">
            <a>Admin Panel</a>
            <ul class="p-2  bg-crimson text-white">
              <li>
                <a>Panel 1</a>
              </li>
              <li>
                <a>Panel 2</a>
              </li>
            </ul>
          </li>
          {user ? (
            <li tabindex="0">
              <NavLink onClick={logout} to="regi">
                Logout
              </NavLink>
            </li>
          ) : (
            <li tabindex="0">
              <NavLink to="login">Login</NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
