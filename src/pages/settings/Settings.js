import React from 'react';
import {Link, NavLink, Outlet} from 'react-router-dom';

function Settings() {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
      <div className="drawer-content">
        {/* <h2 className="text-4xl text-purple-700 font-bold">Dashboard</h2> */}
        <Outlet/>
        {/* <!-- Page content here --> */}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"/>
        <ul className="menu p-4 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li className="mt-10">
            <Link to="/settings">Users</Link>
          </li>
          <li>
            <NavLink to="/settings/notice/add">Add Notice</NavLink>
          </li>
          <li>
            <NavLink to="/settings/gov_body/add">Add Gov_Body</NavLink>
          </li>
          <li>
            <NavLink to="/settings/gallery/add">Add Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/settings/blog/add">Add Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/settings/event/add">Add Event</NavLink>
          </li>
          {/*<li>*/}
          {/*    <Link to="/settings/test">test</Link>*/}
          {/*</li>*/}

        </ul>
      </div>
    </div>
  );
}

export default Settings;
