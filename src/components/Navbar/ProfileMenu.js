import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import React from 'react';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Loading';

function ProfileMenu() {
    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    if (user && adminLoading) return <Loading />;
    const handleLogOut = () => {
        localStorage.removeItem('accessToken');
        signOut(auth);
    };
    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img
                        src={
                            user?.photoURL ||
                            'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1662389822~exp=1662390422~hmac=9a536effe4040efa033364ea9f3fb619491d07cde39926fd0deae7a5b23e55f7'
                        }
                        alt=""
                    />
                </div>
            </label>
            <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
            >
                {/* <li> */}
                {/*  <NavLink to="profile" className="justify-between"> */}
                {/*    Profile */}
                {/*    <span className="badge">New</span> */}
                {/*  </NavLink> */}
                {/* </li> */}
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                {
                    admin === true ?
                        <li>
                            <NavLink to="/settings">Settings</NavLink>
                        </li> : null
                }
                <li>
                    <NavLink to="login" onClick={handleLogOut}>
                        Logout
                    </NavLink>
                </li>
                <li className="bg-purple-500">
                    <h3 className="text-center font-bold leading-1">
                        {user?.displayName}
                    </h3>
                    <p className="text-xs mb-4">{user?.email}</p>
                </li>
            </ul>
        </div>
    );
}

export default ProfileMenu;
