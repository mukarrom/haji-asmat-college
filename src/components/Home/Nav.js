import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div class="navbar bg-crimson text-white sticky top-20 z-50">
      <div class="flex justify-evenly">
        <NavLink to="/">
          <p class="p-2 text-xl rounded-2xl">Home</p>
        </NavLink>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li tabindex="0">
            <NavLink to="/admitform1">Admission</NavLink>
            <ul class="p-2  bg-crimson text-white">
              <li>
                <NavLink to="/admitform1">Admission 1</NavLink>
              </li>
              <li>
                <NavLink to="/admitform2">Admission 2</NavLink>
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
          <li tabindex="0">
            <a>Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
