import { useState } from 'react'
import { post } from '../services/authService'
import StarButton from './StarButton'


const AddReview = ({ setAdding, schoolId, getDetails }) => {


    const [thisReview, setThisReview] = useState({
        rating: 0,
        comment: ""
    })


    const handleTextChange = (e) => {
        setThisReview((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const setStars = (stars) => {
        setThisReview((prev) => ({...prev, rating: stars}))
    }
 
    const handleSubmit = (e) => {
        e.preventDefault()

        post(`/reviews/${schoolId}`, thisReview)
            .then((response) => {
                console.log("Review response", response.data)
                setAdding(false)
                getDetails()
            })
            .catch((err) => {
                console.log(err)
            })

    }



  return (
    <div>
        <form onSubmit={handleSubmit}>

        <StarButton setStars={setStars} read={false} />

        <label>
            Review:
            <input type='text' name="comment" onChange={handleTextChange} value={thisReview.comment}  />
        </label>

        <button>Submit Review</button>

        </form>

        <button onClick={() => setAdding(false)}>Cancel</button>

    </div>
  )
}

export default AddReview