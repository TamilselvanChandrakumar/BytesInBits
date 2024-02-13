import React from "react";
import "../../components/aboutus/Aboutus.css";
import aboutusheader from "../../assets/aboutus/aboutusheader.png";

import { Link, Outlet } from "react-router-dom";
const Aboutus = () => {
  return (
    <>
      <div className="aboutus_header">
        <div className="aboutus_header_image">
          <img src={aboutusheader} alt=""></img>
        </div>
        <div className="aboutus_header_content">
          <p>
            Empowering Journeys,<span>Inspiring Connections</span>{" "}
          </p>
          <p>
            Welcome to Our <span> Narrative of Excellence.</span>
          </p>
        </div>
        <div className="aboutus_footer_content">
          {" "}
          <p>About Business</p>
        </div>
      </div>
      <section className="aboutus_nav_container">
        <nav className="aboutus_nav_inner">
          <ul>
            <li>
              {" "}
              <Link to="admission">Admission</Link>
            </li>
            <li>
              {" "}
              <Link to="founder">Founder & Chairman</Link>
            </li>
            <li>
              <Link to="aboutbytes">About Bytes in bits</Link>
            </li>
          </ul>
        </nav>
      </section>
      <Outlet></Outlet>
    </>
  );
};

export default Aboutus;
