import React from "react";

const Nav = () => {
  return (
    <div class="navbar bg-crimson text-white sticky top-20 z-50">
      <div class="flex justify-evenly">
        <a class="btn btn-ghost normal-case text-xl">Home</a>
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
            <a>About</a>
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
