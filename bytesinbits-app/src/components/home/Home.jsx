import React from "react";
import "../home/Home.css";
import contactimg from "../../assets/headerimg/contact.png";
import demoimg from "../../assets/headerimg/demo.png";
import globalimg from "../../assets/headerimg/global.png";

const Home = () => {
  return (
    <div className="home_header_container">
      <div className="home_header_inner">
        <div className="left_header">
          <div className="header_title">
            <h1>Learn.</h1>
            <h1>Build. </h1>
            <h1>Get Job</h1>
          </div>
          <div className="header_content">
            <p>
              50,000+ uplifted through our hybrid classroom & online training,
            </p>
            <p>enriched by real-time projects and job support.</p>
          </div>
          <div className="header_btn">
            <button className="header_demobtn">
              {" "}
              <img src={demoimg} alt="" />
              Join Free Demo
            </button>
            <button className="header_contactbtn">
              {" "}
              <img src={contactimg} alt=""></img>Contact Course Advisor
            </button>
          </div>
        </div>
        <div className="right_header">
          <img src={globalimg} alt="globalimg"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
