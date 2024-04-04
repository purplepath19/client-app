import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom/dist"
import { AuthContext } from "../context/auth.context"
import { post, put } from '../services/authService'

const ProfileUpdate = () => {

    const [thisUser, setThisUser] = useState(null)

    const { user, setUser } = useContext(AuthContext)

    const navigate = useNavigate()
    
    const handleTextChange = (e) => {
        setThisUser((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handlePhotoChange = () => {
        console.log("Changing photo")
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        put(`/users/${thisUser.username}`, thisUser)
            .then((response) => {
                
                const newUser = { _id, name, username, email } = response.data;
                console.log("this is the udpated user ===>", response.data)
                // setThisUser(newUser);
                setUser(newUser);
                navigate('/profile')
            })
            .catch((err) => {
                console.log(err)
            })
    }
     
    useEffect(() => {

        if (user) {
            setThisUser(user)
        }
    }, [user])


  return (
    <div>
        <h1>Update Profile</h1>

        {
            thisUser && 

            <form className="profile-update-form" onSubmit={handleSubmit}>

                <label className="profile-update-label">
                    Name:
                    <input className="profile-update-input" type='text' onChange={handleTextChange} name='name' value={thisUser.name} />
                </label>
                <label className="profile-update-label">
                    Username:
                    <input className="profile-update-input" type='text' onChange={handleTextChange} name="username" value={thisUser.username} />
                </label>
                <label className="profile-update-label">
                    Location:
                    <input className="profile-update-input" type='text' onChange={handleTextChange} name='location' value={thisUser.location} />
                </label>
                <label className="profile-update-label">
                    Bio:
                    <input className="profile-update-input" type='text' onChange={handleTextChange} name='bio' value={thisUser.bio} />
                </label>

                <label className="profile-update-label">
                    Photo:
                    <input className="profile-update-input" type='file' onChange={handlePhotoChange} name='profileImage' />
                </label>


                <button type='submit'>Update Profile</button>


            </form>

        }
        
    </div>
  )
}

export default ProfileUpdate;