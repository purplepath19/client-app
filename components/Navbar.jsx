import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="logo-link">
        {/* Wrap the image with Link */}
        LOGO HERE
        {/* <img src={wImage} alt="Logo" className="w-image" /> */}
      </h2>

      {/* These will be links  */}
      <ul>
        <li className="navbar-link">Register</li>
        <li className="navbar-link">Directory</li>
        <li className="navbar-link">Log in/Sign up</li>
      </ul>
    </div>
  );
};

export default Navbar;
