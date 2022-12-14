import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function TestSetting() {
    const [navTitle, setNavTitle] = useState('Upload');
    const testMenu = <>
        <li><Link to="/settings/test" onClick={() => setNavTitle('Upload')}>Upload test</Link></li>
        {/* <li><Link to="/settings/test/update" onClick={() => setNavTitle('Update')}>update test</Link></li> */}
        {/* <li><Link to="/settings/test/delete" onClick={() => setNavTitle('Delete')}>delete test</Link></li> */}
        <li><Link to="/settings/test/preview" onClick={() => setNavTitle('Preview')}>Preview</Link></li>
                     </>;
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div className="w-full navbar bg-base-300">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     className="inline-block w-6 h-6 stroke-current"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 text-3xl text-primary font-bold">{navTitle} Test Settings</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* // <!-- Navbar menu content here --> */}
                                {testMenu}
                            </ul>
                        </div>
                    </div>
                    {/* // <!-- Page content here --> */}
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay" />
                    <ul className="menu p-4 w-80 bg-base-100">
                        {/* // <!-- Sidebar content here --> */}
                        {testMenu}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TestSetting;
