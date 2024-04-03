import { Link } from "react-router-dom";
// import {homeImage} from "../assets/image.png";

const HomePage = () => {
  return (
    <div>


      
      {/* Main Image */}
      <div className="main-image">
      {/* <img src={homeImage} alt="img" /> */}
      </div>

      {/* Cards here  */}
      <div className="card-container">
        {/* Card ONE: Links to Info */}
        <div className="card">
          <Link to="/info" className="info-page-link">
            Info
          </Link>
        </div>

        {/* Card TWO: Links to main page */}
        <div className="card">
          <Link to="/main" className="info-page-link">
            Main Page
          </Link>
        </div>
        {/* Card THREE: Links to Resources */}
        <div className="card">
          <Link to="/resources" className="resources-page-link">
            Resources
          </Link>
        </div>
      </div>

      {/* Quote and Footer */}
      <p className="quote">Name</p>

<div className="container"> 
      <div className="video-container">
        <video controls autoplay loop className="homeVideo">
          <source
            src="https://res.cloudinary.com/dplxry5mi/video/upload/qcjlv9mfbxqni5sdlrni.mov"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Info/description */}

      <div className="info-container">
        <p className="info">
       
        
        "Our highest endeavor must be to develop free human beings who are able, of themselves, to impart purpose and direction to their lives.
        "
        </p>

        <p className="steiner"> 
          - Rudolf Steiner
        </p>

      </div>
      </div>
      <footer className="footer"> @Footer: Link to Github Rep </footer>
    </div>
  );
};

export default HomePage;
