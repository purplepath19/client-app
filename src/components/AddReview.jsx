import { useState } from "react";
import { post } from "../services/authService";
import StarButton from "./StarButton";

const AddReview = ({ setAdding, schoolId, getDetails }) => {
  const [thisReview, setThisReview] = useState({
    rating: 0,
    comment: "",
  });

  const handleTextChange = (e) => {
    setThisReview((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const setStars = (stars) => {
    setThisReview((prev) => ({ ...prev, rating: stars }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    post(`/reviews/${schoolId}`, thisReview)
      .then((response) => {
        console.log("Review response", response.data);
        setAdding(false);
        getDetails();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="review-form-base">
      <form onSubmit={handleSubmit}>
        <StarButton setStars={setStars} read={false} />

        <label className="review-label" for="comment">Review:</label>
        <textarea
          className="review-text"
          name="comment"
          onChange={handleTextChange}
          value={thisReview.comment}
        />

        <div className="buttons-base">
          <button type="submit">Submit Review</button>
          <button type="button" onClick={() => setAdding(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
