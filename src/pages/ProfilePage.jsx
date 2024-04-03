import { Link } from "react-router-dom";
import profileImage from "../assets/profile-img.png"
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const ProfilePage = () => {

    const { user } = useContext(AuthContext)

return (
    <div> 
<h1> Profile Page </h1>

{
    user &&
    <>
       <img src={user.profileImage} className="profile-image" alt="image-icon" /> 
        <h2>Name: {user.name}</h2>
        <h2> Username: {user.username}</h2>
        <p> Location {user.location}</p>
        <p>Bio: {user.bio}</p>
    
    </>
}

<button className="update-profile-button"> 
    <Link to='/profile/update'>Update Profile</Link>
    </button>


{/* <form className="profile-form"> 

<label for="fullname">Full Name:</label>
<input type="text" id="fullname" name="fullname" className="name-input"></input>

<label for="text-area"> Text area </label>

    </form >  */}

    {/* <button type="submit">Sign Out</button> */}

    </div>
)
}

export default ProfilePage;