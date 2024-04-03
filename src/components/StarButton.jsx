import { useState } from "react";
import { Rating } from 'react-simple-star-rating';

const StarButton = ({ setStars, stars, read }) => {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    setStars(rate);
    // Other logic
  };

  return (
    <div>
      <Rating
        size={20}
        md:size={30}
        emptyStyle={{ display: "flex" }}
        fillStyle={{ display: "-webkit-inline-box" }}
        readonly={read}
        onClick={handleRating}
        initialValue={stars || rating} // Use the rating state as the initial value
      >
      </Rating>
    </div>
  );
}

export default StarButton;