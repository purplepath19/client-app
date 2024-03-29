// CODE ALONG CODE

// src/pages/SignupPage.jsx

import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link, useNavigate } from "react-router-dom";
import { axiosDelete, post } from "../services/authService";

function SignUp() {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [name, setName] = useState("");

  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    name: "",
    username: "",
  });

  const [errorMessage, setErrorMessage] = useState(undefined);

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setNewUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    post("/auth/signup", newUser)
      .then((response) => {
        console.log("This is the new user ===>", response.data);
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.response.data.message);
        setNewUser({
          email: "",
          password: "",
          name: "",
          username: "",
        });
      });
  };


  // Delete Handller 
  // const handleDelete = (e) =>{
  //   e.preventDefault();
  //   axiosDelete("/")
  //   .then(()=> {
  //     console.log("Deleted!!!!!!!");
  //   })
  //   .catch(()=>{
  //     console.log("Error with delete react reques", err)
  //   })
  // }


  return (
    <div className="sign-up-page">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <label className="labels">Email:</label>
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleTextChange}
        />

        <label className="labels">Password:</label>
        <input
          type="password"
          name="password"
          value={newUser.password}
          onChange={handleTextChange}
        />

        <label className="labels">Name:</label>
        <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleTextChange}
        />

        <label className="labels">Username:</label>
        <input
          type="text"
          name="username"
          value={newUser.username}
          onChange={handleTextChange}
        />
        <button type="submit" className="submit-button">
          Sign Up
        </button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?  <Link to={"/login"}> Login</Link> </p> 

      {/* Delete button */}
      {/* <p> Delete Account <button type="submit" className="delete-button" onClick={()=>handleDelete}> Delete </button> </p>  */}
    </div>
  );
}

export default SignUp;
