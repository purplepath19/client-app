
import { Rating } from 'react-simple-star-rating';

const StarButtonAverage = ({ overallRating }) => {
 
      return (
        <div>
          <Rating
            size={42}
            emptyStyle={{ display: "flex" }}
            fillStyle={{ display: "-webkit-inline-box" }}
            initialValue={overallRating}
            readonly={true} //means that the rating cannot be changed
            allowFraction={true}
          //   className="flex items-center mb-1"
          />
        </div>
      )
    };
  
  
  export default StarButtonAverage