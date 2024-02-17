import React from "react";
import "../../components/contactus/Contactus.css";
import contactworld from "../../assets/contactus/contactworld.png";
import phone1 from "../../assets/contactus/phone_in_talk.png";
import email1 from "../../assets/contactus/drafts.png";
import address from "../../assets/contactus/distance.png";
import website from "../../assets/contactus/language.png";
import account from "../../assets/contactus/account_circle.png";
import email2 from "../../assets/contactus/mail.png";
import phone2 from "../../assets/contactus/call.png";
import message from "../../assets/contactus/forum.png";
import contactusimg from "../../assets/contactus/contactusimg.png";
const Contactus = () => {
  return (
    <>
      <section className="contact_header_container">
        <div className="contact_header_leftside">
          <h1>Contact Us</h1>
          <h3>Let’s Start a conversation</h3>
          <div>
            <p>“Education is the most powerful weapon you</p>
            <p>can use to change the world.” </p>
          </div>
        </div>
        <div className="contact_header_rightside">
          <img src={contactworld} alt=""></img>
        </div>
      </section>
      <div className="getin_touch_title">
        <h1>
          Get In<span> Touch</span>
        </h1>
        <p className="contact_header_title_1">
          Feel free to contact us any time.
        </p>
        <p className="contact_header_title_2">
          We will get back to you as soon as we can!
        </p>
      </div>
      <section className="getin_touch_container">
        <div className="getin_touch_inner">
          <div className="getin_touch_leftside">
            <div className="getin_touch_leftside_inner">
              <div>
                <div className="getin_image">
                  <img src={phone1} alt=""></img>
                  <h3>Phone Number</h3>
                </div>
                <p>91 9698567823</p>
              </div>
              <div>
                <div className="getin_image">
                  <img src={email1} alt=""></img>
                  <h3>Email Address</h3>
                </div>
                <p>bytesandbites@gmail.com</p>
              </div>
              <div>
                <div className="getin_image">
                  <img src={address} alt=""></img>
                  <h3>Address</h3>
                </div>
                <p>99, Roving St. Big City ,P&A</p>
                <p> Pincode: 43256</p>
              </div>
              <div>
                <div className="getin_image">
                  <img src={website} alt=""></img>
                  <h3>Websites</h3>
                </div>
                <p>WWW.bytesandbites.com</p>
              </div>
            </div>
          </div>
          <div className="getin_touch_rightside">
            <form className="getin_touch_rightside_inner">
              <div>
                {" "}
                <label>Full Name</label>
                <div className="fullname_input">
                  <img src={account} alt=""></img>
                  <div className="fullname_inner">
                    <input placeholder="First Name" type="text"></input>
                    <input placeholder="Last Name" type="text"></input>
                  </div>
                </div>
              </div>
              <div>
                <label>Email Address</label>
                <div className="input_image">
                  <img src={email2} alt=""></img>{" "}
                  <input type="email" placeholder="Email Address"></input>
                </div>
              </div>
              <div>
                <label>Mobile Number</label>

                <div className="input_image">
                  <img src={phone2} alt=""></img>{" "}
                  <input type="phone" placeholder="Mobile Number"></input>
                </div>
              </div>
              <div>
                <label>Your Message</label>

                <div className="input_textarea">
                  <img src={message} alt=""></img>{" "}
                  <textarea
                    type="text-area"
                    placeholder="Your Message"
                  ></textarea>
                </div>
              </div>
              <div>
                <button>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="contactus_image_container">
        <div className="contactus_image_inner">
          <div className="contactus_image">
            <img src={contactusimg} alt=""></img>
          </div>
          <div className="contactus_image_content">
            <h1>
              BEST <span>SOFTWARE </span>TRAINING <span>INSTITUTE </span>IN
              BANGALORE
            </h1>
          </div>
        </div>
      </section>
      <div className="footer_relative"></div>
      <section className="footer_contactus_container">
        <div className="footer_contactus_inner">
          <h1>
            Are you interested in taking your
            <span> embedded systems skill</span>s to the next level? Look no
          </h1>
          <h1>further than our advanced embedded course training institute!</h1>
          <div>
            <h2>
               Our advanced embedded <span>course training institute</span>{" "}
              today and take your skills to the next level!  
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
