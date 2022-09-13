import { NavLink } from "react-router-dom";

export const blogMenu = (
        <li tabindex={0}>
          <a>
            Blog
            {/* svg for large screen */}
            <svg
              className="fill-current hidden lg:block"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
            {/* svg for small screen */}
            <svg
                  className="fill-current lg:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
          </a>
          <ul className="p-2 bg-crimson">
            <li>
              <NavLink to="/blog">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/event">Events</NavLink>
            </li>
          </ul>
        </li>
      );
