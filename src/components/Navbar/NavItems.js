import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import { blogMenu } from "./BlogMenu";

const NavItems = () => {
  const [user] = useAuthState(auth);
  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/admission">Admission</NavLink>
      </li>
      <li>
        <NavLink to="/event">Events & news</NavLink>
      </li>
      {/* menu with submenu */}
      {blogMenu}
      {/* ---------- */}
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/notice">Notice</NavLink>
      </li>
      <li>
        <NavLink to="/syllabus">Syllabus</NavLink>
      </li>
      <li>
        <NavLink to="/calender">Calendar</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/mujib">Mujib Corner</NavLink>
      </li>
      {!user && (
        <li>
          <NavLink to="login">Login</NavLink>
        </li>
      )}
    </>
  );
 
  return [navItems];
};

export default NavItems;
