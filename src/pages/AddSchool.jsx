import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { post } from '../services/authService'
import { fileChange } from '../services/photoService'
import LocationForm from '../components/LocationForm'

const AddSchool = () => {

    const [newSchool, setNewSchool] = useState({
        address: "",
        latitude: 0,
        longitude: 0,
        name: "",
        description: "",
        photo: ""
    })

    const [disabled, setDisabled ] = useState(false)

    const navigate = useNavigate()

    const handleTextChange = (e) => {
        setNewSchool((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handlePhotoChange = (e) => {

        setDisabled(true)

        fileChange(e)
            .then((response) => {
                setNewSchool((prev) => ({...prev, photo: response.data.image}))
                setDisabled(false)
            })
            .catch((err) => {
                console.log(err)
                setDisabled(false)
            })


        console.log("Changing photo...")
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        post('/schools', newSchool)
            .then((response) => {
                console.log("this is the new school===>", response.data)
                navigate('/schools')
            })
            .catch((err) => {
                console.log(err)
            })
    }

  return (
    <div>
        <h1>Add a Waldorf School</h1>

        <form onSubmit={handleSubmit}>

            <label>
                Name
                <input type='text' onChange={handleTextChange} name='name' value={newSchool.name} />
            </label>

            <LocationForm setNewSchool={setNewSchool} />

            <label>
                Photo
                <input type='file' onChange={handlePhotoChange} />
            </label>
            <label>
                Description
                <input type='text' onChange={handleTextChange} name='description' value={newSchool.description}/>
            </label>


            <button disable={disabled} type='submit'>Add School</button>
        </form>
    </div>
  )
}

export default AddSchool
