// src/pages/LoginPage.jsx

import { useState, useContext } from "react";

import { AuthContext } from "../context/auth.context";

import { Link, useNavigate } from "react-router-dom";

import { post } from "../services/authService";

function LoginPage() {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const [thisUser, setThisUser] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(undefined);

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  //   const handleEmail = (e) => setEmail(e.target.value);
  //   const handlePassword = (e) => setPassword(e.target.value);

  const handleTextChange = (e) => {
    setThisUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    post("/auth/login", thisUser)
      .then((response) => {
        console.log("Login response ===>", response.data, thisUser);
        storeToken(response.data.authToken);
        authenticateUser();
        navigate(`/profile`);
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="login-page">



      <div className="login-container"> 
      <h1>Login</h1>

      <form onSubmit={handleLoginSubmit}>
        <label></label>
        <input className="inputs"
        placeholder="Email"
          type="email"
          name="email"
          value={thisUser.email}
          onChange={handleTextChange}
        />

        <label></label>
        <input className="inputs"
        placeholder="Password"
          type="password"
          name="password"
          value={thisUser.password}
          onChange={handleTextChange}
        />

        <button type="submit">Login</button>
        {/* Link to profile page when logged in  */}
        <Link to='/profile'> </Link>
     
        
      <p className="acct-tags">Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link>
        
        
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

</div>
      
    </div>
  );
}

export default LoginPage;