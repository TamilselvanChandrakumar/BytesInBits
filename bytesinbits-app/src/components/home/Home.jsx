import React from "react";
import "../home/Home.css";
import contactimg from "../../assets/headerimg/contact.png";
import demoimg from "../../assets/headerimg/demo.png";
import globalimg from "../../assets/headerimg/global.png";
import career from "../../assets/companycard/careergrowth.png";
import message from "../../assets/companycard/message.png";
import support from "../../assets/companycard/studentsupport.png";
import vector from "../../assets/companycard/Vector.png";

const Home = () => {
  return (
    <>
      <header className="home_header_container">
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
      </header>
      <section className="company_card_container">
        <div className="company_card_inner">
          <div className="company_card company_card1">
            <h2>Best Qualified Tutors</h2>
            <div className="card_details">
              <p>
                Our instructors have expertise in various programming languages
                and technologies, ensuring our students receive a Quality
                education. It’s essential to have a strong foundation in
                programming languages and technologies
              </p>
            </div>
            <div className="company_card_btn">
              <img src={message} alt=""></img>
              <a href="/">
                {" "}
                Explore more<img id="vectorimg" src={vector} alt=""></img>
              </a>
            </div>
          </div>
          <div className="company_card company_card2">
            <h2>Student Support</h2>
            <div className="card_details">
              <p>
                At our institute, we prioritize student success and provide
                comprehensive support to ensure students have a positive
                learning experience.
              </p>
            </div>
            <div className="company_card_btn">
              <img src={support} alt=""></img>
              <a href="/">
                {" "}
                Explore more
                <img id="vectorimg" src={vector} alt=""></img>
              </a>
            </div>
          </div>
          <div className="company_card company_card3">
            <h2>Career Growth</h2>
            <div className="card_details">
              <p>
                In our institute, we believe in providing students with not only
                quality education but also the necessary resources and support
                for their personal and professional growth.
              </p>
            </div>
            <div className="company_card_btn">
              <img src={career}></img>
              <a href="/">
                {" "}
                Explore more<img id="vectorimg" src={vector} alt=""></img>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
