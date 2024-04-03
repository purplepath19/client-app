import { Link } from "react-router-dom";
import myImage from "../assets/img.png";

const HomePage = () => {
  return (
    <div className="home-page">

<h1> </h1>
      
      {/* Main Image */}
      <div className="main-image-container">
     <img className="home-image" src={myImage} alt="img" /> 

  <p className="p-tag"> Unlock the magic of Waldorf </p>

    
     
     <Link to="/info" className="info-page-link"> 
     <button className="learn-more"> Learn More 
     </button>
     </Link>
      

      </div>

        {/* Cards here  */}
        <div className="card-container">
        


        {/* Card TWO: Links to main page */}
        <div className="card">
          <Link to="/main" className="info-page-link">
            Main Page
          </Link>
        </div>


        {/* Card THREE: Links to Resources */}
        {/* <div className="card">
      
        </div> */}
        
      </div>



      {/* Quote and Footer */}
      <p className="quote"> </p>

<div className="container"> 
      <div className="video-container">
        <video controls autoPlay loop className="homeVideo">
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
