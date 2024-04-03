import React from "react";
import classroomImg from "../assets/works.png";
import { Link } from "react-router-dom";

const InfoPage = () => {
  return (

<div className="info-main-container"> 

    <div className="info-page-container">
      <h1 className="page-title">  </h1>

      {/* Image */}
      <div className="info-image-container">
        <img src={classroomImg} className="info-image" alt="myImg" />
      </div>

      <p className="paragraph">
      Waldorf education emphasizes holistic development, 
      fostering creativity, critical thinking, and social 
      responsibility. By integrating arts, movement, and academic subjects, 
      Waldorf nurtures students' individuality and fosters a lifelong love for
       learning. Through a balanced approach that values both academic and 
       emotional intelligence, Waldorf education prepares students to navigate 
       an ever-changing world with confidence and compassion.
      </p>

      <div className="info-resources-container">
        <Link to="/resources" className="resources-page-link">
          Resources
        </Link>
      </div>
    </div>
    </div>
  );
};

export default InfoPage;
