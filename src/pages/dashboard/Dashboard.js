import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-4xl text-purple-700 font-bold">Dashboard</h2>
        <Outlet />
        {/* <!-- Page content here --> */}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay" />
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">Sidebar Item 1</Link>
          </li>
          <li>
            <Link to="/dashboard/review">Sidebar Item 2</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
