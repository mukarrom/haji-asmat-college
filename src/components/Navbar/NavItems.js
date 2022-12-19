import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import AboutMenu from './AboutMenu';
import BlogMenu from './BlogMenu';

function NavItems() {
    const [user] = useAuthState(auth);
    return (
        <>
            <li className="hover:bg-[#c82848] rounded-xl">
                <NavLink to="/">Home</NavLink>
            </li>
            <AboutMenu />
            <li className="hover:bg-[#c82848] rounded-xl">
                <NavLink to="/admission">Admission</NavLink>
            </li>
            {/* ==================== menu with submenu ================== */}
            <BlogMenu />
            {/* ---------- */}
            <li className="hover:bg-[#c82848] rounded-xl">
                <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="hover:bg-[#c82848] rounded-xl">
                <NavLink to="/notice">Notice</NavLink>
            </li>
            <li className="hover:bg-[#c82848] rounded-xl">
                <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li className="hover:bg-[#c82848] rounded-xl">
                <NavLink to="/mujib">Mujib Corner</NavLink>
            </li>
        </>
    );
}

export default NavItems;
