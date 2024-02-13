import React from "react";
import "../admission/Admission.css";
import embedimg from "../../../assets/aboutus/embedded.png";
import pythonimg from "../../../assets/aboutus/python.png";
import iotimg from "../../../assets/aboutus/iot.png";
import matlabimg from "../../../assets/aboutus/matlab.png";
import aimlimg from "../../../assets/aboutus/ai&ml.png";

const Admission = () => {
  return (
    <>
      <div className="admission_container">
        <div className="admission_card card1">
          <h1>
            Advanced <span>Embedded System</span>
          </h1>
          <div className="admission_card_inner">
            <div className="admission_card_image">
              {" "}
              <img src={embedimg} alt=""></img>
            </div>
            <div className="admission_card_content">
              <p>
                {" "}
                “Advanced Embedded Systems” is designed to provide in-depth
                knowledge and hands-on experience in the development of complex
                embedded systems. The course typically covers advanced concepts,
                tools, and techniques used in the design, implementation, and
                optimization of embedded systems for various applications.
              </p>
              <div className="admission_card_button">
                <button>Get More Details</button>
                <button>Register Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="admission_card card2">
          <h1>
            Python Full Stack <span> Web Development</span>
          </h1>
          <div className="admission_card_inner">
            <div className="admission_card_content">
              <p>
                Embark on a transformative journey in Python Full Stack Web
                Development. Our comprehensive course covers front-end and
                back-end technologies, empowering you to create dynamic,
                responsive web applications. Learn from industry experts, gain
                hands-on experience, and master the tools essential for today’s
                web development landscape. Elevate your skills with our Python
                Full Stack Web Development course and open doors to a world of
                opportunities in the tech industry.
              </p>
              <div className="admission_card_button">
                <button>Get More Details</button>
                <button>Register Now</button>
              </div>
            </div>
            <div className="admission_card_image">
              {" "}
              <img src={pythonimg} alt=""></img>
            </div>
          </div>
        </div>
        <div className="admission_card card3">
          <h1>
            Internet of <span>Things</span> (<span>I</span>o<span>T</span>)
          </h1>
          <div className="admission_card_inner">
            <div className="admission_card_image">
              {" "}
              <img src={iotimg} alt=""></img>
            </div>
            <div className="admission_card_content">
              <p>
                Explore the vast possibilities of the Internet of Things (IoT)
                with our dynamic course. Dive into the world of connected
                devices, sensor networks, and smart technologies. Gain hands-on
                experience in designing IoT solutions and unlock the potential
                to reshape industries. Join us and become a leader in the
                innovative realm of IoT.
              </p>
              <div className="admission_card_button">
                <button>Get More Details</button>
                <button>Register Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="admission_card card4">
          <h1>
            MAT<span>Lab</span>{" "}
          </h1>
          <div className="admission_card_inner">
            <div className="admission_card_content">
              <p>
                Immerse yourself in the world of MATLAB with our comprehensive
                course. Learn the fundamentals of scientific computing, data
                analysis, and algorithm development. Acquire hands-on experience
                in solving complex engineering problems using MATLAB’s powerful
                tools. From data visualization to simulation, this course equips
                you with the skills to excel in diverse industries. Unleash the
                potential of MATLAB and elevate your proficiency in
                computational sciences.
              </p>
              <div className="admission_card_button">
                <button>Get More Details</button>
                <button>Register Now</button>
              </div>
            </div>
            <div className="admission_card_image">
              {" "}
              <img src={matlabimg} alt=""></img>
            </div>
          </div>
        </div>
        <div className="admission_card card5">
          <h1>
            Artificial <span>Intelligence</span> (AI) & Machine
            <span> Learning </span>(ML)
          </h1>
          <div className="admission_card_inner">
            <div className="admission_card_image">
              {" "}
              <img src={aimlimg} alt=""></img>
            </div>
            <div className="admission_card_content">
              <p>
                Dive into the realms of Artificial Intelligence (AI) and Machine
                Learning (ML) with our dynamic course. Explore cutting-edge
                technologies that power intelligent systems and automation. Gain
                hands-on experience in building predictive models and
                understanding data patterns. Unlock the potential to
                revolutionize industries with the transformative capabilities of
                AI and ML. Join us on the forefront of innovation in this
                rapidly evolving field.
              </p>
              <div className="admission_card_button">
                <button>Get More Details</button>
                <button>Register Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admission;
