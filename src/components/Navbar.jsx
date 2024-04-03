import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import logoImage from "../assets/logo.png"; 


const Navbar = () => {
  //pass a prop from auth.context to wrap it
  const { isLoggedIn, logOutUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      {/* Logo Link to Home */}
      <h2 className="logo-link">
        {/* Wrap the image with Link */}
        <Link to="/" className="logo-nav">
        
          {/* Logo */}
        <img src={logoImage} alt="Logo" className="w-image" /> 
      
        </Link>
      </h2>

      <h2 className="main-name"> WaldorfWise </h2>

      <ul>
          <Link to='/schools'>    
            <li className="navbar-link">See Waldorf Schools</li>
          </Link>
      {!isLoggedIn && (
        <>
          <Link to="/login" className="login-button-link">
            <li className="navbar-link">Login</li>
          </Link>

          <Link to="/signup" className="sign-up-button-link">
            <li className="navbar-link">Sign up</li>
          </Link>

        </>  
          )}

      {
        isLoggedIn &&

        <>
          <Link to='/add-school'>    
            <li className="navbar-link">Add A School</li>
          </Link>
          <li className="navbar-link"><button onClick={() => logOutUser()}>Logout</button></li>
        
        </>
        

        
      }

      </ul>
  
    </div>
  );
};

export default Navbar;
