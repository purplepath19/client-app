import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react' 
import { AuthContext } from '../context/auth.context'
import { get } from '../services/authService'
import MapContainer from '../components/MapContainer'
import './SchoolPage.css'

const SchoolDetails = () => {

    const [thisSchool, setThisSchool] = useState(null)

    const { schoolId } = useParams()

    const { user } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleEditSchool = () => {
        navigate(`/edit-school/${schoolId}`)
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
        {thisSchool &&

        <div>

            <h2>{thisSchool.name}</h2>



            {
                user && thisSchool.user == user._id &&

                <div>

                    <button
                      className="edit-button"
                      onClick={handleEditSchool}
                    >
                      Edit
                    </button>

                </div>
            }

            <MapContainer lat={thisSchool.latitude} lng={thisSchool.longitude} />

        </div>
        
        }
    </div>
  )
}

export default SchoolDetails