/* eslint-disable no-unused-vars */
import { useContext } from "react";
import blogicon from "../../../assets/images/logo.png"
import { AuthContext } from "../../../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("successfully sign out");
      })
      .catch((error) => {
        console.log("failed to sign out .stay here");
      });
  };

  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      {user ? (
        <>
          {" "}
          <li onClick={handleSignOut}>Sign Out</li>{" "}
        </>
      ) : (
        <>
          {" "}
          <li>
            {" "}
            <Link to="/signIn">SignIn</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </>
      )}

      <li>
        <NavLink to="/users">Users</NavLink>
      </li>
      <li>
        <NavLink to="/contactUs">Contact Us</NavLink>
      </li>

      <li>
        <details>
          <summary>Pages</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black max-w-screen-xl text-white shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-opacity-30 bg-black rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <img src={blogicon} alt="" />
          <a className="btn btn-ghost text-xl">Wander log</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <li>
            <NavLink className="btn" to="/addBlog">
              Post A Blog
            </NavLink>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
