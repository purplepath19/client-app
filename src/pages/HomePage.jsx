import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      {/* Info Page Link */}
      <Link to="/info" className="info-page-link">
        Info
      </Link>

      <div>
        {/* Link to Main page */}
        <Link to="/main" className="info-page-link">
          Main Page
        </Link>
      </div>
      <div> 
        {/* Link to Main page */}
        <Link to="/resources" className="resources-page-link">
         Resources
        </Link>
      </div>

      {/* Main Image */}
      <div className="main-image">IMG</div>

      {/* Cards here  */}
      <div className="card-container">
        {/* Card ONE */}
        <div className="card"> Card 1</div>
        {/* Card TWO */}
        <div className="card"> Card 2</div>
        {/* Card THREE */}
        <div className="card"> Card 3</div>
      </div>

      {/* Quote and Footer */}
      <p className="quote">QUOTE OR SOMETHING</p>

      {/* Info/description */}

      <p className="info">
        "Amidst the bustling city streets, where the rhythm of life beats in
        sync with the pulse of the metropolis, there exists a quiet corner,
        hidden from the frenetic pace of urban existence. Here, time seems to
        slow down, and the chaos of the outside world fades into a distant
        murmur. In this tranquil sanctuary, one can find solace amidst the
        whispers of the wind and the gentle rustle of leaves. It's a place where
        dreams take flight and where the soul finds refuge from the cacophony of
        everyday life."
      </p>

      <footer className="footer"> @Footer: Link to Github Rep </footer>
    </div>
  );
};

export default HomePage;

{
  /* <video class="homeVideo" src="https://res.cloudinary.com/devlxmp7l/video/upload/v1670700657/video_ynp7ld.mp4" 
autoplay="" loop="" playsinline=""> </video> */
}
