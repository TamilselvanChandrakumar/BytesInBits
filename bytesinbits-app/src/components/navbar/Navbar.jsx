import React, { useEffect, useState } from "react";
import { MdDensityMedium } from "react-icons/md";
import "../navbar/Navbar.css";
import companylogo from "../../assets/logo/image 1.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  const [sticky, setSticky] = useState(false);
  // sidebar
  const handleSideBar = () => {
    setSideBar(!sideBar);
  };
  // hendle scrollbar
  useEffect(() => {
    const handleScrollbar = () => {
      setSticky(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScrollbar);
    return () => {
      window.removeEventListener("scroll", handleScrollbar);
    };
  });
  const moveToTop = () => {
    setSideBar(!sideBar);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      <div className={`navbar_container ${sticky ? "sticky" : null}`}>
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
                  <Link to="/" onClick={moveToTop}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/courses" onClick={moveToTop}>
                    Courses
                  </Link>
                </li>
                <li>
                  <Link to="/placements" onClick={moveToTop}>
                    Placements
                  </Link>
                </li>
                <li>
                  <Link to="/aboutus" onClick={moveToTop}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/blog" onClick={moveToTop}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contactus" onClick={moveToTop}>
                    Contact Us
                  </Link>
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
