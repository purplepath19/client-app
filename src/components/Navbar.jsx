import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo Link to Home */}
      <h2 className="logo-link">
        {/* Wrap the image with Link */}
        <Link to="/" className="logo-nav">
          LOGO HERE/HOME
        </Link>

        {/* <img src={wImage} alt="Logo" className="w-image" /> */}
      </h2>

      {/* Links to Login and Signup  */}
      <ul>
        <Link to="/login" className="login-button-link"> 
        <li className="navbar-link">Login</li>
        </Link>
        {/* Links to Sign-up Login form */}
        <Link to="/signup" className="sign-up-button-link">
          <li className="navbar-link">Sign up</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
