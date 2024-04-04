import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { get } from "../services/authService";
import StarButton from "../components/StarButton";
import StarButtonAverage from "../components/StarButtonAverage";
import MapContainer from "../components/MapContainer";
import AddReview from "../components/AddReview";
import { returnRelativeTime } from "../services/time";
import "./SchoolDetails.css";

const SchoolDetails = () => {
  const [thisSchool, setThisSchool] = useState(null);
  const [average, setAverage] = useState(0);

  const [adding, setAdding] = useState(false);

  const { schoolId } = useParams();

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleEditSchool = () => {
    navigate(`/edit-school/${schoolId}`);
  };

  const getDetails = () => {
    get(`/schools/${schoolId}`)
      .then((response) => {
        console.log("Found school --->", response.data);
        setThisSchool(response.data);
        let theseReviews = response.data.reviews.reduce(
          (acc, curr) => acc + curr.rating,
          0
        );
        let reviewLength = response.data.reviews.length;
        // console.log("These are the reviews", response.data.reviews.reduce((acc, curr) => acc + curr.rating, 0))
        // let thisAverage = response.data.reviews.reduce((acc, curr) => acc + curr.rating, 0)
        // console.log("This is the average ===>", thisAverage)
        if (reviewLength > 0) {
          let thisAverage = theseReviews / reviewLength;

          setAverage(thisAverage);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetails();
  }, [schoolId]);

  return (
    <div>
      {thisSchool && (
        <div className="details-base">
          <h2>{thisSchool.name}</h2>

          <StarButtonAverage overallRating={average} />

          {user && thisSchool.user == user._id && (
            <div>
              <button className="edit-button" onClick={handleEditSchool}>
                Edit
              </button>
            </div>
          )}
          <MapContainer lat={thisSchool.latitude} lng={thisSchool.longitude} />

          {!adding && (
            <div className="add-review-base"><button onClick={() => setAdding(true)}>Add a review</button></div>
          )}

          {adding && (
            <AddReview
              setAdding={setAdding}
              schoolId={thisSchool._id}
              getDetails={getDetails}
            />
          )}

          {thisSchool.reviews.length > 0 && (
            <div className="reviews-base">
              {thisSchool.reviews
                .map((review) => {
                  return (
                    <div className="review-card-base">
                      <StarButton stars={review.rating} read={true} />
                      <h3>{review.comment}</h3>
                      <p>- {review.author.username}</p>
                      <p>{returnRelativeTime(review.createdAt)}</p>
                    </div>
                  );
                })
                .reverse()}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SchoolDetails;
