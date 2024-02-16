import React from "react";
import "../../components/contactus/Contactus.css";
import contactworld from "../../assets/contactus/contactworld.png";
const Contactus = () => {
  return (
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
  );
};

export default Contactus;
