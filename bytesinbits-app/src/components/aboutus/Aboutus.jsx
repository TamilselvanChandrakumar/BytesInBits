import React from "react";
import "../../components/aboutus/Aboutus.css";
import aboutusheader from "../../assets/aboutus/aboutusheader.png";
const Aboutus = () => {
  return (
    <>
      <div className="aboutus_header">
        <div className="aboutus_header_image">
          <img src={aboutusheader} alt=""></img>
        </div>
        <div className="aboutus_header_content">
          <p>Empowering Journeys, Inspiring Connections</p>
          <p>Welcome to Our Narrative of Excellence</p>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
