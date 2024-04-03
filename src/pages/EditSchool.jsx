import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { put, get, axiosDelete } from '../services/authService'
import { fileChange } from '../services/photoService'
import LocationForm from '../components/LocationForm'

const EditSchool = () => {
    const [thisSchool, setThisSchool] = useState({
        address: "",
        latitude: 0,
        longitude: 0,
        name: "",
        description: "",
        photo: ""
    })

    const [disabled, setDisabled ] = useState(false)

    const { schoolId } = useParams()

    const navigate = useNavigate()

    const handleTextChange = (e) => {
        setThisSchool((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handlePhotoChange = (e) => {

        setDisabled(true)

        fileChange(e)
            .then((response) => {
                setThisSchool((prev) => ({...prev, photo: response.data.image}))
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

        put(`/schools/${thisSchool._id}`, thisSchool)
            .then((response) => {
                console.log("this is the new school===>", response.data)
                navigate('/schools')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleDelete = () => {
        axiosDelete(`/schools/${schoolId}`)
            .then((response) => {
                console.log("This is the deleted School", response.data)
                navigate('/schools')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        get(`/schools/${schoolId}`)
            .then((response) => {
                console.log("Found school --->", response.data)
                setThisSchool(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [schoolId])


  return (
    <div>
        <h1>Edit School</h1>

        <form onSubmit={handleSubmit}>

            <label>
                Name
                <input type='text' onChange={handleTextChange} name='name' value={thisSchool.name} />
            </label>

            <LocationForm setNewSchool={setThisSchool} />

            <label>
                Photo
                <input type='file' onChange={handlePhotoChange} />
            </label>
            <label>
                Description
                <input type='text' onChange={handleTextChange} name='description' value={thisSchool.description}/>
            </label>


            <button disable={disabled} type='submit'>Edit School</button>
        </form>

        <button onClick={handleDelete}>Delete School</button>
    </div>
  )
}

export default EditSchool