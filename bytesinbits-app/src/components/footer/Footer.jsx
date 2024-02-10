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
          <div className="product_links">
            <h3>Product</h3>
            <a href="/">Landing Page</a>
            <a href="/">Popup Builder</a>
            <a href="/">Web-design</a>
            <a href="/">Content</a>
            <a href="/">Integrations</a>
          </div>
          <div className="usecases_links">
            <h3>Use Cases</h3>
            <a href="/">Web-developers</a>
            <a href="/">python</a>
            <a href="/">Embedded</a>
            <a href="/">IOT</a>
            <a href="/">Data Science</a>
            <a href="/">Cloud Computing</a>
          </div>
          <div className="resources_links">
            <h3>Cloud Computing</h3>
            <a href="/">Academy</a>
            <a href="/">Blog</a>
            <a href="/">Themes</a>
            <a href="/">Hosting</a>
            <a href="/">Developers</a>
            <a href="/">Support</a>
          </div>
          <div className="company_links">
            <h3>Company</h3>
            <a href="/">About Us</a>
            <a href="/">Careers</a>
            <a href="/">FAQs</a>
            <a href="/">Teams</a>
            <a href="/">Contact Us</a>
          </div>
        </div>
        <div className="footer_horizontal">
          <hr></hr>
        </div>
        <div className="footer_social">
          <div className="footer_social_linls">
            <h3>Follow us</h3>
          </div>
          <div className="footer_signup_btn">
            <button>Sign In</button>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
