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
        <h1>Get In Touch</h1>
        <p>
          Feel free to contact us any time. We will get back to you as soon as
          we can!
        </p>
      </div>
      <section className="getin_touch_container">
        <div className="getin_touch_inner">
          <div className="getin_touch_leftside">
            <div>
              <div>
                <img src={phone1} alt=""></img>
                <h3>Phone Number</h3>
              </div>
              <p>91 9698567823</p>
            </div>
            <div>
              <div>
                <img src={email1} alt=""></img>
                <h3>Email Address</h3>
              </div>
              <p>bytesandbites@gmail.com</p>
            </div>
            <div>
              <div>
                <img src={address} alt=""></img>
                <h3>Address</h3>
              </div>
              <p>99, Roving St. Big City ,P&A Pincode: 43256</p>
            </div>
            <div>
              <div>
                <img src={website} alt=""></img>
                <h3>Websites</h3>
              </div>
              <p>WWW.bytesandbites.com</p>
            </div>
          </div>
          <div className="getin_touch_rightside">
            <form>
              <div>
                {" "}
                <label>Full Name</label>
                <div>
                  <img src={account} alt=""></img>
                  <input type="text"></input>
                  <input type="text"></input>
                </div>
              </div>
              <div>
                <label>Email Address</label>
                <div>
                  <img src={email2} alt=""></img> <input type="email"></input>
                </div>
              </div>
              <div>
                <label>Mobile Number</label>

                <div>
                  <img src={phone2} alt=""></img> <input type="phone"></input>
                </div>
              </div>
              <div>
                <label>Your Message</label>

                <div>
                  <img src={message} alt=""></img>{" "}
                  <input type="text-area"></input>
                </div>
              </div>
              <div>
                <button>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
