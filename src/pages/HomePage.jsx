// import classroomImg from "../src/assets/class.png";

const HomePage = () => {
  return (
    <div>
      <div className="main-image">
        IMAGE LOOP HERE
        {/* video looped */}
        {/* <img src={classroomImg} className="classroom-image" alt="img-here" /> */}
      </div>

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

      <footer className="footer"> @Footer: Link to Github Rep </footer>
    </div>
  );
};

export default HomePage;

{
  /* <video class="homeVideo" src="https://res.cloudinary.com/devlxmp7l/video/upload/v1670700657/video_ynp7ld.mp4" 
autoplay="" loop="" playsinline=""> </video> */
}
