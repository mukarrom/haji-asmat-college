import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import AboutMenu from './AboutMenu';
import BlogMenu from './BlogMenu';

const NavItems = () => {
  const [user] = useAuthState(auth);
  const [blogMenu] = BlogMenu();
  const [aboutMenu] = AboutMenu();
  const navItems = (
    <>
      <li className="hover:bg-[#c82848] rounded-xl">
        <NavLink to="/">Home</NavLink>
      </li>
      {aboutMenu}
      <li className="hover:bg-[#c82848] rounded-xl">
        <NavLink to="/admission">Admission</NavLink>
      </li>
      {/* menu with submenu */}
      {blogMenu}
      {/* ---------- */}
      <li className="hover:bg-[#c82848] rounded-xl">
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li className="hover:bg-[#c82848] rounded-xl">
        <NavLink to="/notice">Notice</NavLink>
      </li>
      {/* <li>
        <NavLink to="/syllabus">Syllabus</NavLink>
      </li>
      <li>
        <NavLink to="/calender">Calendar</NavLink>
      </li> */}

      <li className="hover:bg-[#c82848] rounded-xl">
        <NavLink to="/mujib">Mujib Corner</NavLink>
      </li>
      {!user && (
      <li className="hover:bg-[#c82848] rounded-xl">
        <NavLink to="login">Login</NavLink>
      </li>
      )}
    </>
  );

  return [navItems];
};

export default NavItems;
