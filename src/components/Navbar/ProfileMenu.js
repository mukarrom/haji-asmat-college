import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const ProfileMenu = () => {
  const [user] = useAuthState(auth);

  const profile = user && (
  <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img
          src={
                    user?.photoURL
                    || 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1662389822~exp=1662390422~hmac=9a536effe4040efa033364ea9f3fb619491d07cde39926fd0deae7a5b23e55f7'
                  }
          alt=""
        />
      </div>
    </label>
    <ul
      tabIndex={0}
      className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
    >
      <li>
        <NavLink to="profile" className="justify-between">
          Profile
          <span className="badge">New</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="setting">Settings</NavLink>
      </li>
      <li>
        <NavLink to="regi" onClick={() => signOut(auth)}>
          Logout
        </NavLink>
      </li>
    </ul>
  </div>
  );

  return [profile];
};

export default ProfileMenu;
