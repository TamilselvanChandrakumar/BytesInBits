import React from "react";
import "../../components/footer/Footer.css";
import footerworld from "../../assets/footerimg/footerworld.png";
const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_inner">
        <div className="footer_content_container">
          <div className="footer_content">
            <h1>Have a Good Web </h1>
            <h1>
              <span className="design_text"> Designe</span> Today
            </h1>
            <p>
              High level experience in web design and development knowledge,
              producing quality work.
            </p>
            <button>Get started</button>
          </div>
          <div className="footer_img">
            <img src={footerworld} alt=""></img>
          </div>
        </div>
        <div className="footer_links">
          <div className="product_links"></div>
          <div className="usecases_links"></div>
          <div className="resources_links"></div>
          <div className="company_links"></div>
        </div>
        <div className="footer_horizontal"></div>
        <div className="footer_social">
          <div className="footer_social_linls"></div>
          <div className="footer_signup_btn"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
