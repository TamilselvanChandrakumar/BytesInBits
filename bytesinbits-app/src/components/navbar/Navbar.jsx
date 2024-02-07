import React, { useState } from "react";
import { MdDensityMedium } from "react-icons/md";
import "../navbar/Navbar.css";
import companylogo from "../../assets/logo/image 1.png";
const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  // sidebar
  const handleSideBar = () => {
    setSideBar(!sideBar);
  };
  return (
    <>
      <div className="navbar_container">
        <div className="navbar_inner">
          <nav className="navbar">
            <div className="navbar_brand">
              <img src={companylogo}></img>
            </div>
            <div className="navbar_toggler" onClick={handleSideBar}>
              <MdDensityMedium></MdDensityMedium>
            </div>
            <div className={`menu_items ${sideBar === true ? "active" : null}`}>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Courses</a>
                </li>
                <li>
                  <a href="/">Placements</a>
                </li>
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
