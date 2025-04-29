import React from "react";
import "../App.css";
import { useNavigate, NavLink } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  //navigate to login
  const handleLogIn = () => {
    navigate("/LogIn");
  };
  //naviget to sign in
  const handleSignIn = () => {
    navigate("/SignIn");
  };

  return (
    <>
      <nav className="bg-black grid grid-cols-4">
        <div className="col-span-1">
          <img src="/small-logo.png" alt="logo" className="w-32 ml-20" />
        </div>
        <div className="justify-between items-center h-14 w-xl fle col-span-2 pt-8 ml-16">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold px-4 IoT"
                : "nav-item nav-navbar text-white font-semibold px-4"
            }
            to="/Products"
          >
            Product
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold px-4 IoT"
                : "nav-item nav-navbar text-white font-semibold px-4"
            }
            to="/UseCases"
          >
            Use Cases
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold px-4 IoT"
                : "nav-item nav-navbar text-white font-semibold px-4"
            }
            to="/Developers"
          >
            Developer
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold px-4 IoT"
                : "nav-item nav-navbar text-white font-semibold px-4"
            }
            to="/Pricing"
          >
            Pricing
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold px-4 IoT"
                : "nav-item nav-navbar text-white font-semibold px-4"
            }
            to="/Jobs"
          >
            Jobs
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold px-4 IoT"
                : "nav-item nav-navbar text-white font-semibold px-4"
            }
            to="/Company"
          >
            Company
          </NavLink>
        </div>
        <div className="col-span-1 justify-between items-center ml-14 mt-7 h-16">
          <button
            onClick={handleSignIn}
            className="nav-item nav-navbar text-white font-semibold mx-3"
          >
            Sign in
          </button>
          <button
            onClick={handleLogIn}
            className="nav-item nav-navbar text-white font-semibold bg-neutral-700 rounded-xs px-3 py-1 mx-3"
          >
            Log in
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
