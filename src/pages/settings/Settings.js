import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Settings() {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <h2 className="text-4xl text-purple-700 font-bold">Dashboard</h2> */}
                <Outlet />
                {/* <!-- Page content here --> */}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay" />
                <ul className="menu p-4 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li className="mt-10">
                        <Link to="/settings">Profile</Link>
                    </li>
                    <li>
                        <Link to="/settings/notice">Notice</Link>
                    </li>
                    <li>
                        <Link to="/settings/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/settings/articles">Articles</Link>
                    </li>

                    <li>
                        <Link to="/settings/users">Users</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Settings;
