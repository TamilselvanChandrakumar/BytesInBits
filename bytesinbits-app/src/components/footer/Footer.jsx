import React from "react";
import "../../components/footer/Footer.css";
import footerworld from "../../assets/footerimg/footerworld.png";
import social from "../../assets/footerimg/social.png";
import social1 from "../../assets/footerimg/social1.png";
import social2 from "../../assets/footerimg/social2.png";
import social3 from "../../assets/footerimg/social3.png";
import social4 from "../../assets/footerimg/social4.png";
import social5 from "../../assets/footerimg/social5.png";
const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_inner">
        <div className="footer_content_container">
          <div className="footer_content">
            <div className="footer_title">
              <h1>Have a Good Web </h1>
              <h1>
                <span className="design_text"> Designe</span> Today
              </h1>
            </div>
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
            <h3>Resources</h3>
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
          <div className="footer_social_links">
            <h3>Follow us</h3>
            <div className="social_links">
              <a href="/">
                <img src={social} alt=""></img>
              </a>
              <a href="/">
                <img src={social1} alt=""></img>
              </a>
              <a href="/">
                <img src={social2} alt=""></img>
              </a>
              <a href="/">
                <img src={social3} alt=""></img>
              </a>
              <a href="/">
                <img src={social4} alt=""></img>
              </a>
              <a href="/">
                <img src={social5} alt=""></img>
              </a>
            </div>
          </div>
          <div className="footer_signup_btn">
            <button className="footer_signup">Sign In</button>
            <button className="footer_contact">Contact Us</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
